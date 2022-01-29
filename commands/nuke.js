const Discord = require('discord.js');
const db = require('quick.db')
const { token, default_prefix } = require('../config.json');

module.exports = {
    name: "nuke",
    description: "Nuke the chanel",
    async run (client, message, args){
        
        const userID = '<@533315728640573440>'

        if(!message.sender === userID) {
            const channeltonuke =message.mentions.channels.first() || message.channel;
        message.channel.send(`Nuking ${channeltonuke}`);
                const position = message.channel.position;
                const newChannel = await message.channel.clone();
                await message.channel.delete();
                newChannel.setPosition(position);
        newChannel.send(`Channel Nuked by ${message.member}`);
                return newChannel.send("https://giphy.com/embed/cRBRQf8syLUyY")
    }{
        message.channel.send("You do not have the prem to do that! Your user id:")
        console.log(message.author.id)
    }
    }
}
