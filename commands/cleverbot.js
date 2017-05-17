exports.run = (client, message, argss) => {
return ;
if (argss.length < 2){
return message.channel.sendMessage(`Dont mention me without any reason <@${message.author.id}>`);
}else 
if(message.content.toLowerCase().includes("hi")){
      return message.channel.sendMessage(`Hello **${message.author.username}** :smiley: `);
}else
if(message.content.toLowerCase().includes("how are you")){
      return message.channel.sendMessage(`Preety fine, what about you **${message.author.username}** ??`);
}else
if(message.content.toLowerCase().includes("get out")){
      return message.channel.sendMessage(`**${message.guild.owner.username}** Brought me here .... I will leave only if he says.... :stuck_out_tongue_winking_eye: `);
}

if(message.content.toLowerCase().includes("do you know")){
if (message.mentions.users.last() === ""){
    
}
}
}
