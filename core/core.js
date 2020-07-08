const anime = require("../database/anime.json");
const nsfw = require("../database/nsfw.json");

const animeRandom = function () {
  return {
    anime: anime[mathRandom(anime.length)],
    nsfw: () => nsfw[mathRandom(nsfw.length)],
  };
};

const mathRandom = function (number) {
  return ~~(Math.random() * number);
};

module.exports = animeRandom();
