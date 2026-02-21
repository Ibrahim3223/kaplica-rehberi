/* ===================================================================
   KAPLICA REHBERİ — Main JavaScript
   Vanilla JS — no framework dependencies
   =================================================================== */

(function () {
  'use strict';

  /* ---------------------------------------------------------------
     HEADER: Scroll davranışı (transparent → scrolled)
  --------------------------------------------------------------- */
  function initHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const threshold = 60;

    function updateHeader() {
      if (window.scrollY > threshold) {
        header.classList.add('is-scrolled');
        header.classList.remove('is-transparent');
      } else {
        header.classList.remove('is-scrolled');
        if (header.dataset.transparent === 'true') {
          header.classList.add('is-transparent');
        }
      }
    }

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });
  }

  /* ---------------------------------------------------------------
     MOBİL MENÜ: Hamburger toggle
  --------------------------------------------------------------- */
  function initMobileMenu() {
    const hamburger = document.querySelector('.nav__hamburger');
    const links = document.querySelector('.nav__links');
    if (!hamburger || !links) return;

    hamburger.addEventListener('click', () => {
      const isOpen = links.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Menü bağlantısına tıklayınca kapat
    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Dışarıya tıklayınca kapat
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !links.contains(e.target)) {
        links.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---------------------------------------------------------------
     INTERSECTION OBSERVER: Fade-in + Kart stagger animasyonları
  --------------------------------------------------------------- */
  function initAnimations() {
    if (!('IntersectionObserver' in window)) return;

    const fadeEls = document.querySelectorAll('.fade-in');
    const cardEls = document.querySelectorAll('.cards-grid .kaplica-card');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });

    fadeEls.forEach(el => observer.observe(el));
    cardEls.forEach(el => observer.observe(el));
  }

  /* ---------------------------------------------------------------
     SAYAÇ ANİMASYONU (İstatistik Bandı)
  --------------------------------------------------------------- */
  function initCounters() {
    if (!('IntersectionObserver' in window)) return;

    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    function animateCount(el) {
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      const duration = 1800;
      const startTime = performance.now();

      function easeOutQuart(t) {
        return 1 - Math.pow(1 - t, 4);
      }

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.round(easeOutQuart(progress) * target);
        el.textContent = prefix + value.toLocaleString('tr-TR') + suffix;
        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  }

  /* ---------------------------------------------------------------
     CLIENT-SIDE ARAMA — Hero form + Overlay
  --------------------------------------------------------------- */
  let searchData = null;
  let searchTimeout = null;

  function openSearchOverlay(query) {
    const overlay = document.getElementById('search-overlay');
    const input = document.getElementById('search-overlay-input');
    if (!overlay || !input) return;

    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    input.value = query || '';
    input.focus();

    if (query) {
      runSearch(query);
    }
  }

  function closeSearchOverlay() {
    const overlay = document.getElementById('search-overlay');
    if (!overlay) return;
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function runSearch(query) {
    const resultsEl = document.getElementById('search-overlay-results');
    const statusEl = document.getElementById('search-overlay-status');
    if (!resultsEl || !statusEl) return;

    if (!query || query.length < 2) {
      resultsEl.innerHTML = '';
      statusEl.textContent = 'Aramak için en az 2 karakter girin...';
      statusEl.style.display = '';
      return;
    }

    function doSearch() {
      const q = query.toLowerCase().trim();
      const results = searchData.filter(item => {
        const inTitle = (item.title || '').toLowerCase().includes(q);
        const inProvince = (item.province || '').toLowerCase().includes(q);
        const inDistrict = (item.district || '').toLowerCase().includes(q);
        const inConditions = (item.conditions || []).some(c => c.toLowerCase().includes(q));
        return inTitle || inProvince || inDistrict || inConditions;
      });

      resultsEl.innerHTML = '';

      if (!results.length) {
        statusEl.textContent = '"' + query + '" için sonuç bulunamadı.';
        statusEl.style.display = '';
        return;
      }

      statusEl.textContent = results.length + ' kaplıca bulundu';
      statusEl.style.display = '';

      const fragment = document.createDocumentFragment();
      results.slice(0, 20).forEach(item => {
        const a = document.createElement('a');
        a.className = 'search-result';
        a.href = item.url;
        a.innerHTML =
          '<span class="search-result__icon">♨️</span>' +
          '<span class="search-result__body">' +
            '<p class="search-result__title">' + item.title + '</p>' +
            '<p class="search-result__meta">' +
              (item.province ? item.province + (item.district ? ' › ' + item.district : '') : 'Bilinmeyen İl') +
            '</p>' +
          '</span>' +
          (item.temperature ? '<span class="search-result__temp">' + item.temperature + '°C</span>' : '');
        fragment.appendChild(a);
      });
      resultsEl.appendChild(fragment);
    }

    if (searchData) {
      doSearch();
    } else {
      statusEl.textContent = 'Yükleniyor...';
      statusEl.style.display = '';
      fetch('/index.json')
        .then(r => r.json())
        .then(data => {
          searchData = data;
          doSearch();
        })
        .catch(() => {
          statusEl.textContent = 'Arama yüklenemedi. Tekrar deneyin.';
        });
    }
  }

  function initHeroSearch() {
    const form = document.querySelector('.hero__search-inner');
    const input = document.querySelector('.hero__search-input');
    if (!form || !input) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = input.value.trim();
      openSearchOverlay(query);
    });
  }

  function initSearchOverlay() {
    const overlay = document.getElementById('search-overlay');
    const closeBtn = document.getElementById('search-overlay-close');
    const overlayInput = document.getElementById('search-overlay-input');
    if (!overlay) return;

    // Kapat butonu
    closeBtn && closeBtn.addEventListener('click', closeSearchOverlay);

    // Overlay dışına tıklama
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeSearchOverlay();
    });

    // Escape ile kapat
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
        closeSearchOverlay();
      }
    });

    // Yazarken arama (debounced)
    overlayInput && overlayInput.addEventListener('input', () => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => runSearch(overlayInput.value.trim()), 300);
    });
  }

  /* ---------------------------------------------------------------
     BACK TO TOP
  --------------------------------------------------------------- */
  function initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.classList.add('is-visible');
      } else {
        btn.classList.remove('is-visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------------------------------------------------------------
     NEARBY SLIDER: Touch/mouse drag scroll
  --------------------------------------------------------------- */
  function initSliders() {
    document.querySelectorAll('.nearby-slider').forEach(slider => {
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.style.cursor = 'grabbing';
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });

      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.cursor = '';
      });

      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.cursor = '';
      });

      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5;
        slider.scrollLeft = scrollLeft - walk;
      });
    });
  }

  /* ---------------------------------------------------------------
     HERO PARALLAX (subtle, sadece masaüstü)
  --------------------------------------------------------------- */
  function initParallax() {
    const heroBg = document.querySelector('.hero__bg');
    if (!heroBg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ---------------------------------------------------------------
     HEADER'DAKİ ARAMA İKONU (varsa)
  --------------------------------------------------------------- */
  function initHeaderSearch() {
    const searchBtn = document.querySelector('[data-open-search]');
    if (searchBtn) {
      searchBtn.addEventListener('click', () => openSearchOverlay(''));
    }
  }

  /* ---------------------------------------------------------------
     LAZY LOADING fallback (native desteklemeyenler için)
  --------------------------------------------------------------- */
  function initLazyImages() {
    if ('loading' in HTMLImageElement.prototype) return; // Native lazy loading var

    const images = document.querySelectorAll('img[loading="lazy"]');
    if (!images.length) return;

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  /* ---------------------------------------------------------------
     SMOOTH ANCHOR SCROLL
  --------------------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const headerH = document.querySelector('.site-header')?.offsetHeight || 80;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  }

  /* ---------------------------------------------------------------
     FOTOĞRAF GALERİSİ + LIGHTBOX
  --------------------------------------------------------------- */
  function initGallery() {
    const lightbox = document.getElementById('gallery-lightbox');
    if (!lightbox) return;

    const lbImg = document.getElementById('gallery-lb-img');
    const lbCounter = document.getElementById('gallery-lb-counter');
    const lbClose = document.getElementById('gallery-lb-close');
    const lbPrev = document.getElementById('gallery-lb-prev');
    const lbNext = document.getElementById('gallery-lb-next');

    const items = document.querySelectorAll('[data-gallery-src]');
    if (!items.length) return;

    const images = [];
    items.forEach(item => {
      const img = item.querySelector('img');
      images.push({ src: item.dataset.gallerySrc, alt: img ? img.alt : '' });
    });

    let currentIdx = 0;

    function showImage(idx) {
      currentIdx = (idx + images.length) % images.length;
      lbImg.style.opacity = '0';
      setTimeout(() => {
        lbImg.src = images[currentIdx].src;
        lbImg.alt = images[currentIdx].alt;
        lbImg.style.opacity = '1';
      }, 120);
      lbCounter.textContent = (currentIdx + 1) + ' / ' + images.length;
    }

    function openLightbox(idx) {
      currentIdx = idx;
      lbImg.src = images[idx].src;
      lbImg.alt = images[idx].alt;
      lbImg.style.opacity = '1';
      lbCounter.textContent = (idx + 1) + ' / ' + images.length;
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      lbClose.focus();
    }

    function closeLightbox() {
      lightbox.hidden = true;
      document.body.style.overflow = '';
    }

    items.forEach((item, idx) => {
      item.addEventListener('click', () => openLightbox(idx));
    });

    lbClose.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', () => showImage(currentIdx - 1));
    lbNext.addEventListener('click', () => showImage(currentIdx + 1));

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showImage(currentIdx - 1);
      if (e.key === 'ArrowRight') showImage(currentIdx + 1);
    });
  }

  /* ---------------------------------------------------------------
     INIT — DOMContentLoaded
  --------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initMobileMenu();
    initAnimations();
    initCounters();
    initHeroSearch();
    initSearchOverlay();
    initHeaderSearch();
    initBackToTop();
    initSliders();
    initParallax();
    initLazyImages();
    initSmoothScroll();
    initGallery();
  });

})();
