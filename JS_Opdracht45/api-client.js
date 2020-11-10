//Opdracht : Async/Await

// API-sleutel (v3 auth)
// e8b51a64b4ff0116ab370b1c20371ee2

// Voorbeeld API-aanvraag
// https://api.themoviedb.org/3/movie/550?api_key=e8b51a64b4ff0116ab370b1c20371ee2

// API-leestoegangstoken (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGI1MWE2NGI0ZmYwMTE2YWIzNzBiMWMyMDM3MWVlMiIsInN1YiI6IjVmYTE3ZTJiMGMxMjU1MDAzOTI3NDNmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EXaCP0vU9lf3kV-HSkRPiRHCQrDgZbyS1P9k-xKMHts

// string interpolation gebruiken om API key en apiUrl samen te voegen - API_KEY toevoegen ?api_key=

// DEEL1

// 1 - Genres
const API_KEY = "e8b51a64b4ff0116ab370b1c20371ee2";
const apiUrl = "https://api.themoviedb.org/3/genre/movie/list";

const apiLink = (`${apiUrl}?api_key=${API_KEY}`);

async function getData() {
    try {
    const res = await fetch(apiLink, {
        method: "GET"
    });
    const dataMovie = await res.json ();
        console.log(dataMovie);
        return dataMovie;
    }   catch (err) {
        console.log (err + ' fout')
    }
}

// 2 - Topmovie
const apiTopMovie  = (`https://api.themoviedb.org/3/find/tt0118715?api_key=${API_KEY}&language=en-US&external_source=imdb_id`);
async function getTopMovie() {
    try {
    const resTopMovie = await fetch(apiTopMovie, {
        method: "GET"
    });
    const dataTopMovie = await resTopMovie.json ();
        console.log(dataTopMovie);
        return dataTopMovie;
    }   catch (error) {
        console.log (error + ' fout')
    }
}

// 3 Top 10 movies
/*
const apiTopRated = (`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);

async function getTopRated() {
    try {
    const resTopRated = await fetch(apiTopRated, {
        method: "GET"
    });
    const dataTopRated = await resTopRated.json ();
        console.log(dataTopRated);
        return dataTopRated; // deze mischien mee
    }   catch (error) {
        console.log (error + ' fout')
    }
}  */
/*
// 4 top Action movies
const apiTopAction = (`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_genres=28`);

async function getTopRated() {
    try {
    const resTopRated = await fetch(apiTopAction, {
        method: "GET"
    });
    const dataTopRated = await resTopRated.json ();
        console.log(dataTopRated);
        return dataTopRated; // deze mischien mee
    }   catch (error) {
        console.log (error + ' fout')
    }
} */

// 5 Top 1975 movies
const apiTopOld = 'https://api.themoviedb.org/3/discover/movie?api_key=e8b51a64b4ff0116ab370b1c20371ee2&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_year=1975';

async function getTopRated() {
    try {
    const resTopRated = await fetch(apiTopOld, {
        method: "GET"
    });
    const dataTopRated = await resTopRated.json ();
        console.log(dataTopRated);
        return dataTopRated; 
    }   catch (error) {
        console.log (error + ' fout')
    }
}






