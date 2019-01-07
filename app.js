const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Bot Ready");
});
client.on("message", (message) => {
  if (message.author.id === "531914897139695626") {
    message.channel.send("shut up");
  }
});
client.login(process.env.BOT_TOKEN)
