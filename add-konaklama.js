/**
 * Her kaplıca sayfasına ## Konaklama Rehberi bölümü ekler.
 * Büyük (detaylı), orta ve küçük (template) olmak üzere 3 kategori.
 */
const fs = require('fs');
const path = require('path');

// ─── BÜYÜK TERMAl MERKEZLER (200-300 kelime) ──────────────────────────────────
const bigContent = {

'gazligol-kaplicalari': `## Konaklama Rehberi

Gazlıgöl, Türkiye'nin en gelişmiş termal otel bölgelerinden biridir. Afyonkarahisar merkezine 20 km mesafedeki bu ilçede onlarca termal tesis yan yana sıralanarak ziyaretçilere geniş bir konaklama yelpazesi sunar.

### Konaklama Tipleri

**Termal Oteller:** Gazlıgöl'de 3, 4 ve 5 yıldızlı termal oteller yoğun biçimde bulunmaktadır. Pek çok tesiste odalara kadar getirilmiş termal su sistemi mevcuttur; sabah uyandığınızda yatağınızın yanıbaşındaki musluktan doğrudan termal suya erişebilirsiniz. Kapalı-açık termal havuzlar, hamam ve SPA merkezleri standart donanım olarak sunulmaktadır.

**Apart ve Villalar:** Haftalık ya da aylık kür konaklaması planlayan aileler için apart daire ve kiralık villa seçenekleri mevcuttur. Kendi mutfağınızı kullanmak isteyenler için pratik bir çözüm sunar.

**Pansiyonlar ve Günlük Giriş:** Bütçe dostu pansiyonlar ve belediye kaplıcaları, günübirlik gelenler için ekonomik bir seçenek oluşturur. Günlük giriş imkânı olan halk tesislerinde yalnızca banyo ücreti ödenir.

### Fiyat Aralığı ve Sezon Bilgisi

Gazlıgöl'de bütçe dostu pansiyonlardan termal suitli butik otellere kadar geniş bir fiyat yelpazesi vardır. Yoğun sezon Haziran–Eylül ile yılbaşı haftasıdır; bu dönemlerde doluluk hızla tükenir. Hafta içi konaklamalar hafta sonuna göre genellikle %20–30 daha uygun olur.

### Rezervasyon İpuçları

Termal tedaviden anlamlı sonuç almak için **minimum 3–5 gece**, medikal kür için **10–14 gece** konaklama planlanmalıdır. Zafer Havalimanı'ndan Gazlıgöl'e yaklaşık 30 dakikalık yolculuk; bazı oteller ücretsiz transfer hizmeti sunmaktadır. Rezervasyon yaparken "odada termal su" özelliğini teyit etmeyi unutmayın.

[Afyonkarahisar'daki diğer kaplıcaları keşfedin →](/iller/afyonkarahisar/)

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: gazligol-kaplicalari, İl: Afyonkarahisar -->`,

'sandikli-hudai-kaplicasi': `## Konaklama Rehberi

Sandıklı Hüdai, Afyonkarahisar'ın Sandıklı ilçesinde hem tarihsel hem de medikal kimliğiyle öne çıkan bir termal merkezdir. Belediye işletmesinden özel termal otellere kadar uzanan geniş konaklama yelpazesi, farklı bütçelere hitap eder.

### Konaklama Tipleri

**Termal Oteller:** Hüdai bölgesinde termal suya doğrudan erişimli oteller mevcuttur. Çamur banyosu (fango) tesislerini bünyesinde barındıran tesisler, romatizma ve deri rahatsızlıkları için özel kür programları sunar. Kür programı dahil oda seçenekleri mevcuttur.

**Belediye Tesisi:** Sandıklı Belediyesi'nin işlettiği kaplıca tesisi, ekonomik konaklama ve günlük giriş imkânı sunar. Fizyoterapi hizmetleri de burada alınabilmektedir.

**Pansiyonlar:** İlçe merkezindeki pansiyonlar, bütçe dostu bir alternatif olarak öne çıkar; kaplıca tesisine yürüme mesafesindedir.

### Fiyat Aralığı ve Sezon Bilgisi

Sandıklı Hüdai, yıl boyunca ziyaret edilebilir. Yaz ayları ve bayram tatilleri yoğun dönemlerdir; bu zamanlarda erken rezervasyon şarttır. Kür paketleri (konaklama + tedavi + fizyoterapi), günlük fiyatlandırmaya göre daha avantajlıdır.

### Rezervasyon İpuçları

Romatizma ve kas hastalıkları için **minimum 7–10 gece** konaklama önerilmektedir; medikal kür için 14 gün idealdir. Afyonkarahisar merkezinden Sandıklı'ya 50 km'dir; şehirlerarası otobüs seferleri mevcuttur. Kür programına dahil olmak için randevunuzu önceden alın.

[Afyonkarahisar kaplıcaları rehberine bakın →](/iller/afyonkarahisar/)

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: sandikli-hudai-kaplicasi, İl: Afyonkarahisar -->`,

'bursa-cekirge-kaplicalari': `## Konaklama Rehberi

Bursa Çekirge, şehir merkezinin içinde konumlanmış nadir termal bölgelerden biridir. Osmanlı'dan günümüze uzanan hamam geleneğiyle tarihi tesislerin yanında modern termal otel zincirleri de aynı caddede yer alır. Ulaşım kolaylığı ve şehir olanaklarına yakınlık Çekirge'yi cazip kılan başlıca özelliklerdir.

### Konaklama Tipleri

**Tarihi ve Modern Termal Oteller:** Çekirge'de küçük butik otellerden büyük zincir termal otellere kadar geniş seçenek bulunur. Tarihi Çekirge Caddesi boyunca sıralanan tesislerde Osmanlı mimarisi ile modern spa anlayışı iç içe geçer.

**Şehir Merkezi Otelleri:** Bursa merkezindeki otellerde kalıp Çekirge kaplıcalarına günübirlik ulaşmak mümkündür. Şehir merkezi otelleri genellikle daha ekonomiktir.

**Tarihi Hamamlar:** Çekirge ve Bursa merkezindeki tarihi Osmanlı hamamları, düşük bütçeyle özgün bir termal deneyim sunar.

### Fiyat Aralığı ve Sezon Bilgisi

Bursa'nın büyükşehir dinamikleri Çekirge fiyatlarını da etkiler. Hafta sonu doluluk oranı hafta içine göre yüksektir; İstanbul'dan gelen ziyaretçiler yoğunluğu artırır. Kış aylarında Uludağ kayak + Çekirge termal kombinasyonu, kış tatilini cazip kılar.

### Rezervasyon İpuçları

Bir şehir tatilini termal tedaviyle birleştirmek isteyenler için Bursa + Çekirge kombinasyonu idealdir. Termal tedavi için **3–5 gece** konaklama yeterlidir. [Bursa'daki diğer kaplıcaları](/iller/bursa/) da gezi planınıza dahil edebilirsiniz.

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: bursa-cekirge-kaplicalari, İl: Bursa -->`,

'yalova-termal-kaplicalari': `## Konaklama Rehberi

Yalova Termal, İstanbul'a feribot hattıyla bağlı konumuyla Türkiye'nin en erişilebilir termal destinasyonlarından biridir. Termal ilçesinde yoğunlaşmış konaklama altyapısı, hem hafta sonu kaçamağı hem de uzun süreli kür için uygundur.

### Konaklama Tipleri

**Termal Oteller:** Yalova Termal İlçesi, birçok termal otel ve bungalov tesisine ev sahipliği yapar. Atatürk'ün sağlık ziyaretleri için kullandığı tarihi yapıların yanında modern termal otel kompleksleri mevcuttur. Bazı tesislerde özel havuzlu villa ve bungalov seçenekleri bulunmaktadır.

**Apart Daireler:** Aileler veya uzun dönem konaklamalar için apart daire seçenekleri mevcuttur; termal bölgesine yürüme mesafesindeki apart tesisler ekonomik bir alternatif sunar.

**Yalova Merkez:** Yalova il merkezindeki otel ve pansiyonlardan termal ilçesine yaklaşık 12 km'lik bir yolculukla ulaşılabilir; bu seçenek daha geniş konaklama yelpazesi sunar.

### Fiyat Aralığı ve Sezon Bilgisi

İstanbul'a olan yakınlığı sayesinde hafta sonu doluluk oranı yüksektir. Yaz ayları ve bayram dönemlerinde kapasite hızla dolar; bu dönemlerde en az 2–3 hafta öncesinden rezervasyon yapılması tavsiye edilir. Hafta içi konaklamalar belirgin biçimde daha uygun fiyatlıdır.

### Rezervasyon İpuçları

İstanbul'dan araçsız seyahat edenler için en pratik güzergâh: Yenikapı veya Kabataş'tan Yalova'ya feribot, ardından ilçe içi minibüs. Termal tedavi için **3–5 gece** konaklama önerilir. Atatürk Köşkü ve çevre yürüyüş rotaları gezi programına eklenebilir.

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: yalova-termal-kaplicalari, İl: Yalova -->`,

'kizilcahamam-kaplicalari': `## Konaklama Rehberi

Kızılcahamam, Ankara'ya 80 km mesafesiyle başkent sakinlerinin gözdesi olan bir hafta sonu termal destinasyonudur. Soğuksu Milli Parkı'nın serin ormanlarına yaslanmış konaklama tesisleri, doğa ve termal tedaviyi bir arada sunar.

### Konaklama Tipleri

**Termal Oteller ve Tatil Köyleri:** Kızılcahamam'da büyük termal otel kompleksleri ve tatil köyleri mevcuttur. Orman içinde konumlanmış bungalov tipi tesisler, şehir yorgunluğunu atmak isteyenler için tercih edilir. Birçok tesiste kapalı-açık termal havuz, hamam ve SPA hizmetleri sunulmaktadır.

**Pansiyonlar:** İlçe merkezindeki küçük pansiyonlar ve butik konaklamalar, bütçe dostu bir seçenek oluşturur.

**Kamp Alanları:** Soğuksu Milli Parkı içindeki kamp alanları, aktif tatil arayanlar için ilgi çekici bir seçenektir.

### Fiyat Aralığı ve Sezon Bilgisi

Kızılcahamam yıl boyunca ziyaret edilebilir; ancak yaz ayları (Haziran–Ağustos) ve kış tatilleri en yoğun dönemlerdir. Hafta sonu doluluk oranı Ankara yakınlığı nedeniyle yüksektir. Hafta içi ziyaretlerde hem uygun fiyat hem de kalabalıksız tesis deneyimi yaşanabilir.

### Rezervasyon İpuçları

D140 karayolunu takip ederek Ankara'dan yaklaşık 1,5 saatte ulaşılabilir; düzenli otobüs seferleri de mevcuttur. Termal tedavi için **3–5 gece**, solunum rahatsızlıkları için **7–10 gece** konaklama önerilir. Soğuksu Milli Parkı'ndaki doğa yürüyüşlerini programınıza ekleyebilirsiniz.

[Ankara kaplıcaları rehberine bakın →](/iller/ankara/)

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: kizilcahamam-kaplicalari, İl: Ankara -->`,

'gonen-kaplicalari': `## Konaklama Rehberi

Gönen, termal kür geleneğiyle tanınan Balıkesir'in önde gelen destinasyonlarından biridir. Tescilli 82°C kaynak sıcaklığı ve köklü kür kültürüyle Gönen, uzun süreli konaklamalar için kapsamlı bir altyapı sunar.

### Konaklama Tipleri

**Termal Oteller:** Gönen'de 3 ve 4 yıldızlı termal oteller ile belediye tesisi çeşitli seçenekler sunar. Uzun süreli kür konaklama imkânı veren tam pansiyon ve kür paketi seçenekleri mevcuttur.

**Belediye Kaplıcası:** Gönen Belediyesi'nin işlettiği termal tesis, ekonomik giriş ve konaklama alternatifi sunar. Uzun dönemli kür misafirlerine özel indirimli paketler uygulanmaktadır.

**Pansiyonlar:** İlçe merkezindeki pansiyonlar kaplıca bölgesine yürüme mesafesindedir ve bütçe dostu bir seçenek oluşturur.

### Fiyat Aralığı ve Sezon Bilgisi

Gönen'in kür geleneği sayesinde sonbahar ve kış ayları da doluluk oranının yüksek olduğu dönemlerdir; termal turizm mevsimselliği kırar. Kür paketleri (minimum 7 gece), günlük konaklama fiyatına kıyasla belirgin biçimde avantajlıdır.

### Rezervasyon İpuçları

Balıkesir–Gönen arası 50 km olup şehirlerarası otobüs bağlantısı mevcuttur. Bandırma üzerinden feribot-tren kombinasyonu da bir seçenektir. Termal tedaviden anlamlı sonuç almak için **minimum 7–10 gece** konaklama planlanmalıdır.

[Balıkesir kaplıcaları rehberine bakın →](/iller/balıkesir/)

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: gonen-kaplicalari, İl: Balıkesir -->`,

'karahayit-kaplicalari': `## Konaklama Rehberi

Karahayıt, Pamukkale'ye 5 km mesafesiyle hem termal tedavi hem de kültür turizmi için çift avantaj sunan bir destinasyondur. Demir oksit içeriğinden kaynaklanan kırmızı renkli termal sularıyla dünyaca tanınan Karahayıt, yoğun otelcilik altyapısına sahiptir.

### Konaklama Tipleri

**Termal Oteller:** Karahayıt'ta onlarca termal otel yan yana sıralanmaktadır; pek çok tesiste kırmızı termal su ile dolu özel havuzlar mevcuttur. 3–5 yıldız arasında değişen oteller SPA, hamam ve fizyoterapi hizmetleri sunar.

**Pamukkale Kasabası (5 km):** Travertenler ve Hierapolis'e yürüme mesafesindeki küçük aile otelleri ve pansiyonlar; kültürel ziyareti öncelikleyenler buradan da Karahayıt kaplıcalarına kolayca ulaşabilir.

**Günlük Giriş:** Sadece termal deneyimi yaşamak isteyenler için günlük girişe açık tesisler mevcuttur; otel konaklaması zorunlu değildir.

### Fiyat Aralığı ve Sezon Bilgisi

Uluslararası turist ilgisi fiyatları yukarı çeker; ancak farklı segmentte alternatifler bulunmaktadır. İlkbahar ve sonbahar en uygun seyahat zamanıdır. Yaz aylarında Ege ısısı yüksek olduğundan erken rezervasyon önemlidir.

### Rezervasyon İpuçları

Denizli Çardak Havalimanı'ndan Karahayıt'a 45 dakikalık transfer. Termal tedavi için **3–5 gece** konaklama önerilir; Pamukkale gezisi de programa eklenerek kombinasyon tatil yapılabilir.

[Denizli kaplıcaları rehberine bakın →](/iller/denizli/)

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: karahayit-kaplicalari, İl: Denizli -->`,

'pamukkale': `## Konaklama Rehberi

Pamukkale, UNESCO Dünya Mirası statüsüyle milyonlarca ziyaretçinin hedeflediği Türkiye'nin en tanınan destinasyonudur. Travertenler ve Hierapolis antik kentiyle birleşen termal kaynaklar, kültür ve sağlık turizmi için benzersiz bir kombinasyon sunar.

### Konaklama Tipleri

**Pamukkale Kasabası Otelleri:** Travertenler ve Hierapolis'e yürüme mesafesindeki aile otelleri ve pansiyonlar, en popüler konaklama seçeneğidir. Bazılarında açık termal havuzlar mevcuttur.

**Karahayıt Termal Otelleri (5 km):** Kırmızı termal sularıyla ünlü Karahayıt'ta büyük termal otel kompleksleri yer alır; termal tedaviyi önceliklendirenler bu bölgeyi tercih eder.

**Denizli Merkez (20 km):** Her kategoride otel bulunur; sabah transferle travertenlere ulaşmak mümkündür.

### Fiyat Aralığı ve Sezon Bilgisi

Pamukkale yaz aylarında (Haziran–Ağustos) en yoğun dönemine girer ve fiyatlar zirveye çıkar. Nisan–Mayıs ve Eylül–Ekim ayları hem serin hava hem uygun fiyat açısından idealdir. Dünya mirası statüsü nedeniyle uluslararası talep yıl boyunca yüksektir.

### Rezervasyon İpuçları

Denizli Çardak Havalimanı İstanbul, Ankara ve birçok şehirden günlük uçuş bağlantısına sahiptir. Pamukkale + termal kür kombinasyonu için **5–7 gece** ideal bir süre; yalnızca Pamukkale ziyareti için **2–3 gece** yeterlidir.

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: pamukkale, İl: Denizli -->`,

'pamukkale-termal-kaynaklari': `## Konaklama Rehberi

Pamukkale ve çevresi, Türkiye'nin en gelişmiş turizm altyapısına sahip destinasyonlarından biridir. UNESCO Dünya Mirası alanına yakınlık, bölgedeki konaklama sektörünü canlı tutar.

### Konaklama Tipleri

**Pamukkale Kasabası:** Travertenler ve Hierapolis'e yürüme mesafesindeki pansiyonlar ve butik oteller; açık termal havuzlu tesisler popülerdir.

**Karahayıt (5 km):** Kırmızı termal sularıyla ünlü bölgede büyük termal otel kompleksleri; termal tedaviyi öncelikleyenler için önerilir.

**Denizli Merkez (20 km):** Geniş konaklama yelpazesi; sabah transferle travertenlere ulaşım mümkündür.

### Fiyat Aralığı ve Sezon Bilgisi

Bölge yıl boyunca uluslararası turist çeker. İlkbahar ve sonbahar hem hava hem fiyat açısından en idealdir. Yaz (Temmuz–Ağustos) zirvesinde erken rezervasyon şarttır.

### Rezervasyon İpuçları

Termal tedavi için **3–5 gece** konaklama önerilir. Denizli Çardak Havalimanı'ndan bölgeye ulaşım kolaydır. Travertenler + Hierapolis + termal kür üçlüsü için **5–7 gece** idealdir.

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: pamukkale-termal-kaynaklari, İl: Denizli -->`,

'kirmizi-su-karahayit': `## Konaklama Rehberi

Karahayıt'ın simgesi haline gelen kırmızı termal sular, bölgeyi hem yerli hem yabancı ziyaretçiler için çekici kılar. Pamukkale'ye 5 km mesafesiyle kültür + termal kombinasyonu yapılabilen bir lokasyondur.

### Konaklama Tipleri

**Karahayıt Termal Otelleri:** Kırmızı su havuzlu onlarca termal otel mevcuttur. 3–5 yıldızlı tesisler SPA ve hamam hizmeti sunar; oda tipine göre özel termal banyolar bulunabilir.

**Pamukkale Kasabası (5 km):** Daha küçük aile işletmesi pansiyonlar; Pamukkale gezisini öncelikleyenler için tercih edilir.

### Fiyat Aralığı ve Sezon Bilgisi

Uluslararası talep nedeniyle bölge yıl boyunca aktiftir. Yaz zirvesinde kapasite dolar; ilkbahar ve sonbahar daha sakin ve ekonomik bir deneyim sunar.

### Rezervasyon İpuçları

Cilt ve romatizmal hastalıklar için **5–7 gece** konaklama önerilir. Denizli Çardak Havalimanı'ndan transfer 40–45 dakika sürer. Pamukkale–Karahayıt arası dolmuş seferleri mevcuttur.

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: kirmizi-su-karahayit, İl: Denizli -->`,

'travertines-of-pamukkale': `## Konaklama Rehberi

Pamukkale travertenleri, UNESCO Dünya Mirası olarak Türkiye'nin en tanınan doğal harikalarından biridir. Bölgedeki konaklama altyapısı, yüksek turist yoğunluğunu karşılayacak düzeyde gelişmiştir.

### Konaklama Tipleri

**Pamukkale Kasabası:** Travertenler ve Hierapolis'e yürüme mesafesindeki küçük oteller ve pansiyonlar; açık termal havuzlu tesisler en çok tercih edilenlerdir.

**Karahayıt (5 km):** Büyük termal otel kompleksleri; kırmızı termal sularla termal deneyimini derinleştirmek isteyenler için önerilir.

### Fiyat Aralığı ve Sezon Bilgisi

Yaz ayları en yoğun dönemdir; rezervasyon zorunludur. İlkbahar (Nisan–Mayıs) ve sonbahar (Eylül–Ekim) hem fiyat hem konfor açısından tercih edilir.

### Rezervasyon İpuçları

Pamukkale ziyareti için **2–3 gece** minimum; termal tedavi eklenirse **5–7 gece** idealdir. Denizli Çardak Havalimanı bölgeye en yakın havalimanıdır.

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: travertines-of-pamukkale, İl: Denizli -->`,

};

