import anime from "../database/anime.json";
import nsfw from "../database/nsfw.json";

const animeRandom = function () {
  return {
    anime: () => anime[mathRandom(anime.length)],
    nsfw: () => nsfw[mathRandom(nsfw.length)],
  };
};

function mathRandom(max) {
  return ~~(Math.random() * max);
}

module.exports = animeRandom();
