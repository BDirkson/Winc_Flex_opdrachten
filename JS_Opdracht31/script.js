// Opdracht1
// Gebruik een click event en "attach" het click event aan de button
// Wanneer er op de button geklikt wordt, geef een alert: "button clicked" (net zoals je in de video hebt gezien)
// Event = alert gaat af an klikken button

const myButton = document.querySelector("#mybutton");

myButton.addEventListener('click', function() 
{ alert("Button Clicked!");}
);

// Opdracht2
// Body krijgt extra class toegevoegd en na klikken button wordt body rood
const body = document.querySelector('body')
const myButton2 = document.querySelector("#mybutton2");
/*
const changeColor = () => {
   body.classList.add ("red-background");
};

myButton2.addEventListener("click", changeColor);
*/
// Opdracht 3
// body achtergrond kleur togglen -> aan en uitzetten van de class style 'red-background'

const toggleColor = () => {
    body.classList.toggle ("red-background");
 };
 
 myButton2.addEventListener("click", toggleColor);
