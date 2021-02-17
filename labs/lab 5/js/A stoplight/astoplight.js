let colors = ["#32e64a", "#e8d635", "#eb3434",];


function setup(){
  createCanvas(400,300);
  background(150);


  for(var i = 0; i < colors.length; i++) {
      fill(colors[i]);
    circle( 200, 35 + 60 * i, 30);
  }
}


























//function setup(){
  //createCanvas(400,300);
  //background(100);
  //drawLight("#32e64a", "#eb3434", "#e8d635");
//}

//function drawLight(lightColors){

  //fill(lightColors);
  //stroke(lightColors);

  //for(var i = 0; i < 5; i++) {
    //circle(200, 50, 30);
  //}

//}


