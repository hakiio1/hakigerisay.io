# GeriSay - Sunum İçeriği

## 1. Problem Tanımı ve Hedef Kullanıcı Kitlesi

**Problem:**
- İş ve görev takibi ile zaman yönetimi genellikle ayrı araçlarla yapılıyor
- Görevlerin durumları ve harcanan zamanın takibi arasında kopukluk yaşanıyor
- İş akışı sırasında görevlerin durumlarını manuel olarak güncellemek zaman kaybına neden oluyor
- Görevlerin tamamlanma süreleri hakkında doğru tahminler yapılamaması verimliliği düşürüyor

**Hedef Kullanıcı Kitlesi:**
- Bireysel kullanıcılar: Günlük görevlerini organize etmek ve zamanını verimli yönetmek isteyenler
- Proje yöneticileri: Ekip görevlerini takip etmek ve zaman çizelgelerini yönetmek isteyenler
- Yazılım geliştiriciler: Sprint görevlerini takip edip zaman tahminlerini doğrulamak isteyenler
- Freelancerlar: Müşteri projelerini organize etmek ve faturalama için zaman takibi yapmak isteyenler
- Öğrenciler: Okul ödevleri ve projelerini organize etmek ve zamanını planlamak isteyenler

## 2. Ürün Tanıtımı

**GeriSay Nedir?**
- Kanban tabanlı görev yönetimi ve geri sayım zamanlayıcısını birleştiren web uygulaması
- Sürükle-bırak arayüzü ile görev durumlarını kolay yönetme imkanı
- Her görev için entegre zamanlayıcı sistemi
- Görev durumu ve zamanlayıcı arasında otomatik senkronizasyon
- Mobil ve masaüstü cihazlar için optimize edilmiş responsive tasarım
- Kurulum gerektirmeyen, tarayıcı üzerinden çalışan yapı

**Temel Özellikler:**
- Üç kolonda görev yönetimi: Yapılacak, Devam Ediyor, Tamamlandı
- Her görev için özelleştirilebilir süre, öncelik ve detaylar
- Otomatik durum geçişleri ve bildirimler
- Arama ve filtreleme özellikleri
- Veri kalıcılığı için yerel depolama

## 3. Ürünün Sağladığı Avantajlar

**Rekabet Avantajları:**
- **Entegrasyon**: Kanban ve zamanlayıcı entegrasyonu ile iki araç yerine tek uygulamada çözüm
- **Otomasyon**: Zamanlayıcı durumuna göre otomatik görev durumu güncellemeleri ile manuel iş yükünün azaltılması
- **Sezgisel Kullanım**: Kullanımı kolay sürükle-bırak arayüzü ile minimum öğrenme eğrisi
- **Kurulum Gerektirmez**: Tarayıcı üzerinden anında kullanım, sunucu veya uygulama kurulumu gerektirmez
- **Çevrimdışı Çalışabilme**: LocalStorage kullanımı ile çevrimdışı ortamda da çalışabilme
- **Responsive Tasarım**: Tüm cihazlarda tutarlı kullanıcı deneyimi
- **Hızlı ve Hafif**: Minimum kaynak kullanımı ile hızlı çalışma

## 4. Gelir Modeli

**Freemium Model:**
- **Ücretsiz Sürüm**: Temel özellikler (3 kolon, 20 görev limiti, temel zamanlayıcı)
- **Premium Sürüm** ($5/ay veya $49/yıl):
  - Sınırsız görev ve özel kolonlar
  - Gelişmiş raporlama ve analitikler
  - Takım işbirliği özellikleri
  - Bulut senkronizasyon
  - API entegrasyonları (Slack, Gmail, vb.)
  - Öncelikli destek

**Kurumsal Planlar:**
- **Takım Planı** ($12/kullanıcı/ay): 5-50 kullanıcı için ekip özellikleri
- **İşletme Planı** ($20/kullanıcı/ay): 50+ kullanıcı için gelişmiş yönetim ve destek
- **Özel Çözümler**: Büyük şirketler için özel entegrasyonlar ve özellikler

**Ek Gelir Kaynakları:**
- Premium görev şablonları
- Sektöre özel eklentiler
- Danışmanlık ve eğitim hizmetleri

## 5. Ürün Akış Şeması

**Temel Kullanıcı Akışı:**
```
[Kullanıcı] → [Görev Oluşturma] → [Zamanlayıcı Ayarlama] → [Görevi Başlatma]
                                                               ↓
[Rapor Görüntüleme] ← [Görev Tamamlandı] ← [Otomatik Durum Değişimi] ← [Zamanlayıcı İşlemi]
```

**Görev Durumu Geçiş Akışı:**
```
                     [Manuel Sürükleme]
                     ↗              ↘
[Yapılacak] ←→ [Devam Ediyor] ←→ [Tamamlandı]
     ↑             ↓                ↑
     └─── [Zamanlayıcı] ───→ [Süre Dolduğunda]
```

**Veri Akışı:**
```
[Kullanıcı Arayüzü] ↔ [Durum Yöneticisi] ↔ [Saf Fonksiyonlar] → [LocalStorage]
       ↑                     ↓
       └───────── [Zamanlayıcı Modülü]
```

## 6. Fonksiyonel Programlama ile İlişkisi

**Kullanılan Fonksiyonel Programlama Kavramları:**

