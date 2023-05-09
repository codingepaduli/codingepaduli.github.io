let canvas;
let clickX, clickY;

// Dichiaro ed inizializzo 
// la variabile contatore
let contatore = 0;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent('counter');
}

function draw() {
    background(220);

    textSize(20);
    text(clickX, 100, 30);
    text(clickY, 100, 50);
    text(contatore, 100, 70);
}

// gestisco il click del mouse
function mousePressed() {
    clickX = mouseX;
    clickY = mouseY;

    // ad ogni click, incremento il contatore
    contatore = contatore + 1;

    saveCanvas(canvas, 'variables_counter_click', 'png');
}