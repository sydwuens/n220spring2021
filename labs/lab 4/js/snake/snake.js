let positions = [10,10,10,10,10,10,10,10,10,10];
let positionsY = [10,10,10,10,10,10,10,10,10,10];

function setup() {
    createCanvas(400,300);

    
    }

    function draw(){
        console.log(positions);

        background(50);

        positions.push(mouseX);
        positions.shift();

        positionsY.push(mouseY);
        positionsY.shift();

        
        for( var i = 0; i < positions.length; i++){
            circle (positions[i], positionsY[i], 20);

    }

}