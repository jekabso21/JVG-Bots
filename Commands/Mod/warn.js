const Discord = module.require("discord.js");
const db = require("quick.db");
const {MessageEmbed} = require("discord.js");

module.exports = {
    name: "warn",
    description: "Warn the user",
    usage: "warn user",
    userPerms: ["Administrator"],
    botPerms: ["Administrator", "ManageMessages"],
    nsfwOnly: false, // True if the command can be used in nsfw channels only,
    ownerOnly: false, // True if the command can be used by owner only,
    run: async(client, message, args) => {
        const user = message.mentions.members.first();

        if (!user) {
            return message.channel.send(
                "❌ **Please mention a user**"
            );
        }

        if (message.mentions.users.first().bot) {
            return message.channel.send("❌ **You can not warn bots**");
        }

        if (message.author.id === user.id) {
            return message.channel.send("❌ **You can not warn yourself -_-**");
        }

        if (user.id === message.guild.ownerId) {
            return message.channel.send(
                "❌ **Bruh, you can not warn server owner -_-**"
            );
        }

        const reason = args.slice(1).join(" ");

        if (!reason) {
            return message.channel.send(
                "❌ **Please provide reason to warn**"
            );
        }

        message.react('✅')

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);
        console.log(message.guild.id, user.id);

        if (warnings === null) {
            console.log(message.guild.id, user.id);
            db.set(`warnings_${message.guild.id}_${user.id}`, 1);
            console.log(warnings)


            var warningEmbed = new MessageEmbed()
                .setColor("DARK_RED")
                .setTitle(`**You've been warned in ${message.guild.name}**`)
                .addField('Warned by', `**${message.author.tag}**`)
                .addField('Reason', `**${reason}**`)
                .setTimestamp();
            user.send({embeds: [warningEmbed]});

            var warnSuccessfulEmbed = new MessageEmbed()
                .setColor("DARK_RED")
                .setDescription(`✅ **User Successfully Warned**`)
                .addField('Warned by', `${message.author}`)
                .addField('Reason', `**${reason}**`)
            let mChannel = db.fetch(`modlog_${message.guild.id}`)
            if(!mChannel) return message.channel.send(warnSuccessfulEmbed)
            let warnChannel = message.guild.channels.cache.get(mChannel)
            if(!warnChannel) return;
            warnChannel.send({embeds: [warnSuccessfulEmbed]})
        } else if(warnings !== null) {

            db.add(`warnings_${message.guild.id}_${user.id}`, 1);

            var warningEmbed = new MessageEmbed()
                .setColor("DARK_RED")
                .setTitle(`**You've been warned in ${message.guild.name}**`)
                .addField('Warned by', `**${message.author.tag}**`)
                .addField('Reason', `**${reason}**`)
                .setTimestamp();
            user.send({embeds: [warningEmbed]});

/*            var warnSuccessfulEmbed = new MessageEmbed()
                .setColor("DARK_RED")
                .setDescription(`✅ **User Successfully Warned**`)
                .addField('Warned by', `${message.author}`)
                .addField('Reason', `**${reason}**`)*/

            message.delete();
/*            let mChannel = db.fetch(`modlog_${message.guild.id}`)
            if(!mChannel) return message.channel.send(warnSuccessfulEmbed)
            let warnChannel = message.guild.channels.cache.get(mChannel)
            if(!warnChannel) return;
            warnChannel.send(warnSuccessfulEmbed)*/


        }
    }
}