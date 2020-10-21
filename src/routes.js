const express = require('express');
const router = express.Router();
const { getAllMovies } = require('../src/getFilmList');
const API_KEY = '2e02ebadcf3dfd6fef66fdf61ac22e41';

router.get("/", async (req, res) => {

    const randomNumber = Math.floor(Math.random() * 20);
    const getFilmData = await getAllMovies(`trending/all/week?language=pt-BR&api_key=${API_KEY}&page=${randomNumber}`);
    const getRecommendedByNetflix = await getAllMovies(`discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}&page=${randomNumber}`);
    const topRated = await getAllMovies(`movie/top_rated?language=pt-BR&api_key=${API_KEY}&page=${randomNumber}`);
    const filmAction = await getAllMovies(`discover/movie?with_genres=28&language=pt-BR&include_video=true&api_key=${API_KEY}&page=${randomNumber}`);
    const filmComedy = await getAllMovies(`discover/movie?with_genres=35&language=pt-BR&include_video=true&api_key=${API_KEY}&page=${randomNumber}`);
    const filmRomance = await getAllMovies(`discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}&page=${randomNumber}`);

    return res.render("index.html", { getFilmData, getRecommendedByNetflix, topRated, filmAction, filmComedy, filmRomance });
})

router.post("/details", async (req, res) => {
    const search = req.body.getSearch;
    const similarSearch = req.body.film_id;
    var getFilmDetails = await getAllMovies(`search/movie?api_key=${API_KEY}&language=pt-BR&query=${search}`);
    const filmConsulterSimilar  = await getAllMovies(`movie/${similarSearch}?api_key=${API_KEY}&language=pt-BR`);
    const filmVideos = await getAllMovies(`movie/${similarSearch}/videos?api_key=${API_KEY}&language=pt-BR`);

    return res.render("search.html", { getFilmDetails, search, filmConsulterSimilar, filmVideos });
})

router.get("/getId", async (req, res) => {

    const queery = req.query;
    var filmConsulter = await getAllMovies(`movie/${queery.film_id}?api_key=${API_KEY}&language=pt-BR`);
    const filmConsulterSimilar = await getAllMovies(`movie/${queery.film_id}/similar?api_key=${API_KEY}&language=pt-BR`);
    const filmVideos = await getAllMovies(`movie/${queery.film_id}/videos?api_key=${API_KEY}&language=pt-BR`);

    if (filmConsulter.success === false) {
        filmConsulter = await getAllMovies(`tv/${queery.film_id}?api_key=${API_KEY}&language=pt-BR`);
        console.log('serie = true')
    }else{
        console.log('film = true');
    }


    return res.render("details.html", { filmConsulter, filmConsulterSimilar, filmVideos });
});

module.exports = router;


