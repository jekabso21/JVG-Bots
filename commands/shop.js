const { MessageEmbed } = require('discord.js');
const { default_prefix } = require('../config.json');
const db = require('quick.db');
const colors = require('../colors.json')

module.exports = {
   
        name: "shop",
    run: async (client, message, args) => {
        let target = db.get(`userb_${message.author.id}`);

		const ban_error = new MessageEmbed()
		.setDescription('<a:no:863733318809812992> **You are banned from using this section | Reason : Abuse\n[Contact](https://devevilbot.xyz/contact) with the [owner of the bot](https://discord.com/users/468132563714703390) to appeal a permanent ban**')
		.setColor(colors.main)

		if(target) {
			return message.channel.send(ban_error)
		}

		let prefix = await db.get(`prefix_${message.guild.id}`);
		if(prefix === null) prefix = default_prefix;
 

     let embed = new MessageEmbed()
	    .setTitle('Shop')
        .addField('Items', '**Shovel : 25,000 <:coin:928775531023978606>\nFishing Pole : 25,000 <:coin:928775531023978606>\nHeadphone : 50,000 <:coin:928775531023978606>\nCell Phone : 120,000 <:coin:928775531023978606>\nLaptop : 200,000 <:coin:928775531023978606>\nDB Coin : 1,000,000 <:coin:928775531023978606>**', true)
        .addField('Pets', '**Turtle : 1,700 <:coin:928775531023978606>\nBird : 2,000 <:coin:928775531023978606>\nCat : 5,000 <:coin:928775531023978606>\nDog : 5,500 <:coin:928775531023978606>\nSnake : 10,000 <:coin:928775531023978606>**', true)
        .addField('Guns', '**Pistol : 350,000 <:coin:928775531023978606>\nRifle : 650,00 <:coin:928775531023978606>\nSniper : 700,000 <:coin:928775531023978606>\nShotgun : 700,000 <:coin:928775531023978606>**', true)
        .addField('Abilities', '**Ghost : 1,500,000 <:coin:928775531023978606>\nNinja : 2,500,000 <:coin:928775531023978606>\nMind Reading : 5,000,000 <:coin:928775531023978606>\nInvisible : 15,000,000 <:coin:928775531023978606>**', true)
        .addField('Badges', '**Copper : 200,000 <:coin:928775531023978606>\nBronze : 1,000,000 <:coin:928775531023978606>\nSilver : 2,000,000 <:coin:928775531023978606>\nGold : 3,000,000 <:coin:928775531023978606>\nDiamond : 5,000,000 <:coin:928775531023978606>\nImmortal : 10,000,000 <:coin:928775531023978606>**', true)
        .addField('Cars', '**Tesla : 3,000,000 <:coin:928775531023978606>\nFerrari : 5,000,000 <:coin:928775531023978606>\nBugatti : 8,000,000 <:coin:928775531023978606>\nLamborghini : 12,000,000 <:coin:928775531023978606>\nMercedes-Benz : 15,000,000 <:coin:928775531023978606>\nRolls-Royce : 20,000,000 <:coin:928775531023978606>**', true)
        .addField('Houses', '**Apartment : 10,000,000 <:coin:928775531023978606>\nVilla : 15,000,000 <:coin:928775531023978606>\nOcean View : 20,000,000 <:coin:928775531023978606>\nMansion : 30,000,000 <:coin:928775531023978606>\nCastle : 50,000,000 <:coin:928775531023978606>**', true)
        .setColor(colors.main)
		.setFooter(`${client.user.username}`, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
        message.channel.send(embed)
    }
}

