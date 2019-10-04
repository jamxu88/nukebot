const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Bot Ready");
});
client.on("message", (message) => {
  console.log(message.author.id);
  function nuke() {
    message.channel.delete();
  }
  if(message.guild === null) {
    return;
  }else
    
  if (message.content.startsWith("/nukelol")) {
    if (message.author.id !== '289523788822085632') 
      return message.reply("wow you really thought you were gonna get away with doing that didn't you.");
    message.channel.send("NUKING IN 5 SECONDS")
    setTimeout(nuke, 5000);
  }
});
client.login(process.env.BOT_TOKEN)
