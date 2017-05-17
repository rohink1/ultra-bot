exports.run = (client, message, args) => {
    var modRole = message.guild.roles.find(r => r.name.toLowerCase() === "moderator");
    var msguser = message.author;
    let chantomsg = args[0];
    var msgtodisp = message.content.split(" ").slice(2).join(" ");
    
    if (!message.guild.member(msguser).roles.has(modRole.id)) {
    return message.author.sendMessage("You dont have enough permission to use this command !!!```Announce```").catch(console.error);
       }
    message.guild.channels.find(`name`,chantomsg).sendMessage(`:speech_balloon: **${message.author.username}** : ` + msgtodisp);
    };
