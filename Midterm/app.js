// draw 10 circles 
var circles = [
    { x: 130, y: 20, r: 10},
    { x: 100, y: 20, r: 10},
    { x: 100, y: 20, r: 10},
    { x: 100, y: 20, r: 10},
    { x: 100, y: 20, r: 10},
    { x: 100, y: 20, r: 10},
    { x: 100, y: 20, r: 10},
    { x: 100, y: 20, r: 10},
    { x: 100, y: 20, r: 10},
    { x: 100, y: 20, r: 10},
  
  ];
  
  // create canvas
  function setup(){
    createCanvas(400,300);
  }
  
  // animate circles down
  function draw(){
    for( var i = 0; i < circles.length; i++){
      let currentCircle = circles[i]
      circle(circles[i].x, circles[i].y, circles[i].r);
      currentCircle.y += 2;
    }
  }