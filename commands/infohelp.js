const colors = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db');
const { token, default_prefix } = require('../config.json');
module.exports = {
    name: "info",

    async run (client, message, args) {
		let prefix = await db.get(`prefix_${message.guild.id}`);
		if(prefix === null) prefix = default_prefix;
		const info = new Discord.MessageEmbed()
		 .setTitle('Info Commands')
		 .addField('Server Info', `\`${prefix}serverinfo\``)
		 .addField('Role Info', `\`${prefix}roleinfo <role>\``)
		 .addField('Channel Info', `\`${prefix}channelinfo <channel>\``)
		 .addField('Avatar', `\`${prefix}avatar [user]\``)
		 .addField('Server Avatar', `\`${prefix}savatar\``)
		 .addField('Member Count', `\`${prefix}members\``)
		 .addField('Profile', `\`${prefix}profile [user]\``)
		 .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
		 .setColor(colors.main)
		message.channel.send(info)
	}
}