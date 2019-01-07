const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Bot Ready");
});
client.on("message", (message) => {
  console.log(message.author.id);
  if (message.author.id === "360965498126729220") {
    message.channel.send("shut up");
  }
});
client.login(process.env.BOT_TOKEN)
