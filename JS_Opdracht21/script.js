console.log("De Kroeg") 

//de min. leeftijd moet 18 zijn om binnen te kunnen 
const age = 34;

if (age < 18){
    document.write("Sorry je bent te jong voor deze kroeg");
}   else if (age > 18) {
    document.write("Welkom en geniet van een drankje");
}   else if (age == 18) {
    document.write("Welkom en geniet van een drankje");
}
//gekozen voor let want const werkte niet bij isFemale
let isFemale = false;

if (isFemale = true){
    document.write('Van harte welkom op Ladiesnight!');
} else if (isFemales = false){
    document.write('Helaas alleen toeganklijk voor ladies...');
}

let bob = false;

if (bob = true){
    document.write('Jij bent de verantwoordelijk die mag rijden!');
} else if (bob = false){
    document.write('Laat het rijden aan de BOB over of neem een taxi...');
}

