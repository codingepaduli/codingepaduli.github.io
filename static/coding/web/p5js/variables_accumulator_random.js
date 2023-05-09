let canvas;
let accumulatore;
let num1, num2, num3, num4;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent('accumulator');
    
    // inizializzo la variabile accumulatore
    accumulatore = 0;

    // ogni volta che viene generato un numero casuale
    // lo accumulo nella variabile accumulatore
    num1 = random(10, 20);
    accumulatore = accumulatore + num1;
    
    num2 = random(10, 20);
    accumulatore = accumulatore + num2;
    
    num3 = random(10, 20);
    accumulatore = accumulatore + num3;
    
    num4 = random(10, 20);
    accumulatore = accumulatore + num4;
}

function draw() {
    background(220);

    textSize(32);
    text("La somma è: " + accumulatore, 10, 100);

    saveCanvas(canvas, 'variables_accumulator_random', 'png');
    noLoop();
}
