// Deel2: movie-database.js
/*Create an object to store the following information about your favorite movie: 
title (a string), duration (a number), and stars (an array of strings).
Create a function to print out the movie information like so: 
"Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

let favMovie = {
  title: "Star Wars",
  duration: 120,
  stars: ["Actorone", "Actortwo", "Actorthree"]
};

// Or...
function dataMovie(favMovie) {
  console.log(favMovie.title + " lasts for " + favMovie.duration + " minutes.");
  console.log("It stars: " + favMovie.stars.join(', '));
}
dataMovie(favMovie);

// Door movie.stars.join(', ') te gebruiken kun je dus een spatie krijgen in de array opsomming.


