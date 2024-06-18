let canvas;
function setup() {
  canvas = createCanvas(300, 30);
  canvas.parent('canvas');
}

function draw() {
  background(255, 255, 255);

  
  // HSB è definito con tre componenti di 
  // valore massimo 360, 100, 100
  colorMode(HSB, 360, 100, 100);
  
  noStroke();
  
  for (let i = 0; i < width; i++) {
    
      // Remap value i from [0, width] to [0, 330].
    let hue = map(i, 0, width, 0, 330);
    
    // 100, 100 per saturazione massima
    fill(hue, 100, 100);
    rect(i, 0, 1, height);
  }
  
  saveCanvas(canvas, 'colors_and_styles_color_spectrum', 'png');
  noLoop();
}
