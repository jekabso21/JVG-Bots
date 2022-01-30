const { Client, Message, MessageEmbed, GuildMember} = require('discord.js');
const ms = require('ms')

module.exports = {
    name: 'mute',
    description: 'Mutes the specified user.',
    usage: 'Mute @user [time] [reason]',
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args, Discord) => {

        const member = message.mentions.members.first();
        let time = args[1];
        const reason = args.slice(2).join(' ');
        const role = message.guild.roles.cache.find(role => role.name === 'Muted')

        if (!member) return message.reply('Mention a user!');
        if (!time) return message.reply('Tell the time!');
        if (!reason) return message.reply('Tell me a reason');

        if (member.id === message.author.id) return message.reply('You cant mute your self!')
        if (member.id === client.id) return message.reply('You cant mute me!')

        member.timeout(time*60*1000, reason)
            .then(console.log)
            .catch(console.error);

    }



}
