// requires p5Utils.js

function setup() {
    var canvas = createCanvas(600, 600);
    canvas.parent('axes');
}

function draw() {
    var X = width/2;
    var Y = height/2;
    var step=100;
    
    strokeWeight(3); 
    
    background(200);
    drawAxes(X, Y);
    drawGrid(X, Y, step);
    
    drawGridPoints(X, Y, step);
    
    arrow(100, 100, 0, 0);
    arrow(100, 100, 25, 0);
    arrow(100, 100, 100, 0);
    arrow(100, 100, 165, 0);
    arrow(100, 100, 200, 0);
    
    arrow(100, 100, 0, 25);
    arrow(100, 100, 200, 25);
    
    arrow(100, 100, 200, 65);
    
    arrow(100, 100, 0, 100);
    arrow(100, 100, 200, 100);
    
    
    arrow(100, 100, 0, 165);
    arrow(100, 100, 200, 165);
    
    arrow(100, 100, 0, 200);
    arrow(100, 100, 25, 200);
    arrow(100, 100, 100, 200);
    arrow(100, 100, 165, 200);
    arrow(100, 100, 200, 200);

}
