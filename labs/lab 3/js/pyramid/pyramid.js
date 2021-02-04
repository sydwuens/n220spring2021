let no_of_rows = 3;

function setup() {
    createCanvas(400, 300);
    background(232, 53, 83);
    fill(50, 107, 168);
  
    for (let row = 0; row <= no_of_rows; row++) {
      
      for (let column = 0; column <= row ; column ++) {
         square(column * 50, row * 50, 50);
         stroke(84, 245, 15)
      }
}

}