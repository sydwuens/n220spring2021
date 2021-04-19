//links index and js
let myChangeOne = document.getElementById ("dvSquareOne");

let myChangeTwo = document.getElementById ("dvSquareTwo");

let myChangeThree = document.getElementById ("dvSquareThree");

colors = ["#ff0000", "#15ff00", "#0800ff"]

myChangeOne.addEventListener("click", sqClick);
myChangeTwo.addEventListener("click", sqClick);
myChangeThree.addEventListener("click", sqClick);

function sqClick(event){
  let colors = event.target.getAttribute("data-color");

  event.target.style.backgroundColor = colors;
}