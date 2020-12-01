//Opdracht : Async/Await

// API-sleutel (v3 auth)
// xxxxxxx

// Voorbeeld API-aanvraag
// https://api.themoviedb.org/3/movie/550?api_key=e8b51a64b4ff0116ab370b1c20371ee2

// API-leestoegangstoken (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGI1MWE2NGI0ZmYwMTE2YWIzNzBiMWMyMDM3MWVlMiIsInN1YiI6IjVmYTE3ZTJiMGMxMjU1MDAzOTI3NDNmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EXaCP0vU9lf3kV-HSkRPiRHCQrDgZbyS1P9k-xKMHts

// string interpolation gebruiken om API key en apiUrl samen te voegen - API_KEY toevoegen ?api_key=

const API_KEY = "xxxxxxx";
const apiUrl = "https://api.themoviedb.org/3/genre/movie/list";

const apiLink = (`${apiUrl}?api_key=${API_KEY}`);
console.log (apiLink);

async function getData () {
    try {
    const res = await fetch (apiLink, {
        method: "GET"
    });
    const dataMovie = await res.json ();
        console.log (dataMovie);
    }   catch (err) {
        console.log (err + ' fout')
    }
}

getData();