1. **Saf (Pure) Fonksiyonlar**:
   - `formatTimeUnit`, `formatTime`, `calculateTotalSeconds` gibi yan etkisiz fonksiyonlar
   - `createTaskObject`, `updateTask`, `removeTask` gibi veri dönüşüm fonksiyonları
   - Aynı girdilerle her zaman aynı çıktıları üreten deterministik yapı

2. **Değişmezlik (Immutability)**:
   - Objelerin kopyalanarak güncellenmesi (`{...task, property: newValue}` şeklinde)
   - Dizilerin değiştirilmeden yeni diziler oluşturulması (`[...tasks]`, `tasks.map()`, `tasks.filter()`)
   - `const` ile tanımlanan değişmez sabitler

3. **Yüksek Seviye Fonksiyonlar (Higher-Order Functions)**:
   - `map`, `filter`, `reduce` gibi dizi işleme fonksiyonlarının kullanımı
   - Callback fonksiyonlarının parametre olarak geçilmesi

4. **Kapalılık (Closure)**:
   - `createAppState` fonksiyonu ile özel kapsülleme
   - İç durumun dış erişime karşı korunması ve kontrollü API sunulması

5. **Fonksiyonel Kompozisyon**:
   - İşlevlerin birbiri ardına zincirlenmesi
   - Küçük, odaklanmış fonksiyonların daha karmaşık işlevler oluşturmak üzere birleştirilmesi

**Fonksiyonel Yaklaşımın Avantajları:**
- Kod tekrarının azaltılması
- Test edilebilirliğin artması
- Hata ayıklamanın kolaylaşması
- Yan etkilerin minimize edilmesi
- Paralelleştirme potansiyelinin artması

## 7. Logo Gösterimi ve Anlamı

**GeriSay Logosu:**
- Minimalst tasarım: İş akışı ve zamanı temsil eden bir sembol
- Mavi ve yeşil tonları: Üretkenlik, güven ve ilerlemeyi simgeler
- Akış çizgileri: Görevlerin bir durumdan diğerine kesintisiz geçişini temsil eder
- Saat ikonunun soyutlanmış hali: Zaman yönetimi konseptini vurgular

**Logo Felsefesi:**
- Basitlik ve netlik: Karmaşık iş süreçlerini basitleştirme misyonumuzu yansıtır
- Akıcılık: Sezgisel ve engelsiz kullanıcı deneyimini temsil eder
- Modern tasarım: Çağdaş ve teknoloji odaklı yaklaşımımızı gösterir

## 8. Reklam Videosu Gösterimi

**"Zamanı ve Görevlerini Tek Bir Yerde Yönet"**

[Bu kısımda hazırlanmış olan reklam videosu gösterilecek]

Video içeriği:
- Kullanıcının iş yükü altında ezildiğini ve farklı araçlar arasında geçiş yapmak zorunda kaldığını gösteren başlangıç
- GeriSay'un kanban paneli ve zamanlayıcı entegrasyonunu gösteren çözüm sunumu
- Sürükle-bırak ve otomatik zamanlayıcı özelliklerinin görsel demonstrasyonu
- Görev tamamlama ile kullanıcının başarı hissini yansıtan final sahnesi

## 9. Kullanılan LLM Destekleri

**Proje Geliştirme Sürecinde LLM Kullanımı:**

1. **Tasarım Aşaması:**
   - UI/UX tasarımı için fikirler ve modern arayüz prensipleri (ChatGPT)
   - Renk paleti ve görsel tasarım önerileri (DALL-E/Midjourney)

2. **Kodlama Aşaması:**
   - Fonksiyonel programlama prensiplerinin uygulanması (ChatGPT)
   - Kompleks CSS düzenleri ve animasyonlar (ChatGPT)
   - JavaScript için en iyi pratikler ve optimizasyon (ChatGPT/Gemini)

3. **Test ve Geliştirme:**
   - Kod gözden geçirme ve hata ayıklama desteği (ChatGPT)
   - Farklı tarayıcı ve cihaz uyumluluğu için iyileştirmeler (ChatGPT)

4. **Dokümantasyon ve Pazarlama:**
   - README ve kullanım kılavuzu oluşturma (ChatGPT)
   - Demo senaryoları ve sunum içeriği geliştirme (Claude)
   - Pazarlama metinleri ve kullanıcı hikayeleri (ChatGPT)

## 10. Kapanış ve Soru-Cevap

**Özet:**
- GeriSay, görev yönetimi ve zaman takibini tek bir uygulamada birleştirerek verimliliği artırır
- Sezgisel tasarım, otomatik durum geçişleri ve responsive arayüz ile her kullanıcıya hitap eder
- Fonksiyonel programlama prensipleri ile geliştirilmiş temiz ve bakımı kolay bir mimari sunar
- Freemium iş modeli ile geniş kullanıcı tabanı hedefler ve sürdürülebilir gelir sağlar

**Gelecek Planları:**
- Takım işbirliği özellikleri
- Mobil uygulamalar (iOS/Android)
- API ve üçüncü parti entegrasyonlar
- Yapay zeka destekli görev süre tahminleri
- Gelişmiş raporlama ve analitik araçları

**Soru-Cevap Bölümü:**
- Katılımcılardan gelen soruları cevaplayacağız 