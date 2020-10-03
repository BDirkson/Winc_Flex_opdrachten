// variabel to check if nav is open or close (closed = false)
let toggleNavStatus = false;

// functie om nav te openen - widht moet groter worden + visible
let toggleNav = function () {
   let getSidebar = document.querySelector (".nav-sidebar");
   let getSidebarUL = document.querySelector (".nav-sidebar ul");
   let getSidebarLinks = document.querySelectorAll (".nav-sidebar a");

   if (toggleNavStatus === false) {
      getSidebarUL.style.visibility = "visible";
      getSidebarUL.style.width = "260px";

      let arrayLength = getSidebarLinks.length;
      for (let index = 0; index < arrayLength; index++) 
      toggleNavStatus = true;
   }
   else if (toggleNavStatus === true) {
      getSidebarUL.style.width = "10px";

      let arrayLength = getSidebarLinks.length;
      for (let index = 0; index < arrayLength; index++) 
      getSidebarUL.style.visibility = "hidden";
      toggleNavStatus = false;
   }
}

const btnHover = document.querySelector ("btn-toggle-nav");
const body = document.querySelector("body");
const bodyRedBtn = document.querySelector(".nav-sidebar_red");
const bodyOrangeBtn = document.querySelector(".nav-sidebar_orange");
const bodyPurpleBtn = document.querySelector(".nav-sidebar_purple");
const bodyGreenBtn= document.querySelector(".nav-sidebar_green");
const bodyHomeBtn= document.querySelector(".nav-sidebar_home");
const colorP=document.querySelector(".colorP");

const backgroundColorRed = () => {
   body.style.background = ("red");
};
bodyRedBtn.addEventListener("click", backgroundColorRed);
bodyRedBtn.addEventListener("click", toggleNav);
bodyRedBtn.addEventListener("click", addTextRed);

const backgroundolorOrange = () => {
   body.style.background = ("orange");
};
bodyOrangeBtn.addEventListener("click", backgroundolorOrange);
bodyOrangeBtn.addEventListener("click", toggleNav);
bodyOrangeBtn.addEventListener("click", addTextOrange);

const backgroundColorPurple = () => {
   body.style.background = ("purple");
};
bodyPurpleBtn.addEventListener("click", backgroundColorPurple);
bodyPurpleBtn.addEventListener("click", toggleNav);
bodyPurpleBtn.addEventListener("click", addTextPurple);

const backgroundColorGreen = () => {
   body.style.background = ("green");
};
bodyGreenBtn.addEventListener("click", backgroundColorGreen);
bodyGreenBtn.addEventListener("click", toggleNav);
bodyGreenBtn.addEventListener("click", addTextGreen);

const backgroundColorHome = () => {
   body.style.background = ("lightgrey");
};
bodyHomeBtn.addEventListener("click", backgroundColorHome);
bodyHomeBtn.addEventListener("click", toggleNav);
bodyHomeBtn.addEventListener("click", addTextHome);

function addTextRed (){
   colorP.textContent= 'Red!'      
 };  
function addTextOrange (){
   colorP.textContent= 'Orange!'      
 };  
function addTextPurple (){
   colorP.textContent= 'Purple!'      
 };  
function addTextGreen (){
  colorP.textContent= 'Green!'      
}; 
function addTextHome (){
   colorP.textContent= ' '      
 }; 

