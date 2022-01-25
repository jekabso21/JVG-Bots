const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const { token, default_prefix } = require('../config.json');

module.exports = {
    name: "remove-money",

    async run (client, message, args) {
/* 		let pr = db.get(`premium_${message.author.id}`);

		if(!pr) {
			return message.channel.send('<a:no:784463793366761532> **This is premium command**')
		} */
		//if has admin premissions to use this command
		if(!message.member.hasPermission("ADMINISTRATOR")) {
			let target = db.get(`userb_${message.author.id}`);

			const ban_error = new Discord.MessageEmbed()
			.setDescription('<a:no:863733318809812992> **You are banned from using this section | Reason : Abuse\n[Contact](https://devevilbot.xyz/contact) with the [owner of the bot](https://discord.com/users/468132563714703390) to appeal a permanent ban**')
			.setColor(color.main)

			if(target) {
				return message.reply(ban_error)
			}
			
			let user = message.mentions.members.first() || message.author
		
			if (isNaN(args[0])) return message.channel.send(`<a:no:784463793366761532> **That was not a valid number**`) // if args[0] (first input) is not a number, return.
			db.subtract(`money_${user.id}`, args[0]) // subtract it now
			let bal = await db.fetch(`money_${user.id}`)
		
			let embed = new Discord.MessageEmbed()
			.setAuthor(`Removed Money`, message.author.displayAvatarURL)
			.addField(`Amount`, `**${args[0]}** <:coin:928775531023978606>`)
			.addField(`Balance Updated`, `**${bal}** <:coin:928775531023978606>`)
			.setColor(color.main) // random = "RANDOM"
			.setTimestamp()
			// you can change it to args[1] if you want to, but then it's not gonna work like I want it to.
		
			message.channel.send(embed)
		
		}
	}
}