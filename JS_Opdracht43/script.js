//Opdracht : Rest and spread Operator
// Functie 1 - simpele optelfunctie met meerder argumenten
const optellen = (x, y, z) => {
  return x + y + z;
}
console.log (optellen (2,3,5)); // verwachte uitkomst: 10

// Functie 1 - optelfunctie met umlimited optelargumenten

const optelRest = (...cijfers) => {
  return cijfers.reduce((acc,item) => {
          return acc + item;
  })
}
console.log(optelRest(1,2,3,4,5,6)); // verwachte uitkomst: 21


// Functie 2 - een optelfunctie met Spread

const optelSpread = (x, y, z,) => {
  return x + y + z;
}
// array met de cijfers om op te tellen
let getallen = [4,5,6];
// spread ... voor array om losse argumenten er van te maken
console.log (optelSpread(...getallen));

