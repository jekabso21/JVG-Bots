const colors = require('../colors.json')
const Discord = require('discord.js');

module.exports = {
    name: "media",

    async run (client, message, args) {
		let messageArry = message.content.split(" ")
		let cmd = messageArry[0]; 
		const server = new Discord.MessageEmbed()
		.setColor(colors.main)
		.setTitle('Website')
		.setDescription('**[Skolas mājas lapa ||](http://vgim.jelgava.lv/)**   **[Instagram ](https://www.instagram.com/jvgpadome/) ** **[Facebook](https://www.facebook.com/jvgpadome/)**')
		.setThumbnail(client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
		message.channel.send(server)
	}
}