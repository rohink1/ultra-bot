exports.run = (client, message, args) => {
if (message.channel.id !== "308184273100210176"){
    return message.author.sendMessage(`You can try that command only in the channel <#308184273100210176>`);
}

if(args[0] === "fr-forms"){
message.channel.sendMessage("https://github.com/TheLearneer/FR-Overworld-Form-Change \nCredits __**The_Learner**__ and __**KDS**__");
}else
if(args[0] === "em-forms"){
message.channel.sendMessage("https://github.com/KDSKardabox/Pokemon-Emerald-Overworld-Form-Change \nCredits __**KDS**__");
}
    
}
