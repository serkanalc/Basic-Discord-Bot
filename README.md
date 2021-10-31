# Basit Düzeyde Bir Discort Botu Yaratmak! 

Bu yazıda: 

- [x] Basit bir discord botu yaratmayı.
- [x] Yarattığınız botu Discord kanalına yüklemeyi.
- [x] Çalıştırmayı ve basit düzeyde yazılan yazılara cevap verebilecek hale getirmeyi..

Açıklıyor olacağım. İşte konu başlıkları:

- [Gereksinimler](#kurulum)
- [Discord Botu Oluşturmak](#asama1)
- [Botu Discord Sunucusuna Eklemek](#asama2)
- [Terminal Ayarları](#asama3)
- [Discord Botunu Kodlamak](#asama4)
- [Daha Fazlası](#asama5)
- [Kaynaklar](#asama6)


## <a name="kurulum"></a>Adım Ø : Başlamadan Önce

Discord botu yapımına başlamadan önce uygun araçlara sahip olmanız gerekiyor.

- **Node.JS:** İhtiyacımız olan ilk araç, bu indirme bağlantısına [tıklayarak](https://nodejs.org/en/) indirebilirsiniz.

- **Visual Studio Code:** Şimdi kodunuzu yazabileceğiniz bir İDE'ye ihtiyacınız var, ben Visual Studio Code kullanıyorum. Bu indirme bağlantısına [tıklayarak](https://code.visualstudio.com/download) indirebilirsiniz.

## <a name="asama1"></a>Adım 1 : Discord Botunun Doğuşu


Botumuzu oluşturmak için [Discord Developer Portal'](https://discord.com/developers/applications)a giriş yapmamız gerekiyor. Daha sonra eğer değilseniz application sekmesine tıklamanız gerekiyor ve sonrasında "New Application" butonuna tıklamanız yeterli.

![Discord Main](https://user-images.githubusercontent.com/70329389/139589021-020114c4-27ca-4187-9ace-ffb1f8233b22.jpeg)

Sonrasında discord botunuz için bir isim vermeniz istenecektir. Size uygun olduğunu düşündüğünüz bir issim verebilirsiniz. Görmeniz gereken ekran aşağıdaki gibi olması gerekir

![Discord Main 2](https://user-images.githubusercontent.com/70329389/139589311-6fdde153-4bef-4e48-9ea4-3fa5ab964d2f.jpeg)

Eğer gördüğünüz ekran doğruysa bu bölümden botunuzun ismini, resmini ve açıklamasını değiştirebilir değiştirebilir biçimlendirebilirsiniz. Sonrasında solda göreceğiniz "Bot" sekmesine tıklayıp açılan sayfada "Add Bot" butonuna basmanız ve gelen onay penceresinden "Yes, do it!" butonunuza basmanız gerekiyor 

### Dikkat!

Aşağıda göreceğiniz Token botunuzun güvenliği için çok önemlidir. Token'ınızı asla kimseyle paylaşmayın. Token'ınızın güvenliğinin ihlal edildiğini düşünüyorsanız "Regenerate" butonuna tıklayınız tıklayın.

![Discord main 3](https://user-images.githubusercontent.com/70329389/139589750-763e3da8-8ce2-4a05-8d01-1ec1bc1f6322.jpeg)

## <a name="asama2"></a>Adım 2 : Merhabe Bot. Umarız Pizza Getirmişsindir!


Artık botunuzu discord kanalına davet edip denemelere başlamanız gerekiyor. Bunun için yeni bir discord kanalı oluşturmanızı tavsiye ederim. Oluştuyrduğunuz botu discord kanalınıza eklemek için [Discord Developer Portal'](https://discord.com/developers/applications)da sol taraftan OAuth2 sekmesine gelmeniz ve **"SCORPES"** kısmına bakmalı, **"bot"** ve **"applications.commands"** seçeneklerini seçmelissiniz.

Sonrasında **"BOT PERMISSIONS"** kısmına geçebiliriz. Gerçek bir bot yayınlarken sadece gerekli izinleri istemek önemlidir. Bu şekilde sunucu sahipleri, botunuzun çok fazla izinle sunucularına neler yapabileceği konusunda endişelenmek zorunda kalmazlar. Ancak öğrenirken işleri basit tutmak için **"Administrator"** iznini seçebiliriz. Bu, ihtiyacımız olan her şeye erişmemizi sağlayacaktır.Bu işlemleri yaptığınızda karşınızda gözükmesi gereken ekran şu şekildedir:

![Discord Main 4](https://user-images.githubusercontent.com/70329389/139590752-6023b96d-5e82-4eb3-aa6c-d5e20ca1534d.jpeg)

**"SCORPES"** bölümünün altında davet etmeniz için bir link oluştuğunu göreceksiniz. Bu link, botunuzu davet etmek için sunucu sahiplerine verebileceğiniz bağlantıdır. Bu bağlantıyı yeni bir sekmede açmanız ve yeni test sunucunuzu seçmeniz yeterlidir.

## <a name="asama3"></a>Adım 3 : Terminal 101

Botunuz için yeni bir Node.JS projesi kurmamız gerekiyor. Önce sizin için uygun olduğunu düşündüğünüz bir konumda yeni bir klasör oluşturun ve ardından Visual Studio Code'u (VSCode) açın. Sonrasında, klasörünüzü burada vurgulanan çalışma alanınıza sürükleyip bırakabilirsiniz:

![Discord Main 5 ](https://user-images.githubusercontent.com/70329389/139597444-5e94f59b-1da1-46fb-b818-b92fbdd286ff.jpeg)

VSCode şimdi yeni oluşturduğunuz klasörünüzdeki tüm dosya ve klasörleri gösterecektir. Bu klasörü yeni oluşturduğunuz için şu an içi boş gözükmesi normaldir, ancak dosya ekledikçe onları sürürklediğiniz konumda göreceksiniz. Projemizi oluşturmak için terminalinizi açmamız gerekiyor. Bunu, VSCode'un üst barındaki **"Terminal"** ve ardından **"New Terminal"** e tıklayarak yapabilirsiniz.

Ekranınızın alt kısmında terminal/konsol açılmış olması gerekiyor. Buradan projemizi oluşturmaya yardımcı olması için farklı komutlar kullanabiliriz. Daha önce hiç konsol kullanmadıysanız endişelenmeyin, bu kısım şu anlık oldukça basit ilerleyecek.

![Discord Main6](https://user-images.githubusercontent.com/70329389/139598914-6b2f5d24-ba3e-414a-a104-a30332205019.jpeg)

Görmeniz Gereken ekran buna benzer olmalıdır. gördüğünüz şeyi şu anlık anlamamanız çok normal **"ctrl l"** veya mac kullanıcısıysanız **"command l"** ye basarak daha ferah bir başlangıç yapabilirsiniz.

```

npm init -y**

```

Komutunu yazarak node projenizi başlatabilirsiniz. Her şey düzgün çalıştıysa **"EXPLORER"(yarattığınız klasörü sürükleyip biraktığınız sekme)** sekmesinde **package.json** dosyası oluşmuş olması gerekmektedir, eğer buraya kadar olan kısımda sorun yoksa dosya içindekilere şu an odaklanmanıza gerek yok. [Discord.JS](https://discord.js.org/#/) gibi ihtiyacımız olan 3. parti bağımlılıkları artık yükleyebiliriz.

```

npm install discord.js dotenv**

```

Bu işlem sonucunda "EXPLORER" da **"node_module"** ve **"package-lock.json"** dosyalarını göreceksiniz. Sonrasında süreç boyunca Javascript'in bir üst kümesi olan TypeScript'i kullanacağız. Bu, Javascript'in işlevselliğini genişlettiği ve hayatımızı kolaylaştırmaya çalıştığı anlamına gelir. Typescript veya Javascript'te yeniyseniz endişelenmeyin, bu süreçte yalnızca çok temel TypeScript kullanacağız. Yüklemek için konsolunuzda aşağıdaki komutu kullanabilirsiniz:

```

npm install -g typescript ts-node**

```

**Dikkat!**  Windows'ta izin hatalarıyla karşılaşırsanız, VSCode'u yönetici olarak çalıştırmanız gerekebilir.

TypeScript'e bilgisayarımızın herhangi bir yerinden erişmek isteyeceksinizdir, onu global olarak yüklemek için -g flagini kullanacağız. "ts-node" paketi, geliştirme sırasında Typescript dosyalarımızı çalıştırmamıza izin verecek. Bu şimdilik işimizi kolaylaştıracaktır, ancak botunuzu gerçekten dağıtıma çıkardığınızda biraz farklı bir iş akışı kullanacağız.Artık bir Typescript projesini şu komutla başlatabiliriz:

```

tsc -init**

```

Bu, "EXPLORER" serkmesinde bir **"tsconfig.json"** dosyası oluşturacaktır.

Daha sonra kendi botumuzu özelleştirebileceğimiz kodları yazmamız bir yere ihtiyacımız olacak. Sol Üstte kullandığınız dosyanın adının yazdığı kısma imlecinizi götürdüğünüzde yeni dosya simgesine tıklayabilir, yeni dosyaya **"index.ts"** adını verebilirsiniz.

Botunuzun Token'ı yazdığınız kodları botunuzla bağlayan anahtardır. Bu nedenle botunuzun Token'ını güvenli bir şekilde saklamak için bir yere ihtiyacınız var. Bu yüzden daha önce "dotenv" paketini kurduk. Kaynak kod dosyalarınızda asla parolaları, belirteçleri vb. saklamak istemezsiniz. Bunları her zaman mümkün olduğunda bazı harici dosyalardan içe aktarmak istersiniz. Bu şekilde, kaynak kodunuzu paylaşmanız gerekirse, simgenizi içeren dosyayı hariç tutabilirsiniz ve bu şekilde paylaşımınızı riske atmadan paylaşmış olursunuz.**".env"** adında yeni bir dosya oluşturun:

".env" dosyasının içeride aşağıdaki metni ekleyebilirsiniz. [Discord Developer Portal'](https://discord.com/developers/applications)daki Bot sekmesinden Token değerini kopyalayıp "YOUR_TOKEN" ifadesi yerine yazmayı unutmayın. **gerçek değerii girmediğiniz sürece botunuz çalışmayacaktır**.

```

TOKEN=YOUR_TOKEN

```

**Dikkat!** Token Değerinizi güvenlik için asla kimseyle paylaşmayın veya ".env" dosyanızı sürüm kontrolüne zorlamayın.

Projemiz hazır olduğuna göre artık kodu yazmanın zamanı geldi!

## <a name="asama4"></a>Adım 4 : Nerde Bu Kodlar!

Sonunda **index.ts** dosyamızın içine bazı kodlar yazmaya hazırsınız. Daha önce kurduğumuz 3.parti bağımlılıklarını içe aktararak başlamamız gerekiyor:

```

import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

```
Bu komut, onları kullanabilmemiz için kütüphanelere erişmemizi sağlayacaktır. ve **dotenv.config()** bize **.env** dosyamızdaki Token değerine erişim sağlatacaktır.Ardından botumuzu temsil eden yeni bir client oluşturmamız gerekiyor:

```

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ],
})

```

Intent'ler, Discord'a botumuzun hangi bilgilere ihtiyacı olduğunu söylemek için kullanılır. Bu şekilde botumuza gönderilen gereksiz bilgiler olmaz, bu da onu yavaşlatma ve bant genişliğimizi tüketme sorununu önler. Olası amaçların tam listesi [buradan](https://discord.js.org/#/docs/main/stable/class/Intents?scrollTo=s-FLAGS) bulunabilir, ancak yalnızca ihtiyacınız olanları kullanmanız önerilir.

Ardından, botumuzun ne zaman başladığını görüntüleyebilir ve birisinin ne zaman mesaj gönderdiğini algıyabilir. İşleri basitleştirmek için "merhaba" mesajını görebilir ve "Selam :)" ile cevap verebiliriz:

```

client.on('ready', () => {
  console.log('Botunuz kullanıma hazır!')
})

client.on('messageCreate', (msg) => {
  if (msg.content === 'merhaba') {
    msg.reply({
      content: 'Selam :)',
    })
  }
})

```

Sonunda Token değerini kullanarak botunuza giriş yapmalısınız:

```

client.login(process.env.TOKEN)

```
.env dosyasındaki Token değerini kullanarak artık botunuza bağlanmış oldunuz. Artık şu komutu kullanarak botu çalıştırabiliriz, kodlarınısı kaydetmeyi unutmayın(ctrl s):

```

ts-node index.ts

```

Botunuz test için açtığınız ve botunuzu davet ettiğiniz sunucunuzda çevrimiçi olmalıdır. Bir kanala "merhaba" yazarsanız, "Selam :)" ile yanıt vermecektir. Bu açıkçası çok basit bir örnek, ancak artık çevrimiçi ve mesajları dinleyen bir Discord botunuz var.

## <a name="asama5"></a>Adım + : Daha Fazlası!

Discordu telefondan kullananlar için genellikle kelimeler ve cümleler büyük harfla başlar, kodunuzda büyük veya küçük harf hassasiyeti oluşturmak için aşağıdaki gibi **.toLowerCase()** ekelyip güncelleyebilirsiniz.

```

if (msg.content.toLowerCase() === 'Merhaba') {

```

## <a name="asama6"></a>Kaynaklar

Eğer ingilizceniz yeterli seviyedeyse veya video izlemek döküman okumaktan daha kolay geliyorsa benimde kaynak olarak aldığım [bu videoyu](https://www.youtube.com/watch?v=JMmUW4d3Noc&t=2s) izlemenizi öneririm.


 


 
















