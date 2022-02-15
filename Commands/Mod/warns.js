const Discord = module.require("discord.js");
const db = require("quick.db");
const {MessageEmbed} = require("discord.js");
const data = require("quick.db");

module.exports = {
    name: "warns",
    description: "See how much warns a user has.",
    usage: "warns user",
    userPerms: ["Send_Messages"],
    botPerms: ["Administrator", "ManageMessages"],
    nsfwOnly: false, // True if the command can be used in nsfw channels only,
    ownerOnly: false, // True if the command can be used by owner only,
    run: async(client, message, args) => {
        let user = message.mentions.users.first() || message.author;
        console.log(user, user.id);
        let warns = data.get(`warnings_${message.guild.id}_${user.id}`)
        //if(!warns) warns = 0;
        //console.log(warns);
        let embed = new MessageEmbed()
        .setTitle(`${user.username}'s warns`)
        .setDescription(`${user.username} has ${warns} warns.`)
        .setColor("RANDOM")
        .setTimestamp()
        message.channel.send({ embeds: [embed] });
    }
}