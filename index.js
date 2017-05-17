const Discord = require('discord.js');
const Commando = require('discord.js-commando');
const client = new Discord.Client();
const prefix = "."
const funprefix = "!"
/* <Message>.isMentioned(<Client>.user) */

client.on('ready',() => {
	console.log('I\'m Online\nI\'m Online');
	client.user.setGame("Pokemon Uranium");
	});

client.on('guildMemberAdd', member => {
  var nummsg = Math.floor((Math.random() * 6) + 1);
  let guild = member.guild;
  var msg
  if (nummsg == 1)
  {
  msg =`\nPlease welcome **${member.user.username}** to **${guild.name}** \n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else if (nummsg == 2)
  {
  msg=`\n**${member.user.username}** Is coming with a :knife: ... RUN !!! \n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else if (nummsg == 3)
  {
  msg=`\nWhy to fear when **${member.user.username}** is here. :smiley:  \n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else if (nummsg == 4)
  {
  msg=`\n**${member.user.username}** survived the terrorist attack ... **${member.user.username}** will be safe here ... \n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else if (nummsg == 5)
  {
  msg=`\n**${member.user.username}** is the latest discovery around **${guild.name}**. \n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else 
  {
  msg=`\nPlease welcome **${member.user.username}** to **${guild.name}** \n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  const embed = new Discord.RichEmbed()
  .setAuthor(`${client.user.username}`,`${client.user.avatarURL}`)
  .setColor(0x66CC00)
  .setDescription(msg)
  .setThumbnail(`${member.user.avatarURL}`)
  .setFooter(`Hope you will enjoy here at ${guild.name}`)
  .setTimestamp()
  guild.channels.find('name',"join_and_leave").sendEmbed(embed);
});

client.on('guildMemberRemove', member => {
  var nummsg = Math.floor((Math.random() * 3) + 1);
  let guild = member.guild;
  var msg;
  if (nummsg == 1)
  {
  msg=`\nPlease say goodbye to **${member.user.username}** we will miss you!\n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else if (nummsg == 2)
  {
  msg=`\n**${member.user.username}** Ran away seeing a :beetle: !!!\n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  else 
  {
  msg=`\n**${member.user.username}** ran away in a hurry.\n\n:clipboard:*Total members*: ${guild.memberCount}`;
  }
  const embed = new Discord.RichEmbed()
  .setAuthor(`${client.user.username}`,`${client.user.avatarURL}`)
  .setColor(0xE0082d)
  .setDescription(msg)
  .setThumbnail(`${member.user.avatarURL}`)
  .setFooter(`Hope you enjoyed here at ${guild.name}`)
  .setTimestamp()
  guild.channels.find('name',"join_and_leave").sendEmbed(embed);
});

client.on("message", (message) => {
    var modRole = client.guilds.get('304921323577147392').roles.find(r => r.name.toLowerCase() === "moderator");
    var msguser = message.author;

  let command = message.content.toLowerCase().slice(1).split(" ")[0];
  let args = message.content.toLowerCase().split(" ").slice(1);

  if(message.content === '!avatar') {
      message.reply(message.author.avatarURL);
  }
	
  if(message.content.toLowerCase().includes("lol")){
   return message.channel.sendMessage(":joy::joy: **LAUGH OUT LOUD** :joy::joy:").then(m => m.delete(5000));
  }

  if(message.mentions.users.first() === client.user){
    let argss = message.content.split(" ");
    let celcom = "cleverbot";
    try {
    let commandFile = require(`./commands/${celcom}.js`);
    commandFile.run(client, message, argss);
  } catch (err) {
    console.error(err);
  }
  }else
if(message.content.startsWith(funprefix))
  {
    try {
    let commandFile = require(`./commands/fun/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
  }else	  
  if(message.content.startsWith(prefix))
  {
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
  }
});
  















process.on("unhandledRejection", err => {
    console.log(err.stack);
});
 client.on('error', (e) => console.error(e));
 client.on('warn', (e) => console.warn(e));
 client.on('debug', (e) => console.info(e));

client.login(process.env.TOKEN);
