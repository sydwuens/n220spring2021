let xPos = 0;
let yPos = 300;


let xSpeed = 5;
let ySpeed = 0;

function setup() {
    createCanvas(800, 600,);
}

function draw() {
    background(300, 227, 80)
    
    xPos = xPos +  xSpeed ;
    yPos = yPos + ySpeed ;

    if (xPos > 800) {
        xPos = 0;
    }

    fill(66, 176, 245)
    stroke(0,0)
    circle(xPos, yPos, 30);
}