// ─── ORTA ÖLÇEKLİ KAPLICALARA (100-150 kelime) ───────────────────────────────
const mediumContent = {

'kangal-balikli-kaplica': `## Konaklama Rehberi

Kangal, Sivas iline bağlı küçük bir ilçe olup dünyada psoriasis tedavisiyle tanınan Garra Rufa balıklı kaplıcasıyla ünlenmiştir. Organize konaklama imkânı sınırlı olsa da kaplıca tesisi kendi yatakhanesini sunmaktadır.

### Konaklama Tipleri

**Kaplıca Tesisi Yatakhanesi:** Tesisin bünyesindeki yatakhane, uzun süreli kür tedavisi için en pratik seçenektir; tedavi süreci kesintisiz sürdürülebilir.

**Sivas Merkez (100 km):** Sivas'ta her kategoride otel bulunmakta; ancak günlük gidip gelmek zahmetli olduğundan tesis içi konaklama tercih edilir.

### Rezervasyon İpuçları

Sedef hastalığı için en az **14–21 gün** konaklama gereklidir. Psoriasis mevsimi yaz (Haziran–Ağustos) olduğundan bu dönemde kapasite hızla tükenir; erken rezervasyon şarttır. [Sivas kaplıcaları rehberine bakın →](/iller/sivas/)

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: kangal-balikli-kaplica, İl: Sivas -->`,

'haymana-kaplicalari': `## Konaklama Rehberi

Haymana, Ankara'ya 70 km mesafesiyle hafta sonu kaçamağı ya da kısa kür konaklama için ideal bir termal destinasyondur. İlçede birkaç termal otel ve pansiyondan oluşan küçük ölçekli bir konaklama bölgesi mevcuttur.

### Konaklama Tipleri

**Termal Oteller ve Tesisler:** Haymana'da termal havuzlu otel ve tatil köyü seçenekleri bulunmaktadır. Bazı tesislerde kür paketi (konaklama + banyo + tedavi) mevcuttur.

**Pansiyonlar:** İlçe merkezindeki pansiyonlar bütçe dostu konaklama sağlar; kaplıca tesisine araçla ulaşmak kolaydır.

### Rezervasyon İpuçları

Ankara şehir merkezinden yaklaşık 1 saatlik yol; hafta içi ziyaretlerde daha sakin bir deneyim yaşanır. Romatizma ve eklem hastalıkları için **3–7 gece** konaklama önerilmektedir. [Ankara kaplıcaları rehberine bakın →](/iller/ankara/)

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: haymana-kaplicalari, İl: Ankara -->`,

'haymana-ilicasi': `## Konaklama Rehberi

Haymana Ilıcası, Ankara'nın Haymana ilçesinde daha az bilinen ancak mineralce zengin bir termal kaynaktır. Ankara'ya yakınlığı hafta sonu ziyaretleri için avantaj sağlar.

### Konaklama Tipleri

**Lokal Tesisler:** Haymana'da kaplıca çevresinde konaklama imkânı sunan tesis ve pansiyonlar mevcuttur.

**Haymana Merkez ve Ankara (70 km):** Haymana ilçe merkezinde pansiyonlar; daha geniş seçenek için Ankara'da konaklayıp günübirlik gidilebilir.

### Rezervasyon İpuçları

Termal tedavi için **3–5 gece** konaklama önerilmektedir. Haymana Kaplıcaları ile birlikte ziyaret edilerek bölgedeki termal kaynakları kombine edebilirsiniz.

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: haymana-ilicasi, İl: Ankara -->`,

'ilgin-kaplicalari': `## Konaklama Rehberi

Ilgın, Konya iline bağlı tarihi bir termal kasabadır. Mevlana Şehri Konya'ya yakınlığı, termal tedaviyi kültür turizmiyle birleştirme imkânı sunar.

### Konaklama Tipleri

**Termal Tesisler:** Ilgın'da termal havuzlu otel ve tesisler ile Ilgın Belediyesi kaplıcası mevcuttur. Ekonomik konaklama seçenekleri sunulmaktadır.

**Konya Merkez (80 km):** Konya'da tüm kategorilerde otel bulunur; Mevlana'yı ziyaret edip Ilgın'a günübirlik çıkmak mümkündür.

### Rezervasyon İpuçları

Konya–Ilgın arası yaklaşık 1,5 saattir; İstanbul–Konya uçuşundan sonra güzergâha dahil edilebilir. Termal tedavi için **3–5 gece** konaklama önerilir.

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: ilgin-kaplicalari, İl: Konya -->`,

'kozakli-kaplicalari': `## Konaklama Rehberi

Kozaklı, Nevşehir iline bağlı ve Kapadokya'ya 60 km mesafesiyle peri bacaları + termal kaplıca kombinasyonu yapılabilen nadir bir destinasyondur.

### Konaklama Tipleri

**Termal Oteller:** Kozaklı'da termal havuzlu otel ve moteller mevcuttur; bölge küçük olduğundan seçenek sayısı sınırlıdır ve erken rezervasyon önemlidir.

**Kapadokya Mağara Otelleri:** Ürgüp, Göreme veya Uçhisar'daki otellerde konaklanarak Kozaklı'ya günübirlik çıkmak mümkündür.

### Rezervasyon İpuçları

Kapadokya turizmiyle birleşik **5–7 gece** kombine tatil için idealdir. Nevşehir Havalimanı'ndan Kozaklı'ya yaklaşık 45 dakika sürer. [Nevşehir kaplıcaları rehberine bakın →](/iller/nevşehir/)

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: kozakli-kaplicalari, İl: Nevşehir -->`,

'saraykoy-kaplicalari': `## Konaklama Rehberi

Sarayköy, Denizli'nin Pamukkale bölgesine yakın bir ilçesidir. Karahayıt ve Pamukkale'nin yoğunluğundan uzakta daha sakin bir termal deneyim arıyorsanız iyi bir alternatiftir.

### Konaklama Tipleri

**Lokal Tesisler:** Sarayköy'de küçük ölçekli termal tesisler mevcuttur. Denizli merkezindeki büyük otellerden Sarayköy'e günübirlik ziyaret de yapılabilir.

**Denizli Merkez (30 km):** Denizli'de geniş konaklama altyapısı mevcuttur.

### Rezervasyon İpuçları

Karahayıt veya Pamukkale ile birleştirilerek **5–7 gece** kombine tur planlanabilir. Denizli Çardak Havalimanı bölgeye en yakın havalimanıdır.

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: saraykoy-kaplicalari, İl: Denizli -->`,

'simav-kaplicalari': `## Konaklama Rehberi

Simav, Kütahya iline bağlı ve ilçe evlerinin alt katlarında dahi termal su akan aktif bir jeotermal bölgedir. Az bilinen ama keşfedilmeye değer bir termal destinasyondur.

### Konaklama Tipleri

**Termal Oteller ve Tesisler:** Simav'da termal havuzlu otel ve bungalov seçenekleri mevcuttur. Bazı tesisler hem kür hem günlük giriş imkânı sunmaktadır.

**Pansiyonlar:** İlçe merkezindeki pansiyonlar termal tesislere yürüme mesafesindedir ve ekonomik bir alternatif sunar.

### Rezervasyon İpuçları

Kütahya il merkezinden Simav'a yaklaşık 80 km'dir. Romatizma ve eklem tedavisi için **5–7 gece** konaklama önerilir. Kalabalıktan uzak sakin bir kür deneyimi arayanlar için idealdir.

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: simav-kaplicalari, İl: Kütahya -->`,

'karacasu-kaplicalari': `## Konaklama Rehberi

Bolu iline bağlı Göynük ilçesindeki Karacasu Kaplıcaları, Abant Gölü ve Bolu ormanlarıyla çevrili doğa içinde bir termal destinasyondur.

### Konaklama Tipleri

**Tesis Konaklama:** Karacasu tesislerinde konaklama seçeneği mevcuttur. Bolu'nun orman konumuyla bungalov ya da tatil köyü konseptli konaklamalar yaygındır.

**Bolu Merkez (60 km) ve Abant (40 km):** Bolu merkezindeki oteller veya Abant çevresindeki tatil tesisleri, Karacasu'ya gezi güzergâhı olarak programlanabilir.

### Rezervasyon İpuçları

Bolu–Abant–Karacasu kombinasyonu haftasonları için harika bir doğa + termal güzergâhıdır. Termal tedavi için **3–5 gece** konaklama önerilir.

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: karacasu-kaplicalari, İl: Bolu -->`,

'oylat-kaplicalari': `## Konaklama Rehberi

Oylat, Bursa'nın İnegöl ilçesine bağlı, dar bir vadi içinde konumlanmış sakin bir termal destinasyondur. Orman içi konumuyla Bursa Çekirge'nin şehir gürültüsünden uzak bir kür alternatifi sunar.

### Konaklama Tipleri

**Termal Tesisler:** Oylat vadisinde sınırlı sayıda küçük ölçekli termal otel ve pansiyonlar hizmet verir. Doğal ortam içindeki bu tesisler dinlenme ve iyileşme için elverişlidir.

**İnegöl Merkez (35 km):** İnegöl'deki otellerde konaklanarak Oylat'a günübirlik gidilebilir; ancak kür amacıyla gidilecekse tesis içi konaklama daha verimlidir.

### Rezervasyon İpuçları

Bursa–İnegöl arası 40 km, İnegöl–Oylat 35 km'dir. Romatizma ve sinir hastalıkları için **5–7 gece** konaklama önerilir. [Bursa kaplıcaları rehberine bakın →](/iller/bursa/)

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: oylat-kaplicalari, İl: Bursa -->`,

'armutlu-kaplicalari': `## Konaklama Rehberi

Armutlu, Yalova'nın Marmara kıyısında yer alır ve hem deniz hem termal imkânı sunan nadir destinasyonlardandır. Şehirlilerden uzak, sakin bir yarımada atmosferi hâkimdir.

### Konaklama Tipleri

**Termal ve Deniz Kıyısı Tesisler:** Armutlu'da deniz kıyısına yakın termal havuzlu küçük oteller ve tatil beldeleri mevcuttur. Yaz aylarında deniz + termal kombinasyonu büyük ilgi görür.

**Pansiyonlar:** İlçede ekonomik pansiyonlar mevcuttur; ailelere uygun fiyat avantajı sağlar.

### Rezervasyon İpuçları

İstanbul'dan en pratik güzergâh: Yenikapı'dan Yalova'ya feribot, ardından Armutlu'ya minibüs (toplam ~2 saat). Yaz aylarında hızla dolan Armutlu'da **önceden rezervasyon şarttır**.

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: armutlu-kaplicalari, İl: Yalova -->`,

'koycegiz-sultaniye-kaplicalari': `## Konaklama Rehberi

Köyceğiz–Sultaniye Kaplıcaları, Muğla'nın Köyceğiz Gölü kıyısında tekneyle ulaşılan eşsiz konumuyla Türkiye'nin en ilginç termal destinasyonlarından biridir. Açık hava çamur banyosu ve göl-orman manzarası Ege kıyılarının mücevheri sayılır.

### Konaklama Tipleri

**Köyceğiz Merkez:** Sultaniye kaplıcalarına en yakın konaklama noktasıdır. Göl kıyısında butik oteller, pansiyonlar ve tatil evleri mevcuttur; buradan tekneyle 30–40 dakikada kaplıcalara ulaşılır.

**Dalyan (15 km):** İztuzu plajı ve Caretta caretta ile ünlü Dalyan'dan günübirlik tekne turuyla Sultaniye'ye ulaşmak mümkündür.

### Rezervasyon İpuçları

Muğla-Fethiye güzergâhına dahil edilerek **5–7 gece** kombine Ege tatili planlanabilir. Yaz (Haziran–Eylül) en yoğun dönemdir. [Muğla kaplıcaları rehberine bakın →](/iller/muğla/)

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: koycegiz-sultaniye-kaplicalari, İl: Muğla -->`,

'ilica-kaplicasi-erzurum': `## Konaklama Rehberi

Erzurum Pasinler İlıcası, Türkiye'nin doğusundaki en köklü termal destinasyonlarından biridir. Erzurum şehir merkezine yakınlığı konaklama seçeneklerini genişletmektedir.

### Konaklama Tipleri

**Tesis Konaklama:** Pasinler İlıcası çevresinde pansiyonlar ve küçük oteller hizmet verir.

**Erzurum Merkez (35 km):** Erzurum'da tüm kategorilerde otel bulunur; kaplıcaya günübirlik gidilebilir.

### Rezervasyon İpuçları

Erzurum Havalimanı'ndan şehir merkezine 5 km, Pasinler İlıcası'na 35 km'dir. Kış mevsiminde Palandöken kayak merkezi ile kaplıca kombinasyonu yapılabilir. Romatizma için **5–7 gece** konaklama önerilir. [Erzurum kaplıcaları rehberine bakın →](/iller/erzurum/)

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: ilica-kaplicasi-erzurum, İl: Erzurum -->`,

'seferihisar-sigacik-kaplicalari': `## Konaklama Rehberi

Seferihisar, İzmir'e 45 km mesafesiyle "Cittaslow" (yavaş şehir) unvanına sahip, Ege'nin sakinlik arayan ziyaretçilerine hitap eden bir ilçedir. Sığacık'taki Antik Teos alanıyla birlikte ziyaret edilebilir.

### Konaklama Tipleri

**Seferihisar/Sığacık Butik Otelleri:** Küçük ölçekli butik otel ve pansiyonlar, yavaş yaşam felsefesiyle örtüşen bir deneyim sunar.

**İzmir Merkez (45 km):** İzmir'de konaklanarak Seferihisar'a günübirlik gezi yapılabilir.

### Rezervasyon İpuçları

İzmir Havalimanı'ndan Seferihisar'a yaklaşık 50 dakika. Termal tedavi + yavaş yaşam deneyimi için **3–5 gece** konaklama önerilir. Yaz aylarında deniz tatiliyle birleştirilebilir.

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: seferihisar-sigacik-kaplicalari, İl: İzmir -->`,

'dikili-termal-kaplicalari': `## Konaklama Rehberi

Dikili, İzmir'in kuzeyinde Ege kıyısında konumlanmış bir ilçedir. Termal kaynakları ve denize yakınlığıyla yaz döneminde deniz + termal kombinasyonu sunar.

### Konaklama Tipleri

**Dikili Otelleri:** Dikili'de sahil boyunca otel ve tatil köyleri sıralanmaktadır; kaplıca tesislerine araçla kolayca ulaşılabilir.

**Bergama Yakınlığı:** Tarihi Bergama (Pergamon) Dikili'ye 30 km mesafededir; kültür + termal + deniz üçlüsü için ideal güzergâh oluşturur.

### Rezervasyon İpuçları

İzmir Havalimanı'ndan Dikili'ye yaklaşık 90 dakika. Yaz aylarında Ege sahil sezonu + termal tedavi için **5–7 gece** konaklama planlanabilir.

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: dikili-termal-kaplicalari, İl: İzmir -->`,

'edremit-kaplicalari': `## Konaklama Rehberi

Edremit, Balıkesir'in Körfez kıyısında zeytin ormanları ve Kazdağları eteklerinde termal kaynakları barındıran bir destinasyondur. Deniz + yayla + termal kombinasyonu mümkündür.

### Konaklama Tipleri

**Edremit Körfezi Tesisleri:** Edremit, Burhaniye ve Akçay'da sahil boyunca geniş konaklama yelpazesi mevcuttur; butik otellerden büyük tatil köylerine kadar seçenekler çeşitlidir.

### Rezervasyon İpuçları

Yaz aylarında Ege sahil tatiliyle termal kür birleştirilebilir. Balıkesir Koca Seyit Havalimanı'ndan Edremit'e yaklaşık 50 dakika sürer.

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: edremit-kaplicalari, İl: Balıkesir -->`,

'gure-kaplicalari': `## Konaklama Rehberi

Güre, Balıkesir'in Edremit ilçesine bağlı, Kazdağları eteklerinde deniz kıyısına yakın konumlu bir termal destinasyondur. Tuzlu deniz suyu ile termal su banyosunu aynı bölgede deneyimlemek mümkündür.

### Konaklama Tipleri

**Güre Termal Tesisleri:** Güre'de termal havuzlu oteller ve tatil köyleri mevcuttur; bazılarında deniz manzarası ve termal havuza erişim bulunur.

**Edremit–Akçay:** Yakın çevredeki tatil beldelerinde geniş konaklama seçenekleri; Güre'ye günübirlik erişim de mümkündür.

### Rezervasyon İpuçları

Yaz döneminde (Temmuz–Ağustos) kapasite dolmaktadır; erken rezervasyon şarttır. Kazdağları yürüyüş güzergâhları Güre programına eklenebilir.

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: gure-kaplicalari, İl: Balıkesir -->`,

'omer-gecek-kaplicalari': `## Konaklama Rehberi

Ömer-Gecek Kaplıcaları, Afyonkarahisar il merkezine 7 km mesafesiyle kentin neredeyse içinde sayılabilecek bir termal destinasyondur.

### Konaklama Tipleri

**Termal Oteller (Ömer-Gecek bölgesi):** Kaplıca bölgesinde termal havuzlu oteller ve belediye tesisi mevcuttur. Büyük termal otel kompleksleri bu bölgede yoğunlaşmıştır.

**Afyonkarahisar Merkez (7 km):** Şehir merkezindeki her kategoride otel; kaplıcalara kısa sürede ulaşılabilir.

### Rezervasyon İpuçları

Zafer Havalimanı–Afyon merkez arası 15 km, kaplıcaya 22 km'dir. Romatizma ve eklem tedavisi için **5–10 gece** konaklama önerilir. Afyonkarahisar'ın lokum ve kaymak lezzetleri de kür programına güzel bir ek sunar.

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: omer-gecek-kaplicalari, İl: Afyonkarahisar -->`,

};

