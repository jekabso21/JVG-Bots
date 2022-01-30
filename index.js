const fs = require("fs");
const chalk = require("chalk");
const antiSwearWords = require("anti-swear-words-packages-discord")
const { Client, Collection, Intents, MessageEmbed } = require("discord.js");
const { DEFAULT_PREFIX, ERROR_LOGS_CHANNEL, YT_COOKIE } = require("./config.json");
const { loadCommands } = require("./handler/loadCommands");
const { loadEvents } = require("./handler/loadEvents");
const { loadSlashCommands } = require("./handler/loadSlashCommands")
const { loadPlayerEvents } = require("./handler/loadPlayerEvents");
const { DiscordTogether } = require('discord-together')
const { Player } = require('discord-player')
const Enmap = require("enmap")
const env = require("dotenv").config();


//if is error Class extends value undefined is not a constructor or null is not an object error then you need to add the following line to fix it. At line number: 1 in file: index.js
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

// Error Handling

process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception: " + err);

  const exceptionembed = new MessageEmbed()
  .setTitle("Uncaught Exception")
  .setDescription(`${err}`)
  .setColor("RED")
  client.channels.cache.get(ERROR_LOGS_CHANNEL).send({ embeds: [exceptionembed] })
});

process.on("unhandledRejection", (reason, promise) => {
  console.log(
    "[FATAL] Possibly Unhandled Rejection at: Promise ",
    promise,
    " reason: ",
    reason.message
  );

   const rejectionembed = new MessageEmbed()
  .setTitle("Unhandled Promise Rejection")
  .addField("Promise", `${promise}`)
  .addField("Reason", `${reason.message}`)
  .setColor("RED")
  client.channels.cache.get(ERROR_LOGS_CHANNEL).send({ embeds: [rejectionembed] })
});

client.on('message', async message => {
  antiSwearWords(client, message, {
    warnMSG: `<@${message.author.id}> , why are you writing this?`,
    // warn message option || when not then = `<@${message.author.id}> dont use swear words.`
    // Behind the warnMSG will be an Warn Count
    ignoreWord: ["ignoreThis", "andIgnoreThis", "alsoIgnoreThis"],
    customWord: ["aCustomWord", "anOtherCustomWord"],
    muteCount: 4,        // Number when the user get muted
    kickCount: 8,        // Number when the user get kicked
    banCount: 12,         // Number when the user get banned
  });
});


client.login(process.env.DISCORD_TOKEN).then(() => {
  console.log(` Successfully logged in as: ${client.user.username}#${client.user.discriminator} `);
});
