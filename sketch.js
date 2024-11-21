function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
    background(0);
    fill(10, 200, 50);
    noStroke();
    cylinder(10, 200);
    translate(100, 100, 100)
    fill(255, 0, 0);
    sphere(40, 40);
}
