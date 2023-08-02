---
title: Self Hosting - Kendin Barındırma
slug: self-hosting-kendin-barindirma
date_published: 2021-05-13T20:51:04.000Z
date_updated: 2021-05-13T20:57:53.000Z
tags: [internet]
excerpt: Self Hosting nedir? Docker kullanmayı kolaylaştıran Caprover nasıl kullanılır? Nasıl kurulur? Neler yüklenir?
---

### Self Hosting Nedir?

İnternet üzerinde kullandığımız çeşitli servisleri, bilgisayar üzerinde kendimiz çalıştırma, barındırma, servis etme işine *self hosting* diyoruz. Mesela not uygulaması olarak *Google Keep*, fotoğraflarınızı barındırmak için *Google Fotoğraflar,* şifrelerinizi yönetmek için *LastPass* gibi bir şifre yöneticisi kullanmak yerine, size ait veya kiraladığınız bir sunucuda bu amaçla yapılmış *-genellikle açık kaynak-* uygulamaları kendiniz barındırabiliyorsunuz.

### Neden Kullanılır?

Ben de bu işi aşağı yukarı 12-13 yıl önce yapmaya başladım. O dönem kullandığım, *cPanel* üzerinde bir web sunucu vardı. Önce buraya ufak uygulamalar kurmaya başladım. Mesela* Google Analytics'*in yaptığı işi yapan, o zamanki adıyla *Piwik, *şu anki adıyla ise* Matomo*'yu kurup kullanmaya başladım. cPanel üzerinde hizmet veren bu sunucum sadece PHP uygulamaları barındırabiliyordu ve ortak kullanılan bir sunucu olduğu için, sınırlı kaynak kullanmaya izin veriyordu.

