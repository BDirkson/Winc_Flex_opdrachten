//Opdracht : Async/Await

const API_KEY = "xxxxxx";
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








