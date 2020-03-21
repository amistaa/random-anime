<p align="center">
  <a href="https://www.npmjs.com/package/random-anime">
    <img src="https://cdn.discordapp.com/attachments/666573321894232095/690961950527717456/random-anime.png" alt="Random Anime">
  </a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/random-anime"><img src="https://img.shields.io/npm/v/random-anime.svg?maxAge=3600" alt="NPM version" />
  </a>
  <a href="https://www.npmjs.com/package/random-anime"><img src="https://img.shields.io/npm/dt/random-anime.svg?maxAge=3600" alt="NPM downloads" />
   </a>
</p>
<h3 align="center"><strong>Generate random anime images with many features.</strong></h3>

## Installation
```bash
$ npm install random-anime
```

## Usage
```javascript
const randomanime = require('random-anime')
const anime = randomanime.anime()
const nsfw = randomanime.nsfw()

console.log(anime) //https://anime.jpg
console.log(nsfw)  //https://nsfw.jpg
```

## Discord Bot
```javascript
const randomanime = require("random-anime");
const Discord = require("discord.js");
const client = new Discord.Client();

client.login("BOT_TOKEN");

client.on("message", async message => {
  //Plain Text
  if (message.content === "plain") {
    const anime = randomanime.anime();
    message.channel.send(anime);
  }
  //Embed Image
  if (message.content === "embed") {
    const anime = randomanime.anime();
    const embed = new Discord.RichEmbed().setImage(anime);
    message.channel.send(embed);
  }
});
```

## Options
<p align="center">
**Options** | **Description** | **Usage**
:---: | --- | ---
anime | Random anime images. | randomanime.anime()
nsfw | Random NSFW anime images. | randomanime.nsfw()
</p>

## License
[MIT](https://github.com/amistaa/random-anime/blob/master/LICENSE) © Amista
