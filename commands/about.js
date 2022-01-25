const colors = require('../colors.json')
const Discord = require('discord.js');

module.exports = {
    name: "about",

    async run (client, message, args) {
		let messageArry = message.content.split(" ")
		let cmd = messageArry[0]; 
		const about = new Discord.MessageEmbed()
		.setTitle('About')
		.setDescription('**JVĢ bots is for managing the server and for little fun, Created by retro#7138**\n**Also features Games , Fun and much more**')
		.setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
		.setColor(colors.main)
		message.channel.send(about)
	}
}