Bu yüzden, özellikle Torrent işlerim için o dönem kurulan ve popüler olan, uzunca süre de ücretsiz servis veren *[Put.io](https://put.io/)*'yu kullanmaya başladım. Ancak bu servis de tanıtım dönemini kapatıp paket fiyatlarını artırınca, alternatif aramaya başladım. İlk amacım, PHP üzerinde mümkün olmayan torrent indirme/yükleme işlerimi yapacak bir sunucu bulmaktı. Bunu da gerçekleştirmek için daha ucuza bulunabilen, VPS (Virtual Private Server), Sanal Özel Sunucu'lardan kullandım. Bu sunucular da temelde *VirtualBox*, *VMware Workstation* gibi sanallaştırma yazılımları üzerinde bulunan bir alan sağlıyor, bu yüzden kullanacağınız kaynaklar yine kısıtlı oluyor ve ortak kullanılıyor.

Uzunca bir süre bu şekilde VPS kullandıktan sonra, bağlandığım torrent istemcilerinin genellikle *OVH* üzerinde barındırıldığını fark ettim. Araştırırken de bu firmaya bağlı olarak çalışan *[Kimsufi](https://www.kimsufi.com/en/)*isimli firmaya denk geldim. Kimsufi, genellikle eski sunucular ile, müşteri hizmetleri desteği kısıtlı bir biçimde hizmet veren bir firma. O yüzden hala, benim bildiğim en düşük fiyatlı *dedicated, *tamamen size ait fiziksel bir sunucuyu size kiralıyorlar. Bu yazıyı yazdığım sırada halen Kimsufi'nin aylık 9.99 dolar'a (veya 7.99 Euro'ya) sunduğu KS-3 paketini kullanıyorum.

### Nasıl Kullanılır?

Sunucumu ilk oluşturduğum zamanlarda, bütün uygulamaları bir *Linux* dağıtımı üzerine kendim kuruyordum. Bunun dezavantajı ise, uygulama güncelleme ve bakımının büyük bir sorun oluşturması idi. Mesela yüklediğiniz iki uygulama, *Python'*un farklı sürümleriyle çalışabiliyor ve birbiriyle çakışabiliyor. Bir uygulamada sorun olduğunda bütün hizmetleriniz etkileniyor. Bir uygulamaya bağlı bir servisi yeniden başlatmak zorunda olduğunuzda diğeri de etkileniyor. Sistemi yeniden başlatmaya daha çok ihtiyaç duyuluyor.

Daha sonra, bu servisleri topluca kurmayı sağlayan çeşitli yazılımlar ile karşılaştım. Bunlar sayesinde *Ubuntu* gibi bir linux dağıtımı kurarak temiz kurulum sonrası bütün ihtiyaç duyduğunuz yazılımları, konfigürasyona ihtiyaç duymadan sıkıntısız bir şekilde kurabiliyorsunuz. Öncelikle onlardan bahsedeyim:

> Burada bir dipnot da düşeyim. Self hosting ile alakalı bilgi almak, gelişmeleri takip etmek için GitHub üzerinden, [[selfhosted etiketi taşıyan paketler](https://github.com/topics/selfhosted)i](https://github.com/topics/selfhosted) ve Reddit'ten [r/selfhosted](https://www.reddit.com/r/selfhosted/) kanalını takip edebilirsiniz.

- Uzun süre bu amaçla*[QuickBox](https://github.com/QuickBox/QB)* adlı uygulamayı kullandım. Bu uygulama bir *Seedbox*, yani torrent alma/gönderme amaçlı bir sunucu oluşturmayı planlıyor.

![](https://cache.amefs.net/wp-content/uploads/2018/12/05114417/Quickbox_Pro.png)QuickBox Paneli
Kurulduktan sonra size sunucunun detaylarını görebileceğiniz bir internet adresi sunuyor. Buradan ihtiyaç duyduğunuz çeşitli uygulamaları kurabiliyorsunuz. Eğer ilk kez bu tarz bir sunucu kuracaksanız, size çok bir iş düşmemesi, basit kurulumu sayesinde size uygun bir uygulama.

Ancak 4-5 yıl kadar QuickBox kullandıktan sonra, QuickBox'un içinde yer almayan uygulamalar kurmam gerektiği zaman sorunlar yaşamaya başladım. [*Şurada*](https://github.com/QuickBox/QB)belirtilen uygulamaları destekliyor ve kolay şekilde kurabiliyorsunuz, ancak bunların haricinde bir şey kurmak ve kullanmak çok güç, zaten o amaçla oluşturulmamış. Yazının en başında belirttiğim gibi kendinize ait şifre yönetici, dosya yönetici, fotoğraf yönetici kurmak zorlaşıyor.

- Bu sorunlardan dolayı, sunucu konfigürasyonum bozulduktan sonra alternatif ararken [*Cloudbox*](https://github.com/Cloudbox/Cloudbox)kullandım. Uygulama yüklerken otomatizasyon sağlayan *Ansible*'ı kullanıyor ve yine otomatik bir şekilde *Docker Container*'ları üzerinde sunucunuzu oluşturuyor. Ancak burada da dezavantaj, sunduğu hazır paketlerin genellikle *seedbox *yapmaya uygun olmasıydı. Docker kullanımı kolaylık sağlıyor ise de, Docker container'ları ve sunucuyu yönetmek için bir kullanıcı arayüzü sunmuyor olması, bütün işlemlerinizi shell'den yapmak zorunda oluşunuz dezavantaj oluşturuyordu.

Bu konuda oluşturulan birkaç servis var, GitHub'daki *[awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted)* reposundaki *[Self-hosting Solutions](https://github.com/awesome-selfhosted/awesome-selfhosted#self-hosting-solutions)*kısmından bu amaçla yapılmış yazılımlara ulaşabiliyorsunuz. Yine bu listede bulunan [YunoHost](https://yunohost.org/#/)'u da deneme amaçlı kısa bir süre kullandım, kendi uygulama dükkanında bulunan uygulamaları kullandığınız zaman oldukça başarılı bir uygulama ama özellikle Docker üzerinde kendi istediğiniz uygulamaları barındırmak istediğiniz zaman biraz zorluk çıkarabiliyor.

### Şu an ne kullanıyorum?
![](https://caprover.com/img/screenshot.png)CapRover (daha önceki adıyla CaptainDuckDuck)
Bu amaçla kullandığım çatı uygulama olarak, [*Caprover*](https://caprover.com/)'ı buldum. Daha önceden *CaptainDuckDuck* ismini kullanan uygulama, daha sonradan isim değişikliğine giderek Caprover ismini almış. Uygulama olarak, [*Heroku*](https://www.heroku.com/)'nun kendi barındırdığınız bir alternatifi olmayı vaat ediyor.

> Burada, daha sonra hakkında ayrıca bir yazı yazacağım Docker için bir parantez açalım. Benim QuickBox gibi uygulamalarda karşılaştığım, uygulamaların veya gereksinimlerin çakışması sorunumu çözen şey Docker oldu. Temelde, çalıştırmak istediğiniz uygulamayı daha önceden oluşturulmuş minik sanal bilgisayarlar üzerinde çalıştırıyor. Böylelikle sadece "verilerini" sabit tutarak uygulamayı taşıyabiliyor, güncelleyebiliyor, birden fazla yerde çalıştırabiliyorsunuz. Uygulamanın çekirdek dosyalarının zarar görmesi, bozulması mümkün olmuyor. Yedeklemeyi de oldukça kolaylaştırıyor.

Caprover'ın kurcalayabileceğiniz bir demosu [şurada](https://captain.server.demo.caprover.com/) mevcut (şifre: **captain42**). Kendiniz bir docker container'ı oluşturmanıza veya halen düzenli olarak güncellenen kendi uygulama dükkanından seçtiğiniz uygulamaları yüklemenize izin veriyor. Kendi uygulamalarını yüklerken hemen hemen hiç zorlukla karşılaşmazken, başka bir docker imajını yüklerken de çok kolay bir kullanıcı arayüzü sunuyor. İsterseniz GitHub üzerinde kendinize ait uygulama dükkanınızı oluşturup onu da kullanabiliyorsunuz, aynı zamanda [şuradan](https://github.com/caprover/one-click-apps/) Caprover'ın kendi dükkanına da katkıda bulunabilirsiniz. Bu uygulamaları oluşturmak için Docker Compose dosyaları gibi *YAML *dosyası kullanıyor.

Caprover gibi bir yazılım kullanmadan docker container'ları kendiniz barındırdığınızda, port yönlendirmelerini kendiniz idare etmeniz gerekiyor. Diyelim ki iki web servisiniz var. Bu servislerin 80 ve 443'üncü portları kullanması gerekiyor. Ancak Docker dışına bağlantı yaparken bu portları sadece bir container'a tanımlayabiliyorsunuz. Caprover'daki *letsencrypt *ve *ngin*x container'ları ile hem bu işlemi otomatik olarak yapabiliyor, hem *xyz.alanadınız.com* şeklindeki alt alanadlarını otomatik oluşturuyor, hem de tek tıkla bunları *Let's Encrypt *servisi kullanarak kendi oluşturduğunuz SSL sertifikası ile *https* üzerinden sunabiliyorsunuz.

Biraz daha ustalık gerektiren bir işlem olsa da, sunucunuz yetersiz geldiğinde de *docker cluster *oluşturup servislerinizi birden fazla sunucuda barındırmanıza olanak sağlıyor. Özellikle Docker Hub üzerinden inanılmaz bir yelpazede uygulamayı kolaylıkla bulup, birkaç dakikada çalıştırmamı sağlıyor. Yedekleme işlemi de yine kendi kullanıcı arayüzünden kolaylıkla yapılabiliyor.

### Neler Çalıştırabilirim?

Benim Caprover üzerinde denediğim, Docker üzerinde çalışan uygulamaları burada listeleyeceğim. Çoğunluğunu Docker haricinde de çalıştırabilirsiniz ama benim üstte bahsettiğim sebeplerden Docker kullanmak çok daha rahatlık sağladı. Daha önce bahsettiğim [awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) reposundan çok daha kapsamlı bir listeye ulaşabilirsiniz, ancak ben bu yazıda genellikle kendi deneyimlediğim servislerden bahsedeceğim.

- **[archivebox](https://hub.docker.com/r/archivebox/archivebox)**

![](https://camo.githubusercontent.com/45eb30f48c915e11f74ecdcf012b0e6cbe18d56153a43b15d0433bdb1390ef4b/68747470733a2f2f692e696d6775722e636f6d2f7036774b364b4d2e706e67)archivebox arayüzü
Uygulama caprover'ın uygulamaları arasında yer almıyor, Docker Hub'dan kurulum yaptım. [web.archive.org](http://web.archive.org/) sitesi gibi çalışıyor ve bir sitenin o tarihteki kaydını almanızı sağlıyor. Sitenin HTML olarak, PDF olarak, düz metin olarak vs. kaydını alabiliyor, silinmeye karşı saklayabiliyorsunuz. Aynı zamanda yer imlerimde bulunan önemli yazıları silinmeye karşı burada saklıyorum.
*Environment *değeri olarak *ALLOW_ROOT = true; *belirlemek gerekiyor, bir de container içindeki /data klasörünü kalıcı bir klasöre bağlamanız gerekli.

- [**bitwarden_rs**](https://github.com/dani-garcia/bitwarden_rs)

![](https://bitwarden.com/images/hero.webp)
Açık kaynak şifre yöneticisi [*Bitwarden*](https://bitwarden.com/)'ın çok daha az kaynak gerektirecek şekilde *Rust *üzerine port edilmiş hali. Şifrelerinizi başkasının eline teslim etmeden güvenli bir şekilde saklamanızı sağlıyor. Sizden başka birinin de kullanmasını istiyorsanız üyelik kısmını da açık bırakabiliyorsunuz. *LastPass *planlarında değişiklik yapıp çeşitli kısıtlamalar getirince oradaki hesabımı silip buraya geçtim. Diğer şifre yöneticilerden aldığınız yedekleri kolaylıkla buraya aktarabiliyorsunuz.

İlk kurulumda *Environment *değerleri arasına eklenmemesine rağmen *SIGNUPS_ALLOWED *değerine *false* verirseniz yeni üyelik eklenmesini engelliyor. Ayrıca *ADMIN_TOKEN* değerine de "**openssl rand -base64 48" **komutu ile oluşturacağınız 48 karakter bir base64 değeri girerseniz, bu değer ile *https://bitwarden.adresiniz/admin* bağlantısından admin paneline giriş yapabilirsiniz. Yine container içindeki /data klasörünü kalıcı bir klasöre bağlamanız gerekiyor.

- [Gh[ost](https://hub.docker.com/_/ghost)](https://hub.docker.com/_/ghost)

Caprover uygulamaları arasından kolaylıkla yüklenebiliyor, ancak *bitnami*'nin sunduğu docker imajında Ghost 3 sürümü destekleniyor. Ben Docker'ın kendi sunduğu imajlar arasında yer alan [bu imajı](https://hub.docker.com/_/ghost) kendim kurulum yaptım. Şu an okumakta olduğunuz blog, burada çalışıyor.

Kurulum için *Environment* değerlerine sadece *url* değerini ekleyerek kullanabilirsiniz. Ancak bir harici veritabanı ile beraber kullanmayı öneriyorlar. Ben *database__client, database__connection__host*, *database__connection__user*, *database__connection__password*, ve *database__connection__database *değerlerini tanımlayarak kurulum yaptım.

Ayrıca yapılan değişikliklerin silinmemesi için */var/lib/ghost/content* klasörünü de kalıcı bir klasöre bağlamak gerekiyor. 

- [shiori](https://hub.docker.com/r/radhifadlillah/shiori)

![](https://raw.githubusercontent.com/go-shiori/shiori/master/docs/readme/cover.png)
Shiori bir yer imi yöneticisi, [Pocket](https://getpocket.com/)'a alternatif olarak yazılmış bir uygulama. Caprover üzerinde bulunmuyor, ben Docker Hub üzerinden kurdum. Yer imlerimi kategorileyip arşiv oluşturabileceğim bir servis ararken oluşturdum ancak bu beklentimi pek karşılamadı.

*Environment *değerlerinde *SHIORI_DIR *değerine */data* değeri vererek ve */data* klasörünü kalıcı bir klasöre bağlayarak kullanabiliyorsunuz.

- [cloudplow](https://hub.docker.com/r/sabrsorensen/alpine-cloudplow)

Cloudplow da yine Caprover'ın kendi uygulamaları arasında bulunmayan ancak benim kurduğum Docker imajlarından birisi. Komut satırında çalışıyor, grafik kullanıcı arayüzü yok. Rtorrent'in indirdiği dosyaları, (çeşitli bulut sağlayıcılar arası dosya transferi yapmaya yarayan) rclone ile düzenli olarak tarayarak buluta aktarıyor. Benim kurduğum şekliyle, rtorrent'in tamamlanan dosyalar klasörünü tek yönlü olarak kullandığım Google Drive hesabına gönderiyor, indirdiğim torrent dosyalarına buradan erişebiliyorum.

Bu imaj içerisinde hem rclone, hem de cloudplow kurulu halde geliyor. Konfigürasyonu ise kullandığınız rtorrent kurulumuna göre değişkenlik gösteriyor. 

- [Visual Studio Code](https://github.com/cdr/code-server)

Visual Studio Code'un browser üzerinden çalışan sürümü. Caprover'ın uygulamaları arasından yükleyip direkt olarak kullanabiliyorsunuz.

- [heimdall](https://github.com/linuxserver/Heimdall)

![](https://i.redd.it/s12vfnfgk3y41.png)
Bütün bu uygulamaları kurdunuz, peki nasıl ulaşacaksınız? Burada *Heimdall* devreye giriyor. Docker üzerinde barındırdığınız uygulamaları buraya ekleyip, bir ana sayfa veya panel gibi kullanıyorsunuz. Rtorrent gibi bazı uygulamalardan indirme/gönderme hızı gibi bilgileri de çekiyor.

Caprover'ın kendi uygulamaları arasında yok ama Docker Hub'dan *linuxserver/heimdall* imajını çekerek kullanabilirsiniz. Tek gereken, container'ı yeniden başlatınca bilgilerin silinmemesi için /config klasörünü kalıcı bir klasöre bağlamak.

- [dozzle](https://hub.docker.com/r/amir20/dozzle)

![](https://dozzle.dev/assets/poster.dbf3a05c.png)dozzle kullanıcı arayüzü
Dozzle, çalışan docker container'ların log'larını görüntüleyebileceğiniz bir uygulama. Aslında Caprover'ın sunduğu arayüz üzerinden de bu işlemi yapabiliyorsunuz ancak Dozzle sadece bu işi yapmak için tasarlanmış bir uygulama olduğu için vaat ettiği işi de gayet başarılı bir şekilde yapıyor.

- [filebrowser](https://hub.docker.com/r/filebrowser/filebrowser)

![](https://user-images.githubusercontent.com/5447088/50716739-ebd26700-107a-11e9-9817-14230c53efd2.gif)
Docker container'a kalıcı olarak bağladığınız klasörleri yönetmenizi sağlayacak çok başarılı bir uygulama. Sanki bir cloud depolama servisi gibi dosya sıkıştırma, video dosyalarını tarayıcı üzerinden oynatma, dosya paylaşma vs. gibi birçok şeyi rahatlıkla yapabiliyorsunuz. Farklı kullanıcılar oluşturup, farklı yetkiler tanımlayabilirsiniz.

- [analogic/poste.io](https://hub.docker.com/r/analogic/poste.io/)

Caprover'ın kendi uygulamaları arasında bulunan mail sunucusu. Hem Caprover'a kurduğunuz container'ların mail gönderebilmesini sağlamak, hem de kendi e-posta sunucunuzu oluşturmak için kullanabiliyorsunuz.

mail.alanadi.com şeklinde bir alt alan adı tanımlamanız yeterli oluyor, gerisini Caprover hallediyor. Ancak bende, boşta beklerken bile çözemediğim bir şekilde fazla işlemci kullandığı için kullanmayı bıraktım.

- [metube](https://hub.docker.com/r/alexta69/metube)

![](https://user-images.githubusercontent.com/9530250/141615206-5a065cd4-e814-4ed3-bc09-0e98c43873ef.png)Metube Arayüzü
Ünlü youtube-dl paketine grafik kullanıcı arayüzü kazandıran bir Docker imajı. Youtube'daki videoları tek tıkla indirebilmenizi sağlıyor. Tek gereken, container içindeki /downloads klasörünü Youtube videolarını indirmek istediğiniz bir klasöre bağlamak.

---

Bu imajlar haricinde aktif olarak kullandığım Docker container'lardan bazıları:

- pgweb
- plex
- portainer
- rapidleech
- rutorrent
- shaarli
- swirl
- ttrss
- wallabag
- pottava/docker-webui
