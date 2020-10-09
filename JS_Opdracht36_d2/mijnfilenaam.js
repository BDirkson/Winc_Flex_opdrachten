//A Zoek het hele object van Spiderman, gebaseerd op de name "Spiderman". Gebruik .find.

const superHeroes =    [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}];

const findSpiderMan = superHeroes.find(element => element.name === "Spiderman");
    
console.log(findSpiderMan);

//B Gebruik forEach - result should be [2, 4, 6]

const doubleArrayValues = [1, 2, 3]; 

doubleArrayValues.forEach (element => console.log (element * 2));

//C Check for er een waarde is >10 
//let numbers = [1, 4, 3, 6, 9, 7, 11]; // result should be true
const numbers = [1,2,1,2,1,2]; // result should be true

console.log(containsNumberBiggerThan10 = numbers.every(element => element > 10));

//D Is string "Italy" in de array aanwezig? Result true
const isItalyInTheGreat7 = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];

console.log (isItalyInTheGreat7.includes("Italy"));

//E  gebruik forEach - waarde * 10
const tenfold = [1, 4, 3, 6, 9, 7, 11];

tenfold.forEach (element => console.log (element * 10));

//F Check of alle waardes in de array < 100 zijn - result should be false

let number100 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ];

console.log(containsNumberBiggerThan10 = number100.every(element => element < 100));

//G BONUS waardes array optellen bij elkaar & en retun de totale some. Gebruik .reduce method - result should be 1118

// const bigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];

const bigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(bigSum.reduce(reducer));


