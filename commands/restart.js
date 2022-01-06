/* // set message listener 
const { token, default_prefix } = require("./config.json");

client.on('message', message => {
    switch(message.content.toUpperCase()) {
        case '?RESET':
            resetBot(message.channel);
            break;

        // ... other commands
    }
});

module.exports = {
    name: "restart",

    async run (client, message, args) {
		console.log('Restarting...')
		if(!message.member.hasPermission("ADMINISTRATOR")) {
			return message.channel.send("<a:no:784463793366761532> **You can not use this command | Permission: ADMINISTRATOR**")
		}
			resetBot(message.channel);
            break;
	}
}

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting...')
	console.log('Resetting...')
    .then(msg => client.destroy())
    .then(() => client.login(token));
} */