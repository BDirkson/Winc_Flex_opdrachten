//DEEL 1 - OBJECT - persoon met naam en leeftijd
/*
let person = {
  name: "Bart",
  age: 43
};

// dot notation: console.log (person.age);
// bracket notation:
console.log (person["name"]);

let evaluations = [7, 10, 9];
console.log (evaluations);
// alle cijfers zie je terug in node scherm

//DEEL 2 - ARRAY - kleurenlijst
let kiesKleur = ["groen", "blauw", "rood" ];
// laatste item kiezen van array dmv .slice(-1)[0]
// console.log (kiesKleur.slice(-1)[0]);

kiesKleur [3] = "geel"; 
//of via push methode
kiesKleur.push(5);

//OBJECT 
let object = {greeting: "hi ik ben een object"};

// OBJECT aan ARRAY toevoegen

kiesKleur.push(object);
//console.log (kiesKleur);
console.log (kiesKleur.slice(-1)[0]);
*/
//DEEL3 - Bekijk een "real-life" object

const catBreeds = [{
  name: "Abyssinian",
  description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
  dog_friendly: 4,
  energy_level: 5,
  life_span: "14 - 15",
  origin: "Egypt",
  temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
  wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
  food: {
    favourite_food: "fish",
    medium_liked_food: "dried fruits", 
    disliked_food: "walnuts"
   }
},
      {
  name: "Aegean",
  description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
  dog_friendly: 4,
  energy_level: 53,
  life_span: "9- 12",
  origin: "Greece",
  temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
  wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
  food: {
    favourite_food: "tuna",
    medium_liked_food: "canned food", 
    disliked_food: "all fruits"
   }
},
      {
  name: "American Bobtail",
  description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
  dog_friendly: 5,
  energy_level: 3,
  life_span: "11 - 15",
  origin: "United States",
  temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
  wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
  food: {
    favourite_food: "meaty things",
    medium_liked_food: "tuna", 
    disliked_food: "canned food"
   }
}
]
// log naam laatste kattenras
