# GeriSay - Demo Senaryoları

Bu belge, GeriSay uygulamasının sunumunda gösterilebilecek demo senaryolarını içerir. Senaryolar, yeni sunum yapısına uygun şekilde düzenlenmiştir ve uygulamanın farklı özelliklerini vurgulamaktadır.

## Senaryo 1: Problem ve Çözüm Demonstrasyonu

**Hedef:** GeriSay'un çözdüğü problemi ve çözüm yaklaşımını göstermek.

**Adımlar:**
1. Önce yaygın kullanılan bir görev yönetim uygulaması (Örn: Trello) açın
2. Ardından ayrı bir zamanlayıcı uygulaması (Örn: Pomofocus) açın
3. İki uygulama arasında geçiş yaparak manuel işlemleri gösterin:
   - Görev yönetim uygulamasında bir görev oluşturma
   - Zamanlayıcı uygulamasına geçiş yapıp süre ayarlama
   - Zamanlayıcı bittiğinde tekrar görev yönetim uygulamasına geçip durumu güncelleme
4. GeriSay uygulamasını açın ve entegre çözümü gösterin:
   - Görev oluşturma ve süre ayarlamayı tek bir arayüzde yapma
   - Zamanlayıcı başlatma ve otomatik durum değişimini gösterme

**Vurgulanan Özellikler:**
- Entegre görev yönetimi ve zamanlayıcı
- Zaman tasarrufu ve verimlilik artışı
- Otomatikleştirilmiş iş akışı

## Senaryo 2: Temel Ürün Özellikleri Demonstrasyonu

**Hedef:** GeriSay'un temel özelliklerini ve kullanım kolaylığını göstermek.

**Adımlar:**
1. "+ Yeni Görev" butonuna tıklayın
2. Aşağıdaki bilgileri girin:
   - Başlık: "Müşteri toplantısı hazırlığı"
   - Açıklama: "Sunum dosyalarını hazırla ve kontrol et"
   - Öncelik: "Yüksek"
   - Sorumlu: "Mehmet Yılmaz"
   - Teslim Tarihi: [Bugünden 2 gün sonra]
   - Süre: 45 dakika
3. "Kaydet" butonuna tıklayın
4. Görevin "Yapılacak" kolonunda oluşturulduğunu gösterin
5. Görev kartındaki "Başlat" butonuna tıklayın
6. Görevin otomatik olarak "Devam Ediyor" kolonuna taşındığını gösterin
7. Görev tamamlandığında (demo için zamanlayıcıyı hızlandırabilirsiniz), sesli bildirimin çalması ve görevin "Tamamlandı" kolonuna otomatik geçişini gösterin

**Vurgulanan Özellikler:**
- Sezgisel kullanıcı arayüzü
- Otomatik durum geçişleri
- Görsel ve işitsel bildirimler

## Senaryo 3: Ürünün Avantajları Demonstrasyonu

**Hedef:** GeriSay'un rekabet avantajlarını göstermek.

**Adımlar:**
1. **Entegrasyon Avantajı:**
   - Birden fazla görev oluşturun ve hepsine süre ayarlayın
   - Sürelerin takibinin tek bir arayüzde nasıl yapıldığını gösterin

2. **Otomasyon Avantajı:**
   - Bir görevi sürükleyerek "Devam Ediyor" kolonuna taşıyın ve zamanlayıcının otomatik başladığını gösterin
   - Bir görevi sürükleyerek "Tamamlandı" kolonuna taşıyın ve zamanlayıcının otomatik durduğunu gösterin

3. **Responsive Tasarım Avantajı:**
   - Tarayıcı boyutunu değiştirerek arayüzün nasıl uyum sağladığını gösterin
   - Mobil görünümü (tarayıcı geliştirici araçlarıyla) simüle edin

4. **Çevrimdışı Çalışabilme Avantajı:**
   - Tarayıcıyı çevrimdışı moda alın
   - Uygulamanın çalışmaya devam ettiğini ve verilerin kaybolmadığını gösterin

**Vurgulanan Özellikler:**
- Rekabet avantajları
- Kullanıcı deneyimi iyileştirmeleri
- Teknik üstünlükler

## Senaryo 4: Gelir Modeli Demonstrasyonu

**Hedef:** GeriSay'un gelir modelini ve ücretli özellikleri göstermek.

