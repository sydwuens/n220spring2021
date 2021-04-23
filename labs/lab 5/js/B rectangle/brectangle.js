var bx = 100;
var by = 100;
var rectangle = [50];
let bvx = 2;
let bvy = 2;

function setup() {
 createCanvas(400,300);
}

//draw
function draw(){
  background(150);

// the ball
circle(bx,by,20);

// annimate the ball and its velocity direction
 bx += bvx;
 by += bvy;

// loop through the rectangles
for( let i = 0; i < rectangle.length; i++){
  
    // draw rectangle
  rect(rectangle[i], 200, 250, 15);

  //check if the ball is hitting it
  if(colideRect( bx, by, rectangle[i], 200, 250, 15)){
    //bounce ball off rectangle
    bvy *= -1;
  }
}
}
function colideRect (px, py, rx, ry, rw, rh) {
  if (px > rx && px < rx + rw) {
    if ( py > ry && py < ry + rh){
      return true;
    }
  }
 return false;
}