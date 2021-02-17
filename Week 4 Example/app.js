let colors = ["#75cfb8", "#91091e", "#bbdfc8", "#f0e5d8"];

let positions = [0,0,0,0];

function setup() {
    createCanvas(400,300);

    
    }

    function draw(){
        console.log(positions);

        background(50, .9);

        positions.push(mouseX);
        positions.shift();

        for( var i = 0; i < positions.length; i++){
            circle (positions[i], 150, 20);

    }

}






//let carProducers = ["Subaru", "Honda", "Studebakers", "Chevy" ];

//console.log(carProducers.length);

//for( var i = 0; i < 4; i++){
  //  console.log( "I won a " + carProducers[i]);
//}