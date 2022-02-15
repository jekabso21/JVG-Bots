const fs = require("fs");
const antiSwearWords = require("anti-swear-words-packages-discord")
const { Client, Collection, Intents, MessageEmbed, MESSAGE, CHANNEL, REACTION} = require("discord.js");
const { DEFAULT_PREFIX, ERROR_LOGS_CHANNEL, YT_COOKIE } = require("./config.json");
const { loadCommands } = require("./handler/loadCommands");
const { loadEvents } = require("./handler/loadEvents");
const { loadSlashCommands } = require("./handler/loadSlashCommands")
const { loadPlayerEvents } = require("./handler/loadPlayerEvents");
const { DiscordTogether } = require('discord-together')
const { Player } = require('discord-player')
const Enmap = require("enmap")
const env = require("dotenv").config();
const db = require(`quick.db`)

const client = new Client({
  allowedMentions: { parse: ["users", "roles"] },
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_INVITES,
    Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_PRESENCES,
  ],
});
const { checkValid } = require("./functions/validation/checkValid")
const Embeds = require("./functions/embeds/Embeds")
const Logger = require("./functions/Logger/Logger")
const Util = require("./functions/util/Util")

client.discordTogether = new DiscordTogether(client);
client.commands = new Collection();
client.slash = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./Commands/");
client.setMaxListeners(0);
const Cookie = YT_COOKIE;
client.logger = Logger;
client.utils = Util;
client.say = Embeds;
const player = new Player(client, {
  leaveOnEnd: true,
  leaveOnStop: true,
  leaveOnEmpty: false,
  leaveOnEmptyCooldown: 60000,
  autoSelfDeaf: true,
  initialVolume: 130,
  ytdlDownloadOptions: {
    requestOptions: {
      headers: {
        cookie: Cookie,
      }
    }
  },
})
player.use("YOUTUBE_DL", require("@discord-player/downloader").Downloader);
client.player = player;
client.db = new Enmap({ name: "musicdb" });

loadCommands(client);
loadEvents(client);
loadPlayerEvents(client);
loadSlashCommands(client);
checkValid();

//When bot is ready
client.on("ready", () => {
  const guild = client.guilds.cache.size.toLocaleString();
  const user = client.users.cache.size.toLocaleString();
  const channel = client.channels.cache.size.toLocaleString();


  const ready_msg = String.raw`








  _______  _______ _________ _______  _______  _______  __   
  (  ____ )(  ____ \\__   __/(  ____ )(  ___  )/ ___   )/  \  
  | (    )|| (    \/   ) (   | (    )|| (   ) |\/   )  |\/) ) 
  | (____)|| (__       | |   | (____)|| |   | |    /   )  | | 
  |     __)|  __)      | |   |     __)| |   | |  _/   /   | | 
  | (\ (   | (         | |   | (\ (   | |   | | /   _/    | | 
  | ) \ \__| (____/\   | |   | ) \ \__| (___) |(   (__/\__) (_
  |/   \__/(_______/   )_(   |/   \__/(_______)\_______/\____/
                                                                                    
                                                   
      JVG Bot is online               
      Developer: retro#7138

`;
  console.log(ready_msg);
  client.user.setActivity(`${client.guilds.cache.size} servers | ${client.users.cache.size} users`, { type: "WATCHING" });
});

// Error Handling

/*process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception: " + err);

  const exceptionembed = new MessageEmbed()
  .setTitle("Uncaught Exception")
  .setDescription(`${err}`)
  .setColor("RED")
  client.channels.cache.get(ERROR_LOGS_CHANNEL).send({ embeds: [exceptionembed] })
});*/

// process.on("unhandledRejection", (reason, promise) => {
//   console.log(
//     "[FATAL] Possibly Unhandled Rejection at: Promise ",
//     promise,
//     " reason: ",
//     reason.message
//   );
//
//
//    const rejectionembed = new MessageEmbed()
//   .setTitle("Unhandled Promise Rejection")
//   .addField("Promise", `${promise}`)
//   .addField("Reason", `${reason.message}`)
//   .setColor("RED")
//   client.channels.cache.get(ERROR_LOGS_CHANNEL).send({ embeds: [rejectionembed] })
// });

client.on('message', async message => {
  //fetch all the swear words from db.fetch
  const swearWords = await db.fetch(`swear_${message.content}`)
  //console.log(swearWords);
  antiSwearWords(client, message, {
    warnMSG: `<@${message.author.id}> , why are you writing this?`,
    // warn message option || when not then = `<@${message.author.id}> dont use swear words.`
    // Behind the warnMSG will be an Warn Count
    ignoreWord: ["ignoreThis", "andIgnoreThis", "alsoIgnoreThis"],
    customWord: [swearWords],
    muteCount: 4,        // Number when the user get muted
    kickCount: 8,        // Number when the user get kicked
    banCount: 12,         // Number when the user get banned
  });
  //console.log(`${message.author.tag} said ${message.content}`);
});

client.on('messageReactionRemove',async (reaction) =>{
  console.log(user.username)
  if(user.partial) await user.fetch();
  if(reaction.partial) await reaction.fetch();
  if(reaction.message.partial) await reaction.message.fetch();
  if(user.bot) return;
  let emote = await db.get(`emoteid_${reaction.message.guild.id}_${reaction.emoji.id}`)
  if(!emote) return;
  let messageid = await db.get(`message_${reaction.message.guild.id}_${reaction.emoji.id}`)
  if(!messageid) return;
  let role = await db.get(`role_${reaction.message.guild.id}_${reaction.emoji.id}`)
  if(!role) return;
  if(reaction.message.id == messageid && reaction.emoji.id == `${emote}`) {
    reaction.message.guild.members.fetch(user).then(member => {

      member.roles.remove(role)
    })
  }
})

client.on('messageReactionAdd', async (reaction, user) => {
  // When a reaction is received, check if the structure is partial
  if (reaction.partial) {
    // If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
    try {
      await reaction.fetch();
    } catch (error) {
      console.error('Something went wrong when fetching the message:', error);
      // Return as `reaction.message.author` may be undefined/null
      return;
    }
  }

  // Now the message has been cached and is fully available
  console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);
  // The reaction is now also fully available and the properties will be reflected accurately:
  console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
});




client.login(process.env.DISCORD_TOKEN).then(() => {
  console.log(` Successfully logged in as: ${client.user.username}#${client.user.discriminator} `);
});