**Adımlar:**
1. **Ücretsiz Sürüm Limitleri:**
   - 20 görev oluşturun ve limit uyarısını gösterin
   - Temel özelliklerle neler yapılabileceğini gösterin

2. **Premium Özelliklere Geçiş:**
   - "Premium'a Yükselt" butonuna tıklayın
   - Fiyatlandırma planlarını gösterin (Aylık/Yıllık seçenekler)
   - Ödeme simülasyonu yapın

3. **Premium Özellikleri:**
   - Sınırsız görev oluşturma
   - Özel kolon ekleme ("Beklemede", "İncelemede" gibi)
   - Gelişmiş raporlama paneli
   - Takım üyesi davet etme
   - API entegrasyonları

4. **Kurumsal Plan Özellikleri:**
   - Yönetici kontrol paneli
   - Toplu kullanıcı yönetimi
   - Detaylı kullanım analitikleri

**Vurgulanan Özellikler:**
- Freemium iş modeli
- Ücretli özelliklerin değer önerisi
- Ölçeklenebilir fiyatlandırma

## Senaryo 5: Fonksiyonel Programlama Gösterimi

**Hedef:** GeriSay'un fonksiyonel programlama prensiplerinin uygulanışını ve avantajlarını teknik olarak göstermek.

**Adımlar:**
1. **Tarayıcı Geliştirici Araçlarını Açın**
2. **Saf Fonksiyonlar:**
   - Console üzerinden `formatTime(2, 30, 45)` gibi fonksiyonları çağırın
   - Her çağrıda aynı sonucu verdiğini gösterin

3. **Değişmezlik (Immutability):**
   - Tarayıcı konsolunda:
     ```javascript
     // Bir görev alın
     const task = appState.getTaskById('123');
     // Değişiklik yapmaya çalışın
     task.title = 'Değiştirilmiş Başlık';
     // Orijinal task nesnesinin değişmediğini gösterin
     console.log(appState.getTaskById('123'));
     ```

4. **Durum Yönetimi:**
   - Görev durumunun değişimini developer tools > Application > LocalStorage üzerinden izleyin
   - Bir görevi "Yapılacak"tan "Devam Ediyor"a taşıyın
   - Depolanan veri yapısının nasıl değiştiğini gösterin

5. **Hata Ayıklama Kolaylığı:**
   - Developer tools > Sources panelinde bir breakpoint ekleyin
   - Bir zamanlayıcı başlatın ve kod yürütmesini adım adım takip edin

**Vurgulanan Özellikler:**
- Fonksiyonel programlama prensipleri
- Kod kalitesi ve bakım kolaylığı
- Öngörülebilir durum yönetimi

## Senaryo 6: Arama ve Filtreleme

**Hedef:** GeriSay'un arama ve filtreleme yeteneklerini göstermek.

**Adımlar:**
1. Çeşitli görevleri oluşturun (farklı öncelikler ve içeriklerle)
2. Arama kutusuna "rapor" yazın
3. Sadece rapor ile ilgili görevlerin görüntülendiğini gösterin
4. Öncelik filtresini "Yüksek" olarak ayarlayın
5. Yüksek öncelikli görevlerin gösterildiğini gösterin
6. Hem arama hem filtrelemeyi birlikte kullanın

**Vurgulanan Özellikler:**
- Gerçek zamanlı arama
- Çoklu filtreleme
- Kullanıcı dostu arayüz

## Senaryo 7: Kullanıcı Hikayeleri ve Çeşitli Kullanım Senaryoları

**Hedef:** GeriSay'un farklı kullanıcı segmentleri için nasıl değer sunduğunu göstermek.

**Adımlar:**
1. **Bireysel Kullanıcı Senaryosu:**
   - Günlük görevler (alışveriş, spor, okuma) oluşturma
   - Pomodoro tekniği ile çalışma (25 dakikalık görevler)

2. **Yazılım Geliştirici Senaryosu:**
   - Sprint görevleri oluşturma
   - Bug takibi ve çözüm süreleri

3. **Proje Yöneticisi Senaryosu:**
   - Ekip üyelerine görev atama
   - Toplantı zamanlaması ve takibi

4. **Öğrenci Senaryosu:**
   - Ders çalışma programı
   - Ödev takibi ve zaman yönetimi

**Vurgulanan Özellikler:**
- Çeşitli kullanım alanları
- Farklı kullanıcı ihtiyaçlarına uyarlanabilirlik
- Değer önerisi 