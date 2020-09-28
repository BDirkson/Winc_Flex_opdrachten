 // for Each 'Array method'

let colors = ["yellow", "blue", "red", "orange"]

colors.forEach(element => console.log(element));

//Hoeveel regels neemt mijn for loop en mijn while loop in beslag? Ik zie geen verschil maar waarschijnlijk omdat ik 
// de while niet goed heb gedaan. For begrijp ik wel.

// Hoeveel regels neemt mijn forEach method in beslag? Net zo veel als while en for. 

// Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? 
// elke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom?
// Het is minder foutgevoelig. Ik vind zelf de for makkelijker leesbaar omdat ik de opzet gegrijp. De for each begrijp
// qua opzet niet zo maar zie wel dat het eenvoudige opzet is qua code t.o.v. de for manier.

// Looping through the properties of an object.
let person = {
    name: "Sjaak",
    age: "30",
    gender: "man",
    city: "Amsterdam",
    hobbies: ["football","pingpong"]
}

const entries = Object.entries(person)
console.log(entries)
//Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren? 
// Ik denk van niet en dat diet stukjes code een eenmalige opsomming is..
