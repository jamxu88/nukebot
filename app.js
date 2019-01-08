const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Bot Ready");
});
client.on("message", (message) => {
  console.log(message.author.id);
  let 
  if (message.author.id === "360965498126729220" || message.author.id === "274574060149800960") {
    message.channel.send("shut up " + message.author.toString() + " you retard");
  }
});
client.login(process.env.BOT_TOKEN)
