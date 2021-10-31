# Basic-Discord-Bot
Bu yazı basit bir discord yapmayı, discord kanalına eklemeyi , çalıştırmayı ve basit düzeyde yazılan yazılara cevap verebilecek hale getirmeyi anlatmaktadır!

## Adım Ø : Öncesinde Gerekenler

Discord botu yapımına başlamadan önce uygun araçlara sahip olmanız gerekiyor.

### Node.JS:

İhtiyacımız olan ilk araç Node.JS sürüm 16.6 veya üzeridir, bu indirme bağlantısına [tıklayarak](https://nodejs.org/en/) indirebilirsiniz.

### Visual Studio Code:

Şimdi kodunuzu yazabileceğiniz bir İDE'ye ihtiyacınız var, ben Visual Studio Code kullanıyorum. Bu indirme bağlantısına [tıklayarak](https://code.visualstudio.com/download) indirebilirsiniz.

## Adım 1 : Discord Botunun Doğuşu

Botumuzu oluşturmak için [Discord Developer Portal'](https://discord.com/developers/applications)a giriş yapmamız gerekiyor. Daha sonra eğer değilseniz application sekmesine tıklamanız gerekiyor ve sonrasında "New Application" butonuna tıklamanız yeterli.

![Discord Main](https://user-images.githubusercontent.com/70329389/139589021-020114c4-27ca-4187-9ace-ffb1f8233b22.jpeg)

Sonrasında discord botunuz için bir isim vermeniz istenecektir. Size uygun olduğunu düşündüğünüz bir issim verebilirsiniz. Görmeniz gereken ekran aşağıdaki gibi olması gerekir

![Discord Main 2](https://user-images.githubusercontent.com/70329389/139589311-6fdde153-4bef-4e48-9ea4-3fa5ab964d2f.jpeg)

Eğer gördüğünüz ekran doğruysa bu bölümden botunuzun ismini, resmini ve açıklamasını değiştirebilir değiştirebilir biçimlendirebilirsiniz. Sonrasında solda göreceğiniz "Bot" sekmesine tıklayıp açılan sayfada "Add Bot" butonuna basmanız ve gelen onay penceresinden "Yes, do it!" butonunuza basmanız gerekiyor 

### Dikkat!

Aşağıda göreceğiniz Token botunuzun güvenliği için çok önemlidir. Token'ınızı asla kimseyle paylaşmayın. Token'ınızın güvenliğinin ihlal edildiğini düşünüyorsanız "Regenerate" butonuna tıklayınız tıklayın.

![Discord main 3](https://user-images.githubusercontent.com/70329389/139589750-763e3da8-8ce2-4a05-8d01-1ec1bc1f6322.jpeg)

## Adım 2 : Merhabe Bot. Umarız Pizza Getirmişsindir!

Artık botunuzu discord kanalına davet edip denemelere başlamanız gerekiyor. Bunun için yeni bir discord kanalı oluşturmanızı tavsiye ederim. Oluştuyrduğunuz botu discord kanalınıza eklemek için [Discord Developer Portal'](https://discord.com/developers/applications)da sol taraftan OAuth2 sekmesine gelmeniz ve **"SCORPES"** kısmına bakmalı, **"bot"** ve **"applications.commands"** seçeneklerini seçmelissiniz.

Sonrasında **"BOT PERMISSIONS"** kısmına geçebiliriz. Gerçek bir bot yayınlarken sadece gerekli izinleri istemek önemlidir. Bu şekilde sunucu sahipleri, botunuzun çok fazla izinle sunucularına neler yapabileceği konusunda endişelenmek zorunda kalmazlar. Ancak öğrenirken işleri basit tutmak için **"Administrator"** iznini seçebiliriz. Bu, ihtiyacımız olan her şeye erişmemizi sağlayacaktır.Bu işlemleri yaptığınızda karşınızda gözükmesi gereken ekran şu şekildedir:

![Discord Main 4](https://user-images.githubusercontent.com/70329389/139590752-6023b96d-5e82-4eb3-aa6c-d5e20ca1534d.jpeg)

**"SCORPES"** bölümünün altında davet etmeniz için bir link oluştuğunu göreceksiniz. Bu link, botunuzu davet etmek için sunucu sahiplerine verebileceğiniz bağlantıdır. Bu bağlantıyı yeni bir sekmede açmanız ve yeni test sunucunuzu seçmeniz yeterlidir.

## Adım 2 : Nerde Bu Kodlar!










