let colors = ["#f0e2d0","#ff9292","#91684a"];

function setup() {
   createCanvas(400,300);


for( var i = 0; i < colors.length; i++){
   fill (colors [i]);
   rect(30, 20 *i, 200, 20);
}
}