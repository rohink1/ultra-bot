exports.run = (client, message, args) => {
    var modRole = client.guilds.get('304921323577147392').roles.find(r => r.name.toLowerCase() === "moderator");
    var msguser = message.author;
    let chantomsg = args[0];
    var msgtodisp = message.content.split(" ").slice(2).join(" ");
    
    if (!client.guilds.get('304921323577147392').member(msguser).roles.has(modRole.id)) {
    return message.author.sendMessage("You dont have enough permission to use this command !!!```Announce```").catch(console.error);
       }
    client.guilds.get('304921323577147392').channels.find(`name`,chantomsg).sendMessage(`:speech_balloon: **${message.author.username}** : ` + msgtodisp);
    };
