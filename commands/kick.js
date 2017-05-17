exports.run = (client, message, args) => {

if (args.length > 0){
    var reason = message.content.split(" ").slice(2).join(" ");
}else{
    var reason = "Unknown !!!"
}
let modRole = message.guild.roles.find("name","Moderator");

if (!message.member.roles.has(modRole.id)) {
return message.reply("You pleb, you don't have the permission to use this command.").then(m => m.delete(7000));
}

let kickMember = message.guild.member(message.mentions.users.first());

if(message.guild.member(message.mentions.users.first()).roles.has(modRole.id)){
return message.reply("You cant kick a moderator.").then(m => m.delete(7000));
}

if (message.mentions.users.size === 0) {
return message.reply("Please mention a user to kick").then(m => m.delete(7000));
}



if (!kickMember) {
return message.reply("That user does not seem valid").then(m => m.delete(7000));
}

kickMember.kick().then(member => {
console.log(`**${member.user.username}** was kicked by ${message.author.username}.\nReason: ` + reason);
}).catch(console.error)



}