// ─── KÜÇÜK KAPLICA ŞABLONU ────────────────────────────────────────────────────
function generateSmall(province, district, slug) {
  const nearestCity = province;
  return `## Konaklama Rehberi

${district} Kaplıcaları bölgesindeki konaklama seçenekleri sınırlı olmakla birlikte, yakın çevrede çeşitli pansiyon ve otel alternatifleri bulunmaktadır. Kaplıca tesisinde günlük giriş ya da tesis bünyesinde konaklama imkânı mevcut olabilir; ziyaret öncesinde teyit edilmesi önerilir.

Termal tedaviden en iyi sonucu almak için **minimum 3–5 gece** konaklama planlanmalıdır. ${nearestCity} il merkezinde daha geniş konaklama seçenekleri mevcuttur.

[${nearestCity} kaplıcaları rehberine bakın →](/iller/${province.toLowerCase().replace('ı','i').replace('İ','i').replace('ş','s').replace('ğ','g').replace('ü','u').replace('ö','o').replace('ç','c')}/)\

<!-- BOOKING_AFFILIATE_PLACEHOLDER: Bu alana ileride Booking.com widget'ı veya affiliate linkleri eklenecektir. Kaplıca: ${slug}, İl: ${province} -->`;
}

// ─── YARDIMCI FONKSİYONLAR ───────────────────────────────────────────────────

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { province: '', district: '' };
  const fm = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w+):\s*"?([^"\n\r]+?)"?\s*$/);
    if (m) fm[m[1]] = m[2].trim();
  }
  return fm;
}

