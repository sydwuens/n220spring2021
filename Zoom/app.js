//application level variables

let txtGrassCount = document.getElementById("txtGrassCount");

let txtGrassCountTwo = document.getElementById("txtGrassCountTwo");

function setup() {
   createCanvas(400,300);
}

//interaction events
function drawGrass() {

//bg
   

   //input cleaning
   let grassCount = Number( txtGrassCount.value );

   for(let i = 0; i < grassCount; i++) {

      fill("#afe332");

      let heightOffset = Math.random() * 30;

      rect(i*10, 30+heightOffset,10,100-heightOffset);

   }

}

//interaction events
function drawGrassTwo() {

   //bg
      background(91, 252, 236, 100);
   
      //input cleaning
      let grassCountTwo = Number( txtGrassCountTwo.value );
   
      for(let i = 0; i < grassCountTwo; i++) {
   
      
         fill("#a332");
   
         let heightOffset = Math.random() * 30;
   
         rect(i*10, 150+heightOffset,10,100-heightOffset);
   
      }
   
   }
