function setup() {
    createCanvas(2000, 500);
    background(245, 214, 130);
    var y= 250;


    for (let i = 1; i < 25; i++) {
        let x = i*50; 

        if (i % 3 == 0 && i % 5 == 0) {
            fill(130, 200, 250);
            square(x, y, 50);
        }

        else if (i % 3 == 0) {
            fill(203, 129, 252);
            ellipse(x+25, y+25, 50, 50);
        }
        else if (i % 5 == 0) {
            fill(125, 245, 135);
            square(x, y, 50);
        }
        else {
            fill(0);
            ellipse(x+25, y+25, 50, 50);
        }
    }
}
