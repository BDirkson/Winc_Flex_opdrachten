// Voor elke van de onderstaande opdrachten mag je alleen gebruik maken van .map, .filter of .reduce

const superHereos = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ]

// superHereos.forEach ((item) => { 
//        console.log (item)
//   });
//.map, .filter of .reduce
const superHeroesName = superHereos.map ((item) => {
    return item.name
});

console.log (superHeroesName);

//2 Maak een array van alle "lichte" superhelden (< 190 pounds)
const superHeroesLight = superHereos.filter((item) => {
    return item.weight < 190
}); 
console.log (superHeroesLight);

//3 Maak een array met de namen van de superhelden die 200 pounds wegen
    // Uitgebreid
const superHeroes200 = superHereos.filter((item) => {
        return item.weight == "200"
}).map ((item) => {
        return item.name
});

console.log (superHeroes200);

//4 Maak een array met first_appearance comics

const firstComic = superHereos.map ((item) => {
    return "In comic: " + item.first_appearance + " trad deze held voor het eerst op: " + item.name
});

console.log (firstComic);
      
//5 Maak een array met alle superhelden van DC Comics. Is dat gelukt? 
// Herhaal de bovenstaande functie dan en maak ook een array met alle superhelden van Marvel Comics.
const dcHeroes = superHereos.filter((item) => {
    return item.publisher === "DC Comics"
}).map ((item) => {
    return item.name
});
console.log (dcHeroes);

const marvelHeroes = superHereos.filter((item) => {
    return item.publisher === "Marvel Comics"
}).map ((item) => {
    return item.name
});
console.log (marvelHeroes);

//6 //7 gewicht optellen van superHeroes

 let sumWeightSuperheroes = superHereos.reduce((acc, li) => {
    return li.npublisher == "DC Comics" ? acc :acc + li.weight;
  }, 0);

console.log (sumWeightSuperheroes);

// geen idee hoe in de functie dan om te gaan met de getallen die string waardes zijn. Ik moet iets met method map doen...


