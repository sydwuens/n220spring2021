//link to html
canvas = document.getElementById("dvCanvas");
currentColor = document.getElementById("dvCurrentColor");

//color variables
let red = 0;
let green = 0;
let blue = 0;

// increase the colors

function addColor(event){
    var getColor = event.target.getAttribute("data-color");
    var getValue = event.target.getAttribute("data-value");

    if(getColor == "red"){
        if(getValue == 1){
            red++;
        } else if(getValue == 5){
            red+= 5;
        } else if(getValue == 10){
            red+= 10;
        }
    }

    if(getColor == "green"){
        if(getValue == 1){
            green++;
        } else if(getValue == 5){
            green+= 5;
        } else if(getValue == 10){
            green+= 10;
        }
    }

    if(getColor == "blue"){
        if(getValue == 1){
            blue++;
        } else if(getValue == 5){
            blue+= 5;
        } else if(getValue == 10){
            blue+= 10;
        }
    }

    //update colors on the page
    finalColor = "rgb(" + red +", " + green +", " + blue +")"
    currentColor.innerHTML = "Current Color: " + finalColor;
    canvas.style.backgroundColor = finalColor;
}
