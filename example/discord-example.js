const randomAnime = require("random-anime");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", async message => {
  if (message.content === "plain") {
    const anime = randomAnime.anime();
    message.channel.send(anime);
  }
  if (message.content === "embed") {
    const anime = randomAnime.anime();
    const embed = new Discord.MessageEmbed().setImage(anime);
    message.channel.send(embed);
  }
});

client.login("BOT_TOKEN");
