var dvSquare = document.getElementById("square");

var width = 100;
var height = 100;

dvSquare.style.backgroundColor = "#57f542";
dvSquare.style.width = "100px";
dvSquare.style.height = "100px";

function incSize() {
    width = width * 1.1;
    height = height * 1.1;
    dvSquare.style.height = height + "10px";
    dvSquare.style.width = width + "10px";
}

/* var height = 10;

var width = 10;
var dvSquare = document.getElementById("square");

dvSquare.style.backgroundColor = "#57f542";
dvSquare.style.width = "100px";
dvSquare.style.height = "100px";

function incSize (){

    dvSquare.style.height = height + "11px";

    dvSquare.style.width = width + "11px";
} */