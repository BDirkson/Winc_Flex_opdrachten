console.log("De Kroeg") 

// Verander deze input om te zien of je code werkt.
// Comment bijvoorbeeld regel 8 tot 11 weer aan, en regel 3 tot 5 uit.
const age = 18;

// als je tussen 18 en 25 jaar bent dan krijg je korting
if (age >= 18 && age <=25 ) {
  console.log ("Je krijgt 50% korting!");
}      

// als je naam Abrahma(Bram) of Sarah is dan krijg je gratis biertjes
const name = "Piet";

if (name === "Bram" || name === "Sarah" ) {
  console.log ("50 jaar de kroeg! Je krijgt een gratis biertje!");
}    
// jubileum cadeaus die je krijgt bij x euro bestelling
const totalAmount = 101;

if (totalAmount > 25 && totalAmount <= 50 ) {
  console.log ("Bedankt voor je bestellingen: je krijgt een gratis portie (vega)bitterballen!");
} else if (totalAmount > 50 && totalAmount <= 100 ) {
  console.log ("Bedankt voor je bestellingen: je krijgt een gratis portie nachos!");
  } else if (totalAmount > 100 ) {
  console.log ("Bedankt voor je bestellingen: je krijgt een gratis fles champagne!");
  }