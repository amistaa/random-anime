import anime from "../database/anime.json";
import nsfw from "../database/nsfw.json";

const animeRandom = function () {
  return {
    anime: () => anime[mathRandom(anime.length)],
    nsfw: () => nsfw[mathRandom(nsfw.length)],
  };
};

const mathRandom = function (number) {
  return ~~(Math.random() * number);
}

module.exports = animeRandom();