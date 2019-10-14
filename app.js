const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Bot Ready");
  x = 80
});
client.on("message", (message) => {
  console.log(message.author.id);
  x = x + 1
  if(message.guild === null) {
    return;
  }else
  if (x % 100 == 0) {
  message.channel.send("GO DO YOUR HOMEWORK OR ELSE YOU'RE GETTING MUTED");
  x = x + 1
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
  }else
  if(message.content.toLowerCase().includes("cunt".toLowerCase())){
    message.reply("Excuse me?")
  }if(message.content.toLowerCase().includes("<@629491537612636171>".toLowerCase())){
    message.reply("Excuse me? Don't talk back to me.")
  }else
  if(message.content.toLowerCase().includes("shit".toLowerCase())){
    message.reply("Excuse me?")
  }
});
client.login(process.env.BOT_TOKEN)
