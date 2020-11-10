//Opdracht : Async/Await

// DEEL1
// 1 - Genres
async function doJob() {
    const resp = await getData();
    ul = document.createElement('ul');
    document.getElementById('myMovieList').appendChild(ul);
    console.log(resp.genres);
    resp.genres.forEach((item, i) => {
        console.log(i, item);
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += "genre naam: " + item.name + ", id " + item.id;  
    })};

doJob();

// 2 - Topmovie

async function doTop() {
    const resp = await getTopMovie();
    ul = document.createElement('ul');
    document.getElementById('myTopMovie').appendChild(ul);
    console.log(resp.movie_results);
    resp.movie_results.forEach((item, i) => {
        console.log(i, item);
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += "Titel: " + item.original_title;  
    })};

doTop();

// 3 - 10 Topmovies
/*
async function doTopRated() {
    const resp = await getTopRated();
    ul = document.createElement('ul');
    document.getElementById('ratedTopMovie').appendChild(ul);
    const topTen = resp.results.splice(0, 10); //
    topTen.forEach((item, i) => {
        console.log(i, item);
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += "Titel: " + item.original_title;  
    })};

doTopRated();
*/

// 4 top Action movies
/*
async function doTopRated() {
    const resp = await getTopRated();
    ul = document.createElement('ul');
    document.getElementById('ratedTopMovie').appendChild(ul);
    const topTen = resp.results.splice(0, 10); //
    topTen.forEach((item, i) => {
        console.log(i, item);
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += "Titel: " + item.original_title;  
    })};

doTopRated();
*/

// 5 Top 1975 movies
async function doTopRated() {
    const resp = await getTopRated();
    ul = document.createElement('ul');
    document.getElementById('ratedTopMovie').appendChild(ul);
    const topTen = resp.results.splice(0, 10); 
    topTen.forEach((item, i) => {
        console.log(i, item);
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += "Titel: " + item.original_title;  
    })};

doTopRated();

