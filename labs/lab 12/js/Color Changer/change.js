//links index and js
let myChangeOne = document.getElementById ("dvSquareOne");

let myChangeTwo = document.getElementById ("dvSquareTwo");

let myChangeThree = document.getElementById ("dvSquareThree");

// array for the colors
colors = ["#ff0000", "#15ff00", "#0800ff"]

// listen for the click 
myChangeOne.addEventListener("click", sqClick);
myChangeTwo.addEventListener("click", sqClick);
myChangeThree.addEventListener("click", sqClick);

// change color on the click
function sqClick(event){
  let colors = event.target.getAttribute("data-color");

  event.target.style.backgroundColor = colors;
}