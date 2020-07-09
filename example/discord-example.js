const randomanime = require("random-anime");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", async message => {
  /* Plain Text */
  if (message.content === "plain") {
    const anime = randomanime.anime();
    message.channel.send(anime);
  }
  /* Embed Image (D.JS Version 12) */
  if (message.content === "embed") {
    const anime = randomanime.anime();
    const embed = new Discord.MessageEmbed().setImage(anime);
    message.channel.send(embed);
  }
});

client.login("BOT_TOKEN");