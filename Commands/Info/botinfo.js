/**
* READ THIS BEFORE YOU CHANGE THE CONTENT OF THIS COMMAND!
* You are not allowed to change lines about this repo in this command.
* You can change bot name and owner name, but not the source of this bot.
* You are also not allowed to remove the credits from the footer to the orginal owner from this bot.
* If you want to change the description, you will have to add the line that: "[YOUR BOT NAME] is an modified instance of Reaper-2.0 bot made by Simpleboy353.
* These points are not optional, but remarks from the dev team of Reaper-2.0.
*/

const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
  name: "botinfo",
  description: "Shows the bot info",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const duration = moment
      .duration(client.uptime)
      .format(" D [days], H [hrs], m [mins], s [secs]");

    let embed = new Discord.MessageEmbed()
      .setAuthor("JVG-Bot's Info", client.user.avatarURL())
      .setColor("RANDOM")
      .setDescription(
        `**Bot Name: **Reaper \n**Owner: **[Retro21] \n**Total Categories: **8 \n**Total Commands: **${client.commands.size} \n**Users:** ${
          client.users.cache.size
        } \n**Servers:** ${client.guilds.cache.size} \n**Channels:** ${
          client.channels.cache.size
        }`
      )
      .addField(
        "About JVG-Bot",
        "JVG-Bot is an Jelgavas Valsts ģimnāzijas discord server bot. He is watching the server for any weird or suspicious activities and giving people some fun."
      )
      .addField(
        "Some Useful Links",
        "**Visit JVĢ home page** **[Here](http://vgim.jelgava.lv/)** \n**Padomes Instagram ** **[Instagram](https://www.instagram.com/jvgpadome/)** \n**Padomes Facebook ** **[Facebook](https://www.facebook.com/jvgpadome/)"
      )
      .setFooter("Regards, JVG-Bot's Development Team");
    message.channel.send({ embeds: [embed] });
  },
};
