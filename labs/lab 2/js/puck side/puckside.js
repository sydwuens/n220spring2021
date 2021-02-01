function setup() {
    createCanvas(400, 300);
  }

  function draw() {
    background(0);
    if (mouseX < 200) {
      fill (50, 158, 252);  // Right
    }
    if (mouseX > 200) {
        fill (252, 53, 50);  // Left
      }

      circle(mouseX, mouseY, 30);
  }