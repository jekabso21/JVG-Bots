/* const colors = require('../colors.json')
const Discord = require('discord.js');
const db = require('quick.db')
const { MessageEmbed } = require('discord.js');
const axios = require('axios');
const fetch = require('node-fetch')
client.YTP = new YoutubePoster(client);

module.exports = {
    name: "yttogether",

    async run (client, message, args) {
            //if in a dm or msg from a bot, return 
            if (!message.guild || message.author.bot) return; 
        
            const args = message.content.slice(prefix.length).trim().split(" ");
            const cmd = args.shift().toLowerCase();
        
            let toreplace_format =  
                `**\`{videourl}\` ==> URL / LINK**` + "\n" +
                `**\`{videotitle}\` ==> TITLE / NAME**` + "\n" +
                `**\`{videoauthorname}\` ==> Channelauthor NAME**` + "\n" +
                `**\`{discorduser}\` ==> ID of the LINKED USER**`;
        
             if (cmd === "set" || cmd === "add" || cmd === "youtube") {
                if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({
                    embed: new Discord.MessageEmbed().setColor("RED").setDescription(":x: You are not allowed to execute this Command!")
                })
                let ChannelLink = args[0];
                let DiscordChannel = message.mentions.channels.filter(c => c.guild.id == message.guild.id).first() || message.guild.channels.cache.get(args[1]);
                let DiscordUser = message.mentions.members.filter(m => m.guild.id == message.guild.id).first()?.user || message.guild.members.cache.get(args[2])?.user;
                let Notification = args.slice(3).join(" ") || client.YTP.options.defaults.Notification;
                let preventDuplicates = true;
                if (!ChannelLink || !DiscordChannel || !DiscordUser) return message.channel.send({
                    embed: new Discord.MessageEmbed().setColor("RED").setDescription(`:x: Usage: \`${prefix}set <LINK> <CHANNEL> <USER> [TEXT...]\`\n\n**Replacements:**\n` + toreplace_format)
                })
                //set a Channel
                client.YTP.setChannel(ChannelLink, DiscordChannel, DiscordUser, Notification, preventDuplicates = true)
                    .then(ch => {
                        //console.log(ch) See the Responses: https://github.com/Tomato6966/discord-yt-poster/wiki/Responses
                        //send the information
                        message.channel.send({
                            embed: new Discord.MessageEmbed().setColor("GREEN").setDescription(`I will now post Notifications for ${ch.YTchannel} (<@${ch.DiscordUser}>) in <#${ch.DiscordChannel}>\n\nThe Message:\n${ch.message}`)
                        }).then(msg => msg.react("👍"))
                    }).catch(e => {
                        console.log(e);
                        message.channel.send(`${e.message ? e.message : e}`, {
                            code: "js"
                        })
                    })
            }
        
            if (cmd === "remove" || cmd === "delete" || cmd == "del") {
                if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({
                    embed: new Discord.MessageEmbed().setColor("RED").setDescription(":x: You are not allowed to execute this Command!")
                })
                let ChannelLink = args[0];
                if (!ChannelLink) return message.channel.send(`:x: Usage: \`${prefix}del <LINK>`)
                //Delete a Channel
                client.YTP.deleteChannel(message.guild.id, ChannelLink)
                    .then(ch => {
                        //console.log(ch) See the Responses: https://github.com/Tomato6966/discord-yt-poster/wiki/Responses
                        //send information message
                        message.channel.send({
                            embed: new Discord.MessageEmbed().setColor("GREEN").setDescription(`I deleted the Settings for ${ch.deletedChannel.YTchannel} (<@${ch.deletedChannel.DiscordUser}>), posting in <#${ch.deletedChannel.DiscordChannel}>\n\nThe Message:\n${ch.deletedChannel.message}`)
                        }).then(msg => msg.react("👍"))
                    }).catch(e => {
                        console.log(e);
                        message.channel.send(`${e.message ? e.message : e}`, {
                            code: "js"
                        })
                    })
            }
}
} */