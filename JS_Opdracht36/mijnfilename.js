//A resultaat cool toegevoegd in array
const addTheWordCool = ['nice', 'awesome', 'tof'];

const addCool = addTheWordCool.push ('cool');
console.log(addTheWordCool);

//B resultaat 3
const amountOfElementsInArray = ['appels', 'peren', 'citroenen']; 
console.log(amountOfElementsInArray.length);

//C resultaat Belgie
const selectBelgiumFromBenelux = ["Belgie", "Nederland", "Luxemburg"];
const findBelgium = selectBelgiumFromBenelux.find (element => element [0]);
console.log (findBelgium);

//D resultaat: "Schildpad"
const lastElementInArray = ["Haas", "Cavia", "Kip", "Schildpad"]
console.log(lastElementInArray.slice(-1)[0]); 

//E // method Slice result = Trump uit array -> 1 element weggesneden uit de array
    // method Splice result = Trump uit de array -> op index 0 is 1 element vervangen door niks. Array  muteert denk ik omdat
    // een heel nieuwe rij onstaat om element Trump in iets anders is gechanged

const impeachTrumpSlice = ["Trump", "Obama", "Bush", "Clinton"]; 
console.log(impeachTrumpSlice.slice(1));

const impeachTrumpSplice = ["Trump", "Obama", "Bush", "Clinton"]; 
impeachTrumpSplice.splice (0,1);
console.log(impeachTrumpSplice);

// F resultaat: "Winc Academy is leuk ;-}"
stringsTogether = ['Winc', 'Academy', 'is', 'leuk', ';-}'];
console.log(stringsTogether.join(' '));

// G resultaat: [1,2,3,4,5,6]
const array1 = [1,2,3];
const array2 = [4,5,6];
const combineArrays = array1.concat(array2);
console.log (combineArrays);
