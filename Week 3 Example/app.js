function setup(){
    createCanvas(400,300);
    background(100);

    //noFill();

    //For loop syntax
for (var i = 15; i > 0; i--) {

    var randColor = Math.random() * 255;
    fill(randColor);

    stroke(200 - (i * 15));
    circle (200,150, i * 10);
}
}

function draw(){

console.log("Afterwards : " + y);
}
