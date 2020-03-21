const databaseAnime = require('../database/anime.json')

function animeRandom() {
  return {
    anime: () => databaseAnime[mathRandom(databaseAnime.length)],
    nsfw: () => databaseAnime[mathRandom(databaseAnime.length)]
  }
}

function mathRandom(max) {
    return Math.floor(Math.random() * max)
}

module.exports = animeRandom()
