const Discord = require("discord.js");
const client = new Discord.Client();
client.on("message", (message) => {
  if (message.author.id = "531655943939686400") {
    message.channel.send("shut up")
  }else {
    return
  }
});
client.login(process.env.BOT_TOKEN)
