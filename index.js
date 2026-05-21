const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const GIF_URL = 'https://cdn.discordapp.com/attachments/1128032964924670053/1506996731299106876/jerem.gif';

client.once('ready', () => {
  console.log(`Jérémy est en train de courir. (${client.user.tag})`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (Math.random() < 0.01) {
    await message.channel.send(GIF_URL);
  }
});

client.login(process.env.DISCORD_TOKEN);
