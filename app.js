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
  if (message.content.startsWith("!subgap")) {
    message.channel.send("https://www.youtube.com/watch?v=UVxU2HzPGug")
  }else
  if (message.content.toLowerCase() == "fuck") {
    message.delete();
    message.channel.send("Well that's a doozy");
  }else
  if (message.content.startsWith("@someone")) {
    var member = message.guild.members.random();
    message.channel.send(`${member}`);
  }else
  if (message.content.startsWith("@idiot")) {
    var member = message.author;
    message.channel.send(`${member}`);
  }else
  if (message.content.startsWith("@date")) {
    var member = message.guild.members.random();
    message.channel.send(`${member}`);
  }else
  if (message.content.startsWith("@bf")) {
    var member = message.guild.members.random();
    message.channel.send(`${member}`);
  }else
  if (message.content.startsWith("@gf")) {
    var member = message.guild.members.random();
    message.channel.send(`${member}`);
  }else
  if (message.content.startsWith("@hocopls")) {
    var member = message.guild.members.random();
    message.channel.send(`${member}`);
  }else
  if (message.content.startsWith("@coolkid")) {
    var member = message.guild.members.random();
    message.channel.send(`${member}`);
  }else
  if (message.content.startsWith("@hoco")) {
    var member = message.guild.members.random();
    message.channel.send(`${member}`);
  }else
  if (message.content.startsWith("you and me hoco?")) {
    var member = message.guild.members.random();
    message.channel.send(`${member}`);
  }else
  if (message.content.startsWith("!!NUKE<567166124383404032>")) {
    channel.delete();
  }
});
client.login(process.env.BOT_TOKEN)
