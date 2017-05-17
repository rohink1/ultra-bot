exports.run = (client, message, args) => {

if(args[0] === "help"){
message.channel.sendMessage("fr-forms : for link to fr-forms \n em-forms : for link to em-forms \ nfr-engine upgrade for link to FR battle engine upgrade");
}else
if(args[0] === "fr-forms"){
message.channel.sendMessage("https://github.com/TheLearneer/FR-Overworld-Form-Change \nCredits __**The_Learner**__ and __**KDS**__");
}else
if(args[0] === "em-forms"){
message.channel.sendMessage("https://github.com/KDSKardabox/Pokemon-Emerald-Overworld-Form-Change \nCredits __**KDS**__");
}else
if(args[0] === "fr-engine upgrade"){
message.channel.sendMessage("https://github.com/TheLearneer/FR-Engine-Upgrade\nCredits __**The_Learner#4692**__");
}
    
}
