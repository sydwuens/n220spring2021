let positions = [10,10,10,10];

function setup() {
    createCanvas(400,300);

    
    }

    function draw(){
        console.log(positions);

        background(50);

        positions.push(mouseX);
        positions.shift();

        for( var i = 0; i < positions.length; i++){
            circle (positions[i], 150, 20);

    }

}