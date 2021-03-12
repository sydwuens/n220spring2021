var bx = 100;
var by = 100;
var rectangles = [50,100,150,200,250,300,350,400];
let bvx = 2;
let bvy = 2;


function setup() {
 createCanvas(600,400);

}

//on draw... 
function draw(){

  background(200,0,150);





// draw a ball
circle(bx,by,20);

// annimate the ball and its velocity direction
 bx += bvx;
 by += bvy;

 // bounce ball off corners
if (bx > 600){
  bx = 600;
  bvx *= -1;
}

if (by < 0){
  by = 0;
  bvy *= -1;
}

if (by > 400){
  by = 400;
  bvy *= -1;
}

if (bx < 0){
  bx = 0;
  bvx *= -1;
}

// loop through the rectangles
for( let i = 0; i < rectangles.length; i++){
  // draw them

 
  rect(rectangles[i], 50, 45, 15);
  console.log( by, 50);
  //check if the ball is hitting them
  if(hitTestPoint( bx, by, rectangles[i], 50, 45, 15)){
    //bounce ball
    bvy *= -1;

    //remove rectangle

    rectangles.splice(i, 1);
  }
}
}

function hitTestPoint (px, py, rx, ry, rw, rh) {
  if (px > rx && px < rx + rw) {
    if ( py > ry && py < ry + rh){
      return true;
    }
  }
 return false;
}