const Discord = require("discord.js");
const client = new Discord.Client();
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
 
client.once("ready", () => {
  console.log("Ready!");
 client.user.setActivity('.help', ({type: "LISTENING"}))
});
 
 
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === '👋⸱welcome');
    if (!channel) return;
 
   let data = await canva.welcome(member, { link: "https://imagehost7.online-image-editor.com/oie_upload/images/25193952d0k7IH6/25203945m4ZUY02Z.jpg" })
 
    const attachment = new Discord.MessageAttachment(
      data,
      "welcome-image.png"
    );
 
    channel.send(
      `Welcome to the server, ${member.user.username}!`,
      attachment
    );   
   });
 
client.on('message', msg => {
  
  // Prefix for commands

  const prefix = ".";

  // Keeps the bot from triggering commands from other bots
  if (msg.author.bot) return;
  
  // If a piece of text does not start with the prefix just ignore
  if (!msg.content.startsWith(prefix)) return;

  // Splits the command from the prefix
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  
  // Turns any upper case letters to lower case
  const command = args.shift().toLowerCase();
  
  // Basic Command to check the ping of your bot
  if (command === "ping") {
    msg.channel.send(`` + client.ping + `ms`);
  }

  // Basic Command to check the ping of your bot
  if (command === "ban") {
    msg.channel.send(``);
  }
  
 if (command === 'help') {
   const embed = new Discord.MessageEmbed()
  .setColor('#0099ff')
	.setTitle('Commands')
	.setURL('https://discord.js.org/')
	.setAuthor('made by JonSnipeX', 'https://media.tenor.com/images/e9d95db729644ed1dcc5613e5cfb898f/tenor.gif', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://imagehost7.online-image-editor.com/oie_upload/images/OIE_2019NOV_43243829_91536847/252073701A8KKvj.gif')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

        
    msg.channel.send(embed);
    }  
  

  
   if (command === 'info') {
   const embed = new Discord.MessageEmbed()
  .setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('made by JonSnipeX', 'https://media.tenor.com/images/e9d95db729644ed1dcc5613e5cfb898f/tenor.gif', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://imagehost7.online-image-editor.com/oie_upload/images/OIE_2019NOV_43243829_91536847/252073701A8KKvj.gif')
  .setFooter('https://discord.gg/ntBZgCuF7z', 'https://imagehost7.online-image-editor.com/oie_upload/images/OIE_2019NOV_43243829_91536847/252073701A8KKvj.gif');

        
   
   
   msg.channel.send(embed);
    }  
}); // End of bot.on


client.login("ODE5NjY3MDkxNjczODQxNjY0.YEp8dw.QoLQtUhm1z7MmjxxIH6qcCGmymk");