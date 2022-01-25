const colors = require('../colors.json')
const Discord = require('discord.js');
require('discord-reply'); 
const db = require('quick.db');
const { token, default_prefix } = require('../config.json');
const pagination = require('discord.js-pagination');

module.exports = {
    name: "help", 

    async run (client, message, args) {
		let prefix = await db.get(`prefix_${message.guild.id}`);
		if(prefix === null) prefix = default_prefix;
		const page1 = new Discord.MessageEmbed()
		 .setTitle('Commands List')
		 .setDescription(`**The prefix is currently \`${prefix}\`** \n**To call one of mine commands type \`${prefix}prefix <prefix>\`** \n**Hello! I am the JVĢ bot, I am helping with my mod skills to look after you all.** \n**So don't do stupid things because I am watching you 😑**`)
		 .addField(':trophy: Leveling System', `\`${prefix}lvlsetup\``, true)
		 .addField(':video_game: Game', `\`${prefix}game\``, true)
		 .addField(':currency_exchange: Economy', `\`${prefix}economy\``, true)
		 .addField(':trident: Info', `\`${prefix}info\``, true)
		 .addField(':joy: Fun', `\`${prefix}fun\``, true)
		 .addField('😎 General', `\`${prefix}general\``, true)
		 .addField(':performing_arts: Reaction Role', `\`${prefix}rrhelp\``, true)
		 .addField(':envelope_with_arrow: Ticket', `\`${prefix}ticketsetup\``, true)
		 .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
		 .setColor(colors.main)
		 




    const pages = [
		page1,
    ]



    pagination(message, pages)
	} 
}