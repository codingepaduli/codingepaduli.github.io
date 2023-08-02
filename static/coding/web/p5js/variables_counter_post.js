let canvas;
let contatore;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent('counter');
}

function draw() {
    background(220);

    // inizializzo la variabile contatore
    contatore = 0;

    // ogni volta che disegno un cerchio
    // incremento la variabile contatore
    circle(100, 150, 50);
    text(contatore, 100, 150);
    contatore = contatore + 1;

    circle(150, 150, 50);
    text(contatore, 150, 150);
    contatore = contatore + 1;

    circle(200, 150, 50);
    text(contatore, 200, 150);
    contatore = contatore + 1;

    circle(250, 150, 50);
    text(contatore, 250, 150);
    contatore = contatore + 1;

    saveCanvas(canvas, 'variables_counter_post', 'png');
    noLoop();
}
