var myCircle = {
    r: 10,
    x: 200,
    y: 150,
    color: [56, 217, 217],
    update: function(){
      fill(this.color);
      circle( this.x, this.y, this.r);
    }
  }
  
  function setup(){
    createCanvas(400,300);
  }
  
  function draw(){
    myCircle.update();
    if (mouseIsPressed) {
        myCircle.x += 2;
      }

    if (keyIsDown(LEFT_ARROW)) {
        myCircle.x -= 2;
      }

      if (keyIsDown(UP_ARROW)) {
        myCircle.y -= 2;
      }

      if (keyIsDown(DOWN_ARROW)) {
        myCircle.y += 2;
      }

  }