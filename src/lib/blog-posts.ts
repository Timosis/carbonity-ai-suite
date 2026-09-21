export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  body: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cbam-2026-definitif-donem",
    title: "CBAM'da defnitif dönem: 2026'da neler değişiyor?",
    excerpt:
      "Geçiş dönemi sona erdi. 2026 itibarıyla CBAM sertifikası yükümlülüğü, doğrulanmış emisyon verisi ve maliyet etkisi ihracatçılar için gerçek bir finansal konu haline geldi.",
    category: "Mevzuat",
    date: "12 Eylül 2026",
    readTime: "6 dk",
    body: [
      "AB Sınırda Karbon Düzenleme Mekanizması (CBAM) geçiş dönemini geride bıraktı. 2026'dan itibaren ithalatçılar yalnızca raporlama yapmakla kalmıyor; gömülü emisyonlar için CBAM sertifikası satın almak zorunda. Bu, Türkiye'den AB'ye çelik, alüminyum, çimento, gübre, demir ve hidrojen ihraç eden her üretici için doğrudan bir maliyet kalemi demek.",
      "Defnitif dönemin en kritik farkı, verilerin artık akredite doğrulayıcılar tarafından doğrulanması zorunluluğu. Varsayılan değerlerle raporlama yapan ihracatçılar, gerçek emisyonlarından daha yüksek sertifika maliyetiyle karşılaşma riski taşıyor. Birincil veri toplamak artık tercih değil, maliyet avantajı.",
      "Sertifika fiyatı AB ETS fiyatına endeksli olduğundan CBAM maliyeti dalgalı bir kalem. Finans ekiplerinin bu maliyeti bütçelemesi, tedarikçi bazında senaryolaştırması ve kur riskiyle birlikte yönetmesi gerekiyor.",
      "Carbonity.ai olarak gözlemimiz: defnitif döneme hazırlanan şirketlerin ortak noktası, veri toplama süreçlerini en az bir çeyrek önceden oturtmuş olmaları. Geç kalanlar için en pratik başlangıç, en yüksek hacimli üç tedarikçiyle birincil veri akışını kurmak.",
    ],
  },
  {
    slug: "tedarikci-veri-toplama-rehberi",
    title: "Tedarikçilerden emisyon verisi toplamanın 5 pratik yolu",
    excerpt:
      "Tedarikçileriniz CBAM verisini göndermiyor ya da eksik gönderiyorsa yalnız değilsiniz. Yanıt oranını artıran kanıtlanmış yaklaşımları derledik.",
    category: "Operasyon",
    date: "28 Ağustos 2026",
    readTime: "5 dk",
    body: [
      "CBAM raporlamasının en zor kısmı hesaplama değil, veri toplamak. Tedarikçiler farklı formatlarda, farklı zamanlarda ve çoğu zaman hiç yanıt vermiyor. İşte yanıt oranını yüzde 80'in üzerine çıkaran beş yaklaşım:",
      "Birincisi, tek bir standart şablon kullanın. Her tedarikçiye aynı, sade bir form gönderin; AB'nin resmi şablonunu birebir dayatmak yerine gerekli alanları sadeleştirilmiş bir formda toplayın. İkincisi, hatırlatmaları otomatikleştirin — manuel takip hem zaman kaybı hem de gözden kaçan tedarikçiler demek.",
      "Üçüncüsü, tedarikçiye 'neden' sorusunun yanıtını verin. Kısa bir bilgilendirme notu, yanıt oranını tek başına belirgin şekilde artırıyor. Dördüncüsü, veri kalitesini geri bildirimle destekleyin: eksik ya da tutarsız girişleri anında işaretleyin ki tedarikçi doğru veriyi nasıl gireceğini öğrensin.",
      "Beşincisi, göndermeyen tedarikçiler için varsayılan değer stratejinizi önceden belirleyin. Bu hem raporunuzu geciktirmez hem de hangi tedarikçinin maliyet riski oluşturduğunu görünür kılar. Carbonity.ai'de bu beş adımın tamamı tek akışta yürüyor.",
    ],
  },
  {
    slug: "cbam-maliyeti-fiyatlandirma",
    title: "CBAM maliyetini fiyatlarınıza nasıl yansıtmalısınız?",
    excerpt:
      "Sertifika maliyeti kimin üzerinde kalacak: ihracatçı mı, ithalatçı mı? Müzakere pozisyonunuzu güçlendirecek hesaplama çerçevesi.",
    category: "Finans",
    date: "10 Ağustos 2026",
    readTime: "7 dk",
    body: [
      "CBAM sertifika maliyeti teknik olarak AB'li ithalatçının yükümlülüğü. Ancak pratikte pazarlık masasında bu maliyet fiyat indirimi olarak Türk ihracatçıya yansıtılıyor. Müşteriniz 'CBAM nedeniyle fiyatını düşür' dediğinde elinizde veriye dayalı bir yanıt olmalı.",
      "İlk adım, ürün bazında gömülü emisyon yoğunluğunuzu bilmek. Ton başına sertifika maliyetiniz hesaplanabilir olduğunda, müşterinin talep ettiği indirimin gerçek maliyetle orantılı olup olmadığını görürsünüz. Çoğu zaman talep edilen indirim, gerçek CBAM maliyetinin üzerindedir.",
      "İkinci adım senaryo çalışması: düşük emisyonlu tedarikçiye geçiş, yeşil enerji kullanımı ya da proses iyileştirmesi sertifika maliyetinizi ne kadar düşürür? Bu hesap, müşteriye 'indirim yerine birlikte emisyon azaltımı' önerisi götürmenizi sağlar — uzun vadeli ilişki için çok daha güçlü bir pozisyon.",
      "Son olarak maliyeti kurumsal fiyatlandırma modelinize dahil edin. CBAM dalgalı bir kalem; çeyreklik fiyat revizyonlarına bağlanması, tek seferlik indirim pazarlığından daha sürdürülebilir.",
    ],
  },
  {
    slug: "dogrulanabilir-rapor-nasil-hazirlanir",
    title: "Doğrulanabilir CBAM raporu nasıl hazırlanır?",
    excerpt:
      "Akredite doğrulayıcıların baktığı kanıt zinciri, yaygın hatalar ve ilk doğrulamadan sorunsuz geçmenin yolları.",
    category: "Raporlama",
    date: "22 Temmuz 2026",
    readTime: "5 dk",
    body: [
      "Defnitif dönemde CBAM raporunuzun akredite bir doğrulayıcıdan geçmesi gerekiyor. Doğrulayıcıların ilk baktığı şey kanıt zinciri: her emisyon verisinin kaynağına kadar izlenebilir olması. Hesaplama tabloları kadar, tedarikçi yazışmaları ve ölçüm raporları da denetim kapsamında.",
      "En yaygın üç hata: varsayılan değerlerin gereksiz kullanımı, üretim tesisleri arasında tutarsız metodoloji ve dönemler arası karşılaştırılamayan veri. Üçü de doğrulamada bulgu olarak döner ve raporun yeniden düzenlenmesine yol açar.",
      "Sorunsuz doğrulamanın anahtarı, raporlamayı yıl sonu projesi değil sürekli bir süreç olarak kurmak. Veriler çeyreklik toplanıp doğruluk kontrolleri anında yapıldığında, yıl sonu doğrulaması formaliteye dönüşür.",
      "Carbonity.ai, her veri noktası için kaynak ve değişiklik geçmişi tutarak denetim izini otomatik oluşturur. Doğrulayıcınız raporu incelediğinde her rakamın arkasındaki kanıta tek tıkla ulaşır.",
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
