//Opdracht : Fun met api

//Overall
const emptyList = () =>
  (document.querySelector("#myPokemon").innerHTML = "");

document.querySelectorAll("div input").forEach(input =>
  input.addEventListener("click", () => {
    emptyList();
  })
);

window.alert("Learn more about Pokemons? Click buttons!");

// 1 - Lijst met Pokemons

async function doPokemon() {
    const resp = await getData();
    var h = document.createElement("H2"); 
    var t = document.createTextNode("Pokemon-list:"); 
    h.appendChild(t); 
    ul = document.createElement('ul');
    document.getElementById('myPokemon').appendChild(ul).appendChild(h);
    console.log(resp);
    resp.results.forEach((item) => {
        console.log(item);
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += "Pokemon name: " + item.name;  
    })};

const pokeButton = document.querySelector(".poke-button");
pokeButton.addEventListener("click", ()=>{
    doPokemon();
});

//2 Favo Pokemon

async function doFavo() {
    const resp = await getFavo();
    var h = document.createElement("H2"); 
    var t = document.createTextNode("Favorite Pokemon:"); 
    h.appendChild(t); 
    ul = document.createElement('ul');
    document.getElementById('myPokemon').appendChild(ul).appendChild(h);
    console.log(resp);
    resp.forms.forEach((item) => {
        console.log(item);
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += "Favo Pokemon: " + item.name; 
    })};

async function doPower() {
    const resp = await getFavo();
    ul = document.createElement('ul');
    var h = document.createElement("H3"); 
    var t = document.createTextNode("Abilities:"); 
    h.appendChild(t); 
    document.getElementById('myPokemon').appendChild(ul).appendChild(h);
    console.log(resp);
    resp.abilities.forEach((item) => {
        console.log(item);
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += item.ability.name; 
    })};

const favoButton = document.querySelector(".favo-button");
favoButton.addEventListener("click", ()=>{
        doFavo();
        doPower();
    });

   