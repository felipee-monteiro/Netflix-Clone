
const fetch = require('node-fetch');

async function getAllMovies(API) {

    const get = await fetch(`https://api.themoviedb.org/3/${API}`)
    .then(res => res.json())
    .then(data => data)
    .then(json => json)

    return get

}

module.exports = {
    getAllMovies
}