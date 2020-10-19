// 1
// De dieren array loggen in console 
// Dus eerste van de dieren ul een array maken. Eerst handel selectern met ALL want querySelectore pakt alleen eerste itme

const bigfiveButtons = document.querySelectorAll(".big-five-button");

bigfiveButtons.forEach(button => {button.addEventListener("click",()=>{
   console.log(button.innerText)
   const listUl = document.getElementById("spotted-animals-list");
   const listLi = document.createElement("li");
   const textNode = document.createTextNode(button.innerText);
   listLi.appendChild(textNode);
   listUl.appendChild(listLi);
})}); 

// 2 
//Maak een eventlistener vast aan de button //Maak een functie vast aan de eventlistener//In de functie: selecteer de eend (het element)
//selecteer ook de parent //gebruik parent.removeChild(child). //Alternatief: Verwijder het element met ChildNode.remove()  

const removeDuck = document.querySelector("#remove-first-item-button");

removeDuck.addEventListener("click",()=>{
   const parent = document.querySelector ("#spotted-animals-list");
   const child = parent.children[0];
   parent.removeChild (child);
});

//3 
// Opdracht: Wanneer ik als gebruiker op de "remove all spotted animals" knop klik worden alle dieren 
// die ik heb gespot verwijderd.

const removeAllBtn = document.querySelector("#remove-all-button");

removeAllBtn.addEventListener("click",()=>{
   const list = document.querySelector ("#spotted-animals-list");  
   while (list.hasChildNodes()) {  
      list.removeChild(list.firstChild);
}});





