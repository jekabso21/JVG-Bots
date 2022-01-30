
## Getting started
#### Creating a fork:
- 1). [Click here to fork the repository](https://github.com/jekabso21/JVG-Bots)
- 2). Open your terminal and type `git clone https://github.com/jekabso21/JVG-Bots.git`
#### Installing all necessary packages
- `npm install`
#### Starting the bot
- `node .` or `npm run dev` 

---

## Configuration
- **Edit the `config.json` file and enter the  required values**
```json
{
  "OWNER_ID": "YOUR_ID_HERE",
  "BOT_TOKEN": "YOUR_BOT_TOKEN",
  "tenorAPI":"ZEEELJXAFQBN",
  "DEFAULT_PREFIX":"ENTER_YOUR_PREFIX_HERE",
  "mongoPass": "ENTER_YOUR_MONGODB_URL_HERE",
  "ERROR_LOGS_CHANNEL": "ADD_ERRORLOGS_CHANNEL_ID",
  "YT_COOKIE": "ADD_YOUR_COOKIE_HERE",
}
```
- **Watch [this video](https://youtu.be/BPqJIl34gm8) to know, how to get the `YT_COOKIE`**
- **You may use any channel id for `ERROR_LOGS_CHANNEL`, but the bot must be present in the server you are choosing the ID from.**
- **All the errors your bot faces, will be logged in the `ERROR_LOGS_CHANNEL`**
- **The `mongoPass` must be a `url`**
- **Visit Official [MongoDB Website](https://mongodb.com) to get your `mongoPass`**
- **Watch this video to know how to get your `mongoPass`:**
[![MongoDb Tutorial](http://img.youtube.com/vi/pf-8KA8td88/0.jpg)](http://www.youtube.com/watch?v=pf-8KA8td88 "MongoDB Tutorial")
- **Don't change the `tenorAPI` else the `gif` command won't work!**


---

## Contributing
- **Before contributing to this repo, make sure to read [CONTRIBUTIONS.md](https://github.com/jekabso21/JVG-Bots/blob/main/CONTRIBUTIONS.md)**


---

## Star the Repo if you liked it!
