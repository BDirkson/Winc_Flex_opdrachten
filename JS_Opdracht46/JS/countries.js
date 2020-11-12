// Werken met grote arrays en objecten

// Overall standaard functies om lijst bij elke button te 'legen'
const emptyList = () =>
  (document.querySelector(".results").innerHTML = "");

document.querySelectorAll("div input").forEach(input =>
  input.addEventListener("click", () => {
    emptyList();
  })
);

// 1 - Subopdracht - lijst met landen na klik op landen-button

// nieuwe array  met alleen landen
const filteredCountries = randomPersonData.map((item) => {
  return item.region
});
const newList = filteredCountries.sort();
const getListCountries =[...new Set(newList)]; 

// element in DOM toevoegen
const countryButton = document.querySelector(".country-button");

countryButton.addEventListener("click", ()=>{
  getListCountries.forEach(item => {
    const li = document.createElement('li');
    document.querySelector(".results").appendChild(li);
    li.innerHTML = item; })
});


// 2 - Subopdracht: meeste mensen - 3 punten

// create a counter object on array

let countCountry = filteredCountries.reduce(
  (countCountry, key) => {
    countCountry[key] = 1 + countCountry[key] || 1;
    return countCountry
  }, {});

let sorted_countCountry = Object.entries(countCountry).sort((a, b) => b[1] - a[1]);

// toevoegen aan .results
const mostPeopleButton = document.querySelector(".mostpeople-button");

mostPeopleButton.addEventListener("click", ()=>{
  sorted_countCountry.forEach(item => {
    const li = document.createElement('li');
    document.querySelector(".results").appendChild(li);
    li.innerHTML = item; })
});


