 
# Noodles wrapper [![npm](https://img.shields.io/npm/v/noodles-wrapper.svg)](https://www.npmjs.com/package/noodles-wrapper) [![npm](https://img.shields.io/npm/dt/noodles-wrapper.svg?maxAge=3600)](https://www.npmjs.com/package/noodles-wrapper) [![install size](https://packagephobia.now.sh/badge?p=noodles-wrapper)](https://packagephobia.now.sh/result?p=noodles-wrapper) 



An API wrapper for [Noodles API](https://frenchnoodles.xyz/api) made by French Noodles#6046 to make your life easier while using the noodles API
 [![NPM](https://nodei.co/npm/noodles-wrapper.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/alexflipnote.js/)
 
 
## Installation
```
npm i noodles-wrapper
```

## Examples
### Random memes command, no input example
```js
const noodles_api = require('noodles-wrapper')
const Discord = require('discord.js')

const Image = await noodles_api.randommeme()
let  embed = new Discord.MessageEmbed()
	.attachFiles([{name:  "meme.png",  attachment:Image}])
	.setImage('attachment://meme.png')
message.channel.send(embed)
```

### Lisa-Stage command, 1 text input example
```js
const noodles_api = require('noodles-wrapper')
const Discord = require('discord.js')

let text = args.toString().replace(/,/g,  '  ')
let Image = await noodles_api.lisastage(text)
  
const attachment = new Discord.MessageAttachment(Image);
message.channel.send(attachment);
```

###  Drake command, more than one text input example
```js
const noodles_api = require('noodles-wrapper');

let text1 = args.toString().split('/')[0].replace(/,/g,  '  ')
let text2 = args.toString().split('/')[1].replace(/,/g,  '  ')

let Image  =  await noodles_api.drake(text1,  text2)
const attachment = new Discord.MessageAttachment(Image);

message.channel.send(attachment);
```

### Trash command, image input example
```js
let Discord = require("discord.js");
const noodles_api = require('noodles-wrapper')

let user = message.mentions.users.first() || message.author
let result = user.displayAvatarURL()

let Image = await  noodles_api.trash(result)

const attachment = new Discord.MessageAttachment(Image);
message.channel.send(attachment);
```

### Balance card command, for more than 2 inputs example
```js
let Discord = require("discord.js");
const noodles_api = require('noodles-wrapper')

let Image = await new noodles_api.balancecard() //You first make the variable
.setBackground(background) //then set all the arguments like so
.setAvatar(avatar)
.setTitle(title)
.setText1(text1)
.setText2(text2)
.setTextColor(textcolor) //in hex
.build() //and when your done, .build() it


let embed= new Discord.MessageEmbed()
  embed.setTitle(`Here is your balance ${message.author.username}!!`)
  embed.attachFiles([{name: "balance.png", attachment:Image}])
  embed.setImage('attachment://balance.png');
  embed.setColor(process.env.EMBEDCOLOR)
  embed.setFooter('Using Noodles API')
message.channel.send(embed)
```

### Welcome banner
As for the welcome banner, it the same code as balance card, just remove text1 replace text2 with subtitle, aka setSubtitle, like so:
```js
const noodles_api = require('noodles-wrapper')

let Image = await new noodles_api.welcomebanner()
.setBackground(background)
.setAvatar(avatar)
.setTitle(username)
.setSubtitle(subtitle)
.setTextColor(textcolor) //in hex
.build()
```

## Endpoints
You can get a full list of the possible API endpoints [Here](https://frenchnoodles.xyz/api/endpoints)
But here are the functions:

 - `drake(text1 ,text2)`
 - `worthless(text)`
 - `presidentialalert(text)`
 - `spongebobburnpaper(text)`
 - `lisastage(text)`
 - `changemymind(text)`
 - `awkwardmonkey(text)`
 - `blur(image)`
 - `invert(image)`
 - `edges(image)`
 - `circle(image)`
 - `wide(image)`
 - `uglyupclose(image)`
 - `clown(image)`
 - `rip(image)`
 - `affectbaby(image)`
 - `trash(image)`
 - `welcomebanner() (set stuff like the example)`
 - `boostercard(image)`
 - `randommeme()`
 - `balancecard() (set stuff like the example)`
 
just replace the inputs with whatever you want,
and for the "set stuff like example" just do as the example said at the start of the documentation

## Quota
Due to recent spamming incidents, quotas were added to stop the API from going down, down worry thoe!
Its really subtle!

### Free tier (default) 
-	1 request per second
-	50 requests per hour
-	250 requests per day

### Hobby tier ($3)
-	2 request per second
-	80 requests per hour
-	380 requests per day

### Standard tier ($7) `most popular`
-	3 request per second
-	200 requests per hour
-	800 requests per day

To buy a tier, please contact me on discord [Here!](https://discord.gg/TnfeMrV)
And if you want a better tier than **Standard** feel free to contact me too, we can arrange something

### Error Handling
Here is an example of an error you could get in your console if you passed the quota, feel free to error handle and make your bot send your own custom error
```json
{
  'You have passed your default quota!': '1 per 1 second',
  status: 429
}
```

It is always recommended to handle the errors sent by wrapper, here is an example
```js
let Image
try{
  Image = await noodles_api.blur(result)
} catch(err) {
  return message.channel.send('You have been ratelimited (or there was a backend error)')
}

const attachment = new Discord.MessageAttachment(Image);
message.channel.send(attachment);
```

### More tiers coming soon, if you have a big app and need it now, feel free to DM me on discord to discuss a price

## Made by
Made with ❤ by French Noodles#6046, you can checkout my website [Here](https://frenchnoodles.xyz) or join my discord server [Here!](https://frenchnoodles.xyz/discord) if you have any questions or suggestions or bug reports

## Notes
I will be adding the more complicated balance card and welcome endpoints

Plus the wrapper is made in a way so that in Visual Studio Code you will get autocomplete for the function names!


