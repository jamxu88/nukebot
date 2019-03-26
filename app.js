const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Bot Ready");
});
client.on("message", (message) => {
  console.log(message.author.id);
  if(message.guild === null) {
    return;
  }else
  if (message.member.roles.has("527684781903839242")) {
    message.author.send("" + message.author.toString() + ", you've been recently contributing a lot to the cancer of Meme Team. Due to the RETARDS Act of 1/10/19, you have been placed under supervision of Retard-Away™ for the time being. Please mind what you're saying and making sure you aren't being cancerous. Thank you for your time and effort towards ridding the cancer.");
    message.delete();
  }else
  if (message.content.startsWith("!subgap")) {
    message.channel.send("https://www.youtube.com/watch?v=UVxU2HzPGug")
  }else
  if (message.content.toLowerCase() == "fuck") {
    message.delete();
    message.channel.send("Well that's a doozy");
  }
});
client.login(process.env.BOT_TOKEN)
