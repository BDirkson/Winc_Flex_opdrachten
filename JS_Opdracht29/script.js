// de eerste stap: bezoeker om naam vragen
//let name = prompt("Welkom, wat is je naam?", "");

let name = prompt('Wat is je naam?', "");

alert(`Hey ${name}!`);

const x = Math.floor(Math.random() * 25) + 1;
const numRand = Math.ceil(Math.random()*1);
let turns = 5;
let hint = 'Voer een nummer in van 0 tot 25 om te beginnen met raden...';

while (turns > 0) {
  let guess = prompt(hint +
      ' Je hebt nog ' + turns + ' pogingen over');
  if (!guess) break;
  guess = Number(guess);
  if (guess == x) {
    alert ('Yes gewonnnen!');
    turns = 0;
  } else {
    hint = 'Helaas niet correct...';
    turns = turns - 1;
  }
}
alert(`Dag ${name} het spel is klaar!`);
