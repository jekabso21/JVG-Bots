const Discord = module.require("discord.js");
const db = require("quick.db");
const {MessageEmbed} = require("discord.js");
module.exports = {
    name: "removewarn",
    description: "Remove warnings from a user.",
    usage: 'removewarn user',
    userPerms: ["Administrator"],
    botPerms: ["Administrator"],
    nsfwOnly: false, // True if the command can be used in nsfw channels only,
    ownerOnly: false, // True if the command can be used by owner only,
    run: async(client, message, args) => {
        const user = message.mentions.members.first();

        if (!user) {
            return message.channel.send("Please mention a user**");
        }

        if (message.mentions.users.first().bot) {
            return message.channel.send("Bot are not allowed to have warnings**");
        }


        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

        if (warnings === null) {
            return message.channel.send(`${message.mentions.users.first().username} don\'t have any warnings**`);
        }

        db.delete(`warnings_${message.guild.id}_${user.id}`);

        const resetwarn = new MessageEmbed()
            .setTitle("Warnings Reseted")
            .setColor("RANDOM")
            .setThumbnail()
            .setDescription(
                `Your warnings are reseted by ${message.author.username} from ${message.guild.name}. You had ${warnings} warnings.`
            )
            .setTimestamp();

        user.send({embeds: [resetwarn]});

        const resetwarn2 = new MessageEmbed()
            .setTitle("Warnings Reseted")
            .setColor("RANDOM")
            .setThumbnail()
            .setDescription(`Reseted all warnings of ${message.mentions.users.first().username}`)
            .setTimestamp();

        message.channel.send({embeds: [resetwarn2]});
    }
}