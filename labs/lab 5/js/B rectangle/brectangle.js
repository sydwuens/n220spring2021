let circleX = 40;
let circleY = 80;

velX= 5;
velY= 5;

function setup(){
    createCanvas(400,300);
    background(150);
}

function draw(){
    background(150);
    fill(100);
    stroke(100);
    circleX = circleX + velX;
    circleY = circleY + velY;

   
for(var i = 0; i < 20; i++) {
  }

  circle(circleX, circleY ,20);
  circleY++;
  rect(150, 270, 100, 30);
  
}


function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

    var colliding = false;

    if(circleX > rectX && circleX > rectX + rectW) {
        
        if(circleY > rectY && circleY < rectY + rectH) {

              return true;

        }

   }

   return false;

}