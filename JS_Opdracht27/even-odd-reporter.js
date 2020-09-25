// even-odd-reporter.js
//Schrijf een loop die "iterate" van 0 tot 20. 
//Voor elke loop, check of het huidige nummer even is of oneven (odd).

let number = 19;

for (i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
      console.log(i + ' is even');
  } else {
      console.log(i + ' is oneven');
  }
}


