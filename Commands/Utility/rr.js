const {MessageEmbed, MessageSelectMenu, MessageActionRow} = require("discord.js");
const db = require("quick.db");
const Discord = require("discord.js");

module.exports = {
    name: "rr",
    description: "rr",
    usage: "rr chanel message role emoji",
    botPerms: ["MANAGE_MESSAGES"],
    userPerms: ["Administrator"],
    nsfwOnly: false, // True if the command can be used in nsfw channels only,
    ownerOnly: false, // True if the command can be used by owner only,
    run: async(client, message, args) => {
        let channel = message.mentions.channels.first();
        if(!channel) return message.channel.send(`!rr <#channeL> <MESSAGEID> <ROLE> <EMOJI>**`)
        if(!args[1]) return message.channel.send(`<!rr ${channel} <MESSAGEID> <ROLE> <EMOJI>**`)

        let messageid = client.channels.cache.get(`${channel.id}`).messages.fetch(`${args[1]}`)
        if(!messageid) return message.channel.send(`That's not an vaild message ID `)

        if(isNaN(args[1])) return message.channel.send(`!Message ID Must be a number**`)
        let role = message.mentions.roles.first();
        if(!role) return message.channel.send(`!rr ${channel} ${args[1]} <@role> <Emoji>**`)
        let check = message.guild.roles.cache.find(r => r.name === `${role.name}`)
        if(!check) return message.channel.send(`invaild role`)
        if(!args[3]) return message.channel.send(`!rr ${channel} ${args[1]} ${role.name} <EMOJI>`)
        function isCustomEmoji(emoji) {
            return emoji.split(":").length == 1 ? false : true;
        }
        if (isCustomEmoji(args[3])) {
            let customemoji = Discord.Util.parseEmoji(args[3]);
            let emojicheck = client.emojis.cache.find(emoji => emoji.id === `${customemoji.id}`);
            if(!emojicheck) return message.channel.send(`this emoji is invaild**`)
            let embed = new MessageEmbed()
                .setThumbnail(message.guild.iconURL())
                .setTitle(`<a:yes:784463701305458708> Reaction Role`)
                .setDescription(`Reaction Role Sucsses
				
				**[Go To Message](https://discord.com/channels/${message.guild.id}/${channel.id}/${args[1]})
				Role : ${role}
				[Emoji](https://cdn.discordapp.com/emojis/${emojicheck.id}.png?v=1) : ${emojicheck}
				Channel : ${channel}
				`)
                .setFooter(`${client.user.username}`, client.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
                .setColor("RANDOM")

            message.channel.send({ embeds: [embed] })
            client.channels.cache.get(`${channel.id}`).messages.fetch(`${args[1]}`).then(a => {
                a.react(emojicheck.id)
                db.set(`rrremove_${message.guild.id}_${args[1]}2`, channel.id)
                db.set(`rrremove_${message.guild.id}_${args[1]}_${args[3]}`, emojicheck.id)
                db.set(`rerremove_${message.guild.id}_${args[1]}`, args[1])
                db.set(`emoteid_${message.guild.id}_${emojicheck.id}`, emojicheck.id)
                db.set(`role_${message.guild.id}_${emojicheck.id}`, role.id)
                db.set(`message_${message.guild.id}_${emojicheck.id}`, args[1])
                return;
            })
            return;
        }
        db.set(`rrremove_${message.guild.id}_${args[1]}2`, channel.id)
        db.set(`rrremove_${message.guild.id}_${args[1]}_${args[3]}`, args[3])
        db.set(`rerremove_${message.guild.id}_${args[1]}`, args[1])
        db.set(`emoteid_${message.guild.id}_${args[3]}`, args[3])
        db.set(`role_${message.guild.id}_${args[3]}`, role.id)
        db.set(`message_${message.guild.id}_${args[3]}`, args[1])
        let embed = new MessageEmbed()
            .setThumbnail(message.guild.iconURL())
            .setTitle(`Reaction Role`)
            .setDescription(`**<a:yes:784463701305458708> Reaction Role Sucsses**
				
				**[Go To Message](https://discord.com/channels/${message.guild.id}/${channel.id}/${args[1]})
				Role : ${role}
				Emoji : ${args[3]}
				Channel : ${channel}**
				`)
            .setColor("RANDOM")

        message.channel.send({ embeds: [embed] })
        client.channels.cache.get(`${channel.id}`).messages.fetch(`${args[1]}`).then(a => {
            a.react(args[3])
        })
    }
}
