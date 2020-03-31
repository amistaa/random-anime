const databaseAnime = require('../database/anime.json')
const databaseNSFW = require('../database/nsfw.json')

function animeRandom() {
  return {
    anime: () => databaseAnime[mathRandom(databaseAnime.length)],
    nsfw: () => databaseNSFW[mathRandom(databaseNSFW.length)]
  }
}

function mathRandom(max) {
    return ~~(Math.random() * max)
}

module.exports = animeRandom()
