let canvas;
function setup() {
  canvas = createCanvas(410, 410);
  canvas.parent('canvas');
}

function draw() {
  background(250);

  let step = 5; // distanza tra i punti

  // For r, g, b (modello RGB)
  for (let z = 0; z < 255; z += step) {
    for (let g = 0; g < 255; g += step) {
      for (let b = 0; b < 255; b += step) {
        stroke(255-g, 255-b, z);
        fill(255-g, 255-b, z);
        rect(10 + z/2+g, 10 + z/2+b, 5, 5);
      }
    }
  }
        
  noLoop(); // termina draw
  saveCanvas(canvas, 'colors_and_styles_color_model_cube_A', 'png');
}

