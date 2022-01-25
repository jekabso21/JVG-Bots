const colors = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db');
const { token, default_prefix } = require('../config.json');
const pagination = require('discord.js-pagination');

module.exports = {
    name: "fun",

    async run (client, message, args) {
		let prefix = await db.get(`prefix_${message.guild.id}`);
		if(prefix === null) prefix = default_prefix;
		const page1 = new Discord.MessageEmbed()
		 .setTitle('Fun Commands')
		 .addField('Joke', `\`${prefix}joke\``, true)
		 .addField('Meme', `\`${prefix}meme\``, true)
		 .addField('Weather', `\`${prefix}weather <city>\``, true)
		 .addField('Ascii', `\`${prefix}ascii <text>\``, true)
		 .addField('8ball', `\`${prefix}8ball\``, true)
		 .addField('Binary', `\`${prefix}binary <text>\``, true)
		 .addField('Decode', `\`${prefix}decode <binary>\``, true)
		 .addField('Howgay', `\`${prefix}howgay [user]\``, true)
		 .addField('Tweet', `\`${prefix}tweet <username> <message>\``, true)
		 .addField('PH Comment', `\`${prefix}phcomment <message>\``, true)
		 .addField('Changemymind', `\`${prefix}changemymind <text>\``, true)
		 .addField('Jail', `\`${prefix}jail [user]\``, true)
		 .addField('Rip', `\`${prefix}rip [user]\``, true)
		 .addField('Trash', `\`${prefix}trash [user]\``, true)
		 .setColor(colors.main)





   const pages = [
	   page1,
   ]



   pagination(message, pages)

	}
}