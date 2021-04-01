for (var i=0; i<100; i++) {
    
    // make an element
    let squares = document.createElement('div');
    // customize the float, height and width
    squares.style.float = "left";
    squares.style.height = "20px";
    squares.style.width = "20px";

    squares.style.backgroundColor = randomColor();
   
//put elements on page
    document.body.appendChild(squares); 
}

//function for the random background colors
function randomColor() {
    var r = Math.round( Math.random() * 255);
    var g = Math.round( Math.random() * 255);
    var b = Math.round( Math.random() * 255);
    var colorRand = "rgb(" + r + "," + g + "," + b + ")";
    return colorRand;
}