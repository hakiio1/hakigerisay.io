# GeriSay - Kanban Tabanlı İş ve Zaman Yönetimi Uygulaması

<p align="center">
  <img src="images/logo.svg" alt="GeriSay Logo" width="100">
</p>

GeriSay, projelerinizi ve görevlerinizi yönetmenizi sağlayan, zamanlayıcı özelliği ile iş akışınızı optimize eden modern bir web uygulamasıdır.

## 🌟 Özellikler

### 📋 Kanban Panosu
- Üç kolon yapısı: Yapılacak, Devam Ediyor, Tamamlandı
- Sürükle-bırak özelliği ile görev durumlarını kolayca değiştirme
- Görev sayısını gösteren kolon sayaçları
- Anlamlı ikonlar ve görsel ipuçları

### ⏱️ Entegre Zamanlayıcı
- Her görev için özel zamanlayıcı
- Saat, dakika, saniye olarak süre belirleme
- Başlat, duraklat ve sıfırla kontrolleri
- Sesli ve görsel bildirimler
- Süre bitiminde otomatik durum değişimi

### 🔄 Akıllı Otomasyon
- Görev durumu ile zamanlayıcı durumu arasında otomatik senkronizasyon
- "Devam Ediyor" kolonuna taşınan görevlerin otomatik başlatılması
- "Tamamlandı" kolonuna taşınan görevlerin otomatik olarak sonlandırılması
- Zamanlayıcısı tamamlanan görevlerin otomatik olarak "Tamamlandı" durumuna geçmesi

### 🔍 Arama ve Filtreleme
- Görev başlığı ve açıklamasına göre arama
- Öncelik seviyesine göre filtreleme (Düşük, Orta, Yüksek)

### 📱 Responsive Tasarım
- Mobil cihazlar için optimize edilmiş görünüm
- Tüm ekran boyutlarına uyumlu arayüz
- Dokunma dostu butonlar ve kontroller

### ⌨️ Klavye Kısayolları
- `N` tuşu: Yeni görev ekleme
- `Esc` tuşu: Açık pencereyi kapatma

## 🚀 Kullanım Kılavuzu

### Görev Yönetimi
1. **Görev Oluşturma**:
   - Sağ üstteki "+ Yeni Görev" butonuna tıklayın
   - Başlık, açıklama, öncelik, sorumlu kişi ve diğer detayları girin
   - Görev için bir süre belirleyin (isteğe bağlı)
   - "Kaydet" düğmesine tıklayın

2. **Görev Durumu Değiştirme**:
   - Görev kartını sürükleyip istediğiniz kolona bırakın
   - Veya zamanlayıcı kullanarak otomatik durum değişiminden faydalanın

3. **Görev Düzenleme/Silme**:
   - Görev kartındaki "Düzenle" butonuna tıklayın
   - Gerekli değişiklikleri yapın ve "Kaydet"e tıklayın
   - Görevi silmek için düzenleme penceresindeki "Sil" butonunu kullanın

### Zamanlayıcı Kullanımı
1. **Zamanlayıcı Başlatma**:
   - Görev kartındaki "Başlat" butonuna tıklayın
   - Görev otomatik olarak "Devam Ediyor" durumuna geçecektir

2. **Zamanlayıcı Duraklatma/Sıfırlama**:
   - "Duraklat" butonu ile zamanlayıcıyı geçici olarak durdurun
   - "Sıfırla" butonu ile zamanlayıcıyı ilk durumuna döndürün

3. **Zamanlayıcı Tamamlandığında**:
   - Sesli bildirim ve tarayıcı bildirimi alacaksınız
   - Görev otomatik olarak "Tamamlandı" durumuna geçecektir

## 🔧 Teknolojiler

- **Frontend**:
  - HTML5
  - CSS3 (Animations, Flexbox, Grid, Media Queries)
  - Vanilla JavaScript (ES6+)
  - Font Awesome ikonları

- **Programlama Paradigması**:
  - Fonksiyonel Programlama
  - Saf (Pure) Fonksiyonlar
  - Değişmez (Immutable) Veri Yapıları
  - Kapalılık (Closure) ve Kapsülleme

- **Veri Saklama**:
  - LocalStorage API
  - JSON veri formatı

- **Responsive Tasarım**:
  - Mobil-öncelikli yaklaşım
  - Esnek grid sistemi
  - Özelleştirilmiş medya sorguları

## 📊 Sunum İçeriği

### Giriş Slaytı
- **Başlık**: GeriSay - Modern İş ve Zaman Yönetimi
- **Alt Başlık**: Kanban ve Zamanlayıcı entegrasyonu ile verimlilik artışı
- **Logo**: GeriSay logosu

### Problem ve Çözüm
- **Problem**: İş takibi ve zaman yönetimi araçlarının ayrı olması
- **Çözüm**: GeriSay ile hem görev durumlarını hem de zamanlarını tek bir arayüzde yönetme

### Temel Özellikler
- Kanban panosu ve sürükle-bırak özelliği
- Entegre zamanlayıcı ve otomatik durum güncellemeleri
- Arama, filtreleme ve organizasyon özellikleri

### Teknik Yaklaşım
- Fonksiyonel programlama ile daha temiz ve bakımı kolay kod
- Saf fonksiyonlar ve değişmez veri yapıları
- Modern JavaScript (ES6+) özellikleri

### Demo Senaryoları
- **Senaryo 1**: Yeni görev oluşturma ve kanban panosunda yönetme
- **Senaryo 2**: Zamanlayıcı başlatma ve otomatik durum geçişleri
- **Senaryo 3**: Görev arama, filtreleme ve düzenleme

### Kullanıcı Deneyimi
- Responsive tasarım ile her cihazda optimum kullanım
- Klavye kısayolları ve verimlilik artırıcı özellikler
- Görsel ve işitsel geri bildirimler

### Sonuç ve Gelecek Geliştirmeler
- Ekip işbirliği özellikleri
- Gerçek zamanlı senkronizasyon
- Gelişmiş raporlama ve analiz araçları

## 🚀 Başlangıç

1. Projeyi bilgisayarınıza indirin
2. `index.html` dosyasını herhangi bir modern tarayıcıda açın
3. Hemen kullanmaya başlayın - kurulum gerektirmez!

## 📝 Lisans

MIT Lisansı altında dağıtılmaktadır. Detaylar için `LICENSE` dosyasına bakın.

---

<p align="center">
  Geliştirici: GeriSay Team<br>
  Sürüm: 1.0.0<br>
  Son Güncelleme: Temmuz 2023
</p> 