//Deel1: lifetime-supply-calculator.js

function calculateSupply(age, amountPerDay) {
  let maxAge = 100;
  let totalNeeded = (amountPerDay * 365) * (maxAge - age);
  console.log (message = 'You will need ' + totalNeeded + ' cookies to last you until the ripe old age of ' + maxAge);
}

calculateSupply(43, 1);
calculateSupply(43, 2);
calculateSupply(43, 3);

/* of
const calculateSupply = function(age, numPerDay) {
  const maxAge = 100;
  const totalNeeded = numPerDay * 365 * (maxAge - age);
  let message =
    "You will need " +
    totalNeeded +
    " cups of tea to last you until the ripe old age of " +
    maxAge;
  console.log(message);
};

calculateSupply(28, 36);
calculateSupply(28, 2.5);
*/