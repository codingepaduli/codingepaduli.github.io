let canvas;
function setup() {
  canvas = createCanvas(300, 100);
  canvas.parent('canvas');
  
  // HSB è definito con tre componenti di 
  // valore massimo 360, 100, 100
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(255);
  noFill();

  strokeWeight(1);
  
  let hue;
  let step = 3;
      
  for (let i = 0; i < 360; i=i+step) {
    // Remap value i from [0, width] to [0, 260].
    hue = map(i, 0, width, 0, 260);
    stroke(hue, 100, 100);
    arc(width/2, height, 200-i/step, 175-i/step, PI, TWO_PI);
  }
  
  saveCanvas(canvas, 'colors_and_styles_color_rainbow', 'png');
  noLoop();
}
