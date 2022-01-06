const color = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const { token, default_prefix } = require('../config.json');

module.exports = {
    name: "add-xp",

    async run (client, message, args) {
		if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send('<a:no:784463793366761532> **I do not have the correct permissions | Permission : MOVE_MEMBERS**')
		//let pr = db.get(`premium_${message.author.id}`);

		//if(!pr) {
		//	return message.channel.send('<a:no:784463793366761532> **This is premium command**')
		//}

		let user = message.author;

	
		if (!args[0]) return message.reply('<a:no:784463793366761532> **Please specify an amount to add**')
		if (isNaN(args[0])) return message.reply('<a:no:784463793366761532> **That was not a valid number**')

		message.channel.send(` **👌 Successfully added ${args[0]} xp to ${user.tag}**`)

		db.add(`level_${message.guild.id}_${user.id}`, args[0])
	}
}