function insertSection(content, sectionContent) {
  const markers = [
    '\n## Kimler İçin Uygun',
    '\n## Mevsim Rehberi',
    '\n## Ziyaretçi İpuçları',
    '\n## Seyahat Planlama',
  ];

  for (const marker of markers) {
    const idx = content.indexOf(marker);
    if (idx !== -1) {
      return content.slice(0, idx) + '\n\n' + sectionContent + '\n' + content.slice(idx);
    }
  }

  // Varsa --- separatöründen önce
  const sepIdx = content.indexOf('\n---\n');
  if (sepIdx !== -1) {
    return content.slice(0, sepIdx) + '\n\n' + sectionContent + '\n' + content.slice(sepIdx);
  }

  // Yoksa sona ekle
  return content.trimEnd() + '\n\n' + sectionContent + '\n';
}

// ─── ANA İŞLEM ───────────────────────────────────────────────────────────────

const contentDir = 'content/kaplicalar';
const files = fs.readdirSync(contentDir)
  .filter(f => f.endsWith('.md') && f !== '_index.md');

let modified = 0, skipped = 0, small = 0;

for (const file of files) {
  const slug = file.replace('.md', '');
  const filePath = path.join(contentDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  if (content.includes('## Konaklama Rehberi')) {
    console.log(`SKIP: ${slug}`);
    skipped++;
    continue;
  }

  let sectionContent = bigContent[slug] || mediumContent[slug];

  if (!sectionContent) {
    const fm = parseFrontmatter(content);
    const province = fm.province || 'İl Merkezi';
    const district = fm.district || slug;
    sectionContent = generateSmall(province, district, slug);
    small++;
  }

  const newContent = insertSection(content, sectionContent);
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`OK: ${slug}`);
  modified++;
}

console.log(`\nSonuç: ${modified} dosya güncellendi, ${skipped} atlandı (${small} şablon kullandı).`);
