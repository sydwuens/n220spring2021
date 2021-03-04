var myRect = {
    x: 20,
    y: 30,
    w: 50,
    h: 20,
    color: [250, 201, 25],
    update: function(){
      fill(this.color);
      this.x += 3;
      rect(this.x, this.y, this.w, this.h);
    }
  }
  
  function setup(){
    createCanvas(500,300);
  }
  
  function draw(){
  
    myRect.update();
  }