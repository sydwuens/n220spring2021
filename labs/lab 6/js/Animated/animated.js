var myCircle = {
    r: 1,
    x: 0,
    y: 0,
    color: [232, 117, 240],
    update: function(){
      fill(this.color);
      this.r += 1;
      this.x += 1;
      this.y += 1;
      circle( this.x, this.y, this.r);
    }
  }
  
  function setup(){
    createCanvas(400,400);
  }
  
  function draw(){
  
    myCircle.update();
  }