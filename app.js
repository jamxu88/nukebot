const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Bot Ready");
});
client.on("message", (message) => {
  console.log(message.author.id);
  if (message.author.id === "274574060149800960" || message.member.roles.has("527684781903839242")) {
    message.author.send("" + message.author.toString() + ", you've been recently contributing a lot to the cancer of Meme Team. Due to the RETARDS Act of 1/10/19, you have been placed under supervision of Retard-Away™ for the time being. Thank you for your time and effort towards ridding the cancer.");
    message.delete();
  }
});
client.login(process.env.BOT_TOKEN)
