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
  if(message.toLowerCase().includes("sex".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.toLowerCase().includes("slut".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.toLowerCase().includes("whore".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.toLowerCase().includes("slut".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.toLowerCase().includes("slot".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.toLowerCase().includes("bitch".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.toLowerCase().includes("fuck".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.toLowerCase().includes("stripper".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.toLowerCase().includes("kinky".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.toLowerCase().includes("penis".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.toLowerCase().includes("dick".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.toLowerCase().includes("vagina".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.toLowerCase().includes("pussy".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.toLowerCase().includes("cooch".toLowerCase())){
    message.reply("Excuse me?")
  }else
  if(message.toLowerCase().includes("cum".toLowerCase())){
    message.reply("Excuse me?")
  }
  
});
client.login(process.env.BOT_TOKEN)
