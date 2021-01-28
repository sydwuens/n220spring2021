let xPos = 0;
let yPos = 40;

let xSpeed = 1;
let ySpeed = 1;

function setup() {
    createCanvas(400, 300,);
}

function draw() {
    background(0)
    xPos = xPos +  xSpeed ;
    yPos = yPos + ySpeed ;

    

    fill( 219,77,200 );
 
    if(keyIsDown(LEFT_ARROW)) {
        xSpeed = -1;
    } 
    
    if(keyIsDown(RIGHT_ARROW)) {
        xSpeed = 1;
    } 
    
    if(keyIsDown(UP_ARROW)) {
        ySpeed = -1;
    } 
    
    if(keyIsDown(DOWN_ARROW)) {
        ySpeed = 1;
    } 
    
    else {
        fill(3, 252, 44)
    }


    circle(xPos, yPos, 30);
}

//fill(242, 224, 22);
//fill(3, 252, 44)