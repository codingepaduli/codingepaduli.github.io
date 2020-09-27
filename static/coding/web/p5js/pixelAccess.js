
// https://editor.p5js.org/p5/sketches/Image:_Background_Image
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
// https://codepo8.github.io/canvas-images-and-pixels/

// E' necessario dare il permesso a Firefox di accedere ai dati del canvas,
// altrimenti tutti i pixel avranno colore rgb=(255, 255, 255);

let img;
let canvas;
let ctx;
let pixel;

function preload() {
    img = loadImage('https://live.staticflickr.com/2838/9541969423_9c513ed6a1_b.jpg');
}

function setup() {
    let canvasNode = document.querySelector('#pixelAccess');
    let cw = canvasNode.parentNode.clientWidth;
    let canvas = createCanvas(cw * 0.9, cw * 0.4).parent('pixelAccess');
    ctx = canvas.drawingContext;
}

function draw() {
    colorMode(RGB);
    background(img);

    stroke('red');
    noFill();
    circle(mouseX, mouseY, 30);

    pixel = ctx.getImageData(mouseX, mouseY, 1, 1).data;

    let red = pixel[0];
    let green = pixel[1];
    let blue = pixel[2];
    let alpha = pixel[3] / 255;

    fill('light green');
    textSize(16);
    text(`Color components [red: ${red}, green: ${green}, blue: ${blue} ]`, 50, 50);
}
