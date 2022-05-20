import {getCountries} from "./countries.js";

const countries = getCountries();

console.log(countries); 
window.addEventListener("DOMContentLoaded", setEvents);

function setEvents() {
  // let targetButton = document.querySelector("#test");
  // targetButton.addEventListener("click", buttonTapped );

  // attach event functions to elements



function buttonTapped(){
  console.log("button tapped")
}


function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
}