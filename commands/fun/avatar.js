exports.run = (client, message, args) => {

if(args[0] === "user"){
message.channel.send('message.author.avatar');
}else
if(args[0] === "server"){
message.channel.send('Not available yet');
}

}
