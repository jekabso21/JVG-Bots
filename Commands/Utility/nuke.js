module.exports = {
    name: "nuke",
    description: "nuke",
     botPerms: ["ADMINISTRATOR"],
    userPerms: ["ADMINISTRATOR"],
             run: async(client, message, args) => {
        const channeltonuke =message.mentions.channels.first() || message.channel;
      message.channel.send(`Nuking ${channeltonuke}`);
			const position = message.channel.position;
			const newChannel = await message.channel.clone();
			await message.channel.delete();
			newChannel.setPosition(position);
      newChannel.send(`Channel Nuked by ${message.member}`);
			return newChannel.send("https://media.giphy.com/media/fUYHsI9fpyAwWg3MHN/giphy-downsized-large.gif")
   }
}
