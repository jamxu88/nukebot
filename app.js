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
  if(message.content.toLowerCase().includes("sex".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.content.toLowerCase().includes("slut".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.content.toLowerCase().includes("whore".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.content.toLowerCase().includes("slut".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.content.toLowerCase().includes("slot".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.content.toLowerCase().includes("bitch".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.content.toLowerCase().includes("fuck".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.content.toLowerCase().includes("stripper".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.content.toLowerCase().includes("kinky".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.content.toLowerCase().includes("penis".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.content.toLowerCase().includes("dick".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.content.toLowerCase().includes("vagina".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.content.toLowerCase().includes("pussy".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.content.toLowerCase().includes("cooch".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.content.toLowerCase().includes("cum".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.content.toLowerCase().includes("hoe".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.content.toLowerCase().includes("ass".toLowerCase())){
    message.reply("Excuse me?")
  }
});
client.login(process.env.BOT_TOKEN)
