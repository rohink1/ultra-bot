exports.run = (client, message, args) => {
    let argss = message.content.split(" ").slice(1);
    let tempmsg = argss.join(" ");
    message.delete();
    return message.channel.send("**" + tempmsg + "**");
}
