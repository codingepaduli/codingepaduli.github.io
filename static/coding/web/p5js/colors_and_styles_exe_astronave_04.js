let canvas;
function setup() {
  canvas = createCanvas(200, 200);
  canvas.parent('astronave');
}

function draw() {
    background(255, 255, 255);
    
    // corridoio principale
    fill(255, 0, 0);
    rect(50, 75, 100, 50);
  
    // ali posteriori gialle
    fill(255, 255, 0);
    triangle(50, 75, 50, 30, 90, 75);
    triangle(50, 125, 50, 170, 90, 125);
  
    // motori posteriori
    fill(255, 0, 255);
    rect(40, 80, 10, 10);
    rect(40, 110, 10, 10);
  
    // muso frontale
    fill(255, 90, 45);
    triangle(150, 125, 150, 75, 190, 100);
  
    // ali frontali grigie
    fill(65, 90, 105);
    triangle(140, 125, 100, 165, 100, 125);
    triangle(100, 75, 140, 75, 100, 30);
  
    // cannoni sulle ali
    fill(65, 90, 45);
    rect(100, 125, 40, 10);
    rect(100, 65, 40, 10);
    
    // oblo
    fill(0, 0, 255);
    circle(130, 100, 30);
    
    // proiettili rossi
    fill(255, 60, 20);
    circle(150, 70, 10);
    circle(150, 130, 10);
  
    // proiettili arancioni
    fill(255, 150, 60);
    circle(170, 70, 10);
    circle(170, 130, 10);
    
    // proiettili rosa
    fill(255, 190, 190);
    circle(190, 70, 10);
    circle(190, 130, 10);
    
    // linea di simmetria
    line(0, 100, 200, 100);

    saveCanvas(canvas, 'colors_and_styles_exe_astronave_04', 'png');
    noLoop();
}