//Opdracht : Fun met Api

// 1 - Lijst met Pokemons

const apiLink = "https://pokeapi.co/api/v2/pokemon/";

async function getData() {
    try {
    const res = await fetch(apiLink, {
        method: "GET"
    });
    const dataPoke = await res.json ();
        console.log(dataPoke);
        return dataPoke;
    }   catch (err) {
        console.log (err + ' fout')
    }
}
getData();

//2 Favo Pokemon

async function getFavo() {
    try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/9/", {
        method: "GET"
    });
    const dataPoke = await res.json ();
        console.log(dataPoke);
        return dataPoke;
    }   catch (err) {
        console.log (err + ' fout')
    }
}
getFavo();



