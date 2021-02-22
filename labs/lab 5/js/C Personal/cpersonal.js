let circleX = 20;

//sets up canvas
function setup(){
  createCanvas(400,400);
  background(50);
  drawSun("#e97878" , 2, 20);
}

function draw(){
  background(50);
  circleX ++;

  drawSun("#e97878" , 2, mouseX, mouseY);

  //makes circles go in opposite directions
  drawSun("#e69e9e" , 2, mouseY, mouseX);

}

function drawSun (sunColor, numRays, yHeight, xHeight){

  fill(sunColor);
  stroke(sunColor);

  for(var i = 0; i < numRays; i++) {
    line (xHeight, yHeight, i*20, 400);
  }

  circle(xHeight, yHeight,40);
}