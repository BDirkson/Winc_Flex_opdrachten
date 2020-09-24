//Opdracht: JavaScript Functies (Conceptueel)
// Deel A Schrijf je eerste functie
// recept voor broodje kaas
// 2 sneetjes brood
// stop daar plakje kaas tussen

function receptBroodje (vulling) {
  console.log ("pak 2 sneetjes brood en stop daar"  + vulling + " " + "tussen.");
}
receptBroodje ("kaas");

//Deel B: Schrijf een functie met een argument
function makeSandwich (topping) {
  console.log ("There you go, a sandwich with" + " " + topping);
}
makeSandwich ("cheese");
/*deze functie is een performing functie, het voert wat uit. De 'log' is een functie die een andere functie 
 'makeSandwich' aan roept. 'Cheese' is het argument om aan te roepen, 'topping' de paramneter. */

makeSandwich ("hagelslag");

//Deel C: gebruik een return statement

function calculateDiscountedPrice (totalAmount , discount) {
  return  totalAmount - discount;
}
console.log(calculateDiscountedPrice (9, 3));

//Deel D: gebruik meerdere return statements
let totalAmountNew = 20;

if (totalAmountNew > 25) {
    console.log ("Je komt voor korting in aanmerking" + " " + calculateDiscountedPriceNew (27, 3));
}   else {("Je rekening:" + totalAmountNew)
}

function calculateDiscountedPriceNew (totalAmountNew , discount) {
  return  totalAmountNew - discount;
}







// Types of functions: er diverse zoals bovenstaand 'performing' (ze voeren wat uit) of onderstaand 'calculating'
// de naam van voorbeeld is even square. De parameter is 'number'. 'Return' keyword gebruik je voor som omdat het steeds
// aangeroepen moetn kunnen worden. Roep de square functie aan door de square een waarde te geven
// let number = square (2) en dan console.log (number) bijv... Maar dat kan dus korter door het gelijk in de log te zetten.
// in dit voorbeeld zitten 2 functie - de log is een functie en die roept nog een andere functie 'square' aan. Je kunt een 
// argument aanroepen console.log ('hello') of een expressie die doorlinkt naar nog een functie dus... of te wel
// Functions zijn: set of statements that (1) performs a task OR (2) returns a value.





