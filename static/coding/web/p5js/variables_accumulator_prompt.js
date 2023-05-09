let canvas;
let accumulatore;
let num1, num2, num3, num4;

function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent('accumulator');
    
    // inizializzo la variabile accumulatore
    accumulatore = 0;

    // ogni volta che l'utente inserisce un input
    // lo si converte in numerico decimale
    // e accumulato nella variabile accumulatore
    num1 = prompt("Inserisci un valore:");
    num1 = parseFloat(num1);
    accumulatore = accumulatore + num1;
    
    num2 = prompt("Inserisci un valore:");
    num2 = parseFloat(num2);
    accumulatore = accumulatore + num2;
    
    num3 = prompt("Inserisci un valore:");
    num3 = parseFloat(num3);
    accumulatore = accumulatore + num3;
    
    num4 = prompt("Inserisci un valore:");
    num4 = parseFloat(num4);
    accumulatore = accumulatore + num4;
}

function draw() {
    background(220);

    textSize(32);
    text(accumulatore, 10, 100);

    saveCanvas(canvas, 'variables_accumulator_prompt', 'png');
    noLoop();
}
