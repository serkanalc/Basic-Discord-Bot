import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES
    ],
  })

  client.on('ready', () => {
    console.log('Botunuz kullanıma hazır!')
  })
  
  client.on('messageCreate', (msg) => {
    if (msg.content.toLowerCase() === 'merhaba') {
      msg.reply({
        content: 'Selam :)',
      })
    }
  })

  // Botunuzun Mesajları Etiketlemek yerine düz mesaj olarak atması için:

  client.on('messageCreate', (msg) => {
    if (msg.content.toLowerCase() === 'selam') {
      msg.channel.send({
        content: 'Selam :)',
      })
    }
  })
  
  

  client.login(process.env.TOKEN)