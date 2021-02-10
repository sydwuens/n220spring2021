let x = [];
let y = [];

function setup() {
  createCanvas(400, 300);
	
	for (var i = 0; i < 20; i = i + 1) {
    x[i] = 200;
    y[i] = 0;
  }
}
  
function draw() {
  background(50);
  
  // draw drip
  // down 3 pixels each frame, but maybe should be accelerating?
	for (var i = 0; i < 100; i = i + 2) {
    circle(x[i], y[i], 20);
		y[i] = y[i] + random(0, 25);
		if (y[i] > height*2) {
			// reset
			y[i] = 0;
		}
  }
}