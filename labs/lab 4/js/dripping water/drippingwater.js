let x = [];
let y = [];

function setup() {
  createCanvas(400, 300);
	
	for (var i = 0; i < 1; i++) {
    x[i] = 200;
    y[i] = 0;
  }
}
  
function draw() {
  background(50);
  
	for (var i = 0; i < 100; i++) {
    circle(x[i], y[i], 20);
		y[i] = y[i] + random(0, 5);
		if (y[i] > height) {
			y[i] = 0;
		}
  }
}