// Deel1: Fortune Teller

const fortuneTeller = function(jobTitle, GeographicLocation, partnersName, numberOfChildren ) {
  console.log("You will be a " + jobTitle + " in " + GeographicLocation 
  + " and married to " + partnersName + " with " + numberOfChildren + " kid(s) ")
};

fortuneTeller ("Developer", "Alkmaar", "Esther", 1); 
fortuneTeller ("Football player", "Barcelona", "Esther", 4); 
fortuneTeller ("Tosti bakker", "Amsterdam", "Esther", 9); 

/* of
const tellFortune = function(jobTitle, geoLocation, partner, numKids) {
  let future =
    "You will be a " +
    jobTitle +
    " in " +
    geoLocation +
    " and married to " +
    partner +
    " " +
    " with " +
    numKids +
    " kids.";
  console.log(future);
};

tellFortune("bball player", "spain", "Shaq", 3);
tellFortune("stunt double", "Japan", "Ryan Gosling", 3000);
tellFortune("Elvis impersonator", "Russia", "The Oatmeal", 0);
*/
