let sunX = 40;

function setup(){
  createCanvas(400,300);
  background(100);
  drawSun("#f2e874" , 20, 40);
}

function draw(){
  background(100);
  sunX ++;
  drawSun("#77d7f7" , 30, mouseY - 10, mouseX - 10);

  drawSun("#f2e874" , 30, mouseY, mouseX);

}
function drawSun (sunColor, numRays, yHeight, xHeight){

  fill(sunColor);
  stroke(sunColor);

  for(var i = 0; i < numRays; i++) {
    line (xHeight, yHeight, i*20, 300);
  }

  circle(xHeight, yHeight,40);
}

//function definition
function sayHello() {
      console.log("Hello Inside");
  }
  
//run function? if you don't invoke it, the function will not run
sayHello ();

