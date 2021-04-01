let dvSquare = document.getElementById("square");

//style square
dvSquare.style.height = "100px";
dvSquare.style.width = "100px";
dvSquare.style.backgroundColor = "#34a4eb";

//add user input interactivity
//Change to black when mouse is over
function blackColor() {
    var square = document.getElementById("blackSquare");
    dvSquare.style.backgroundColor = "#000408";
  }

//return to blue when mouse leaves
function blueColor() {
    var square = document.getElementById("blueColor");
    dvSquare.style.backgroundColor = "#3495eb";
  }
  