let xSole = 300;
let ySole = 200;
let diametroSole = 80;

let xTerra = 0;
let yTerra = 0;
let distanzaTerra = 100;
let diametroTerra = 25;
let angoloTerra = 0;

let xVenere = 0;
let yVenere = 0;
let distanzaVenere = 60;
let diametroVenere = 20;
let angoloVenere = 15;

let canvas;
function setup() {
   canvas = createCanvas(600, 400);
   angleMode(DEGREES);

   canvas.parent('sistema');
}

function draw() {
    background(0, 0,0);

    fill(255,255,0);
    circle(xSole, ySole, diametroSole);

    xTerra = xSole + distanzaTerra * cos(angoloTerra);
    yTerra = ySole + distanzaTerra * sin(angoloTerra);

    fill(0,0,255);
    circle(xTerra, yTerra, diametroTerra);

    angoloTerra = angoloTerra + 1;


    xVenere = xSole + distanzaVenere * cos(angoloVenere);
    yVenere = ySole + distanzaVenere * sin(angoloVenere);

    fill(0,255,45);
    circle(xVenere, yVenere, diametroVenere);

    angoloVenere = angoloVenere + 2;
}
