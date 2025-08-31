var canvas;
function setup() {
  canvas = createCanvas(650, 430);
  canvas.parent('hwb');
}

function draw() {
  background(255, 255, 255);

  let radius; // alias of whitenessV

  // circle position and width
  let centerX = 250;
  let centerY = 200;
  let maxRadius = 200;

  // set the color mode and the model's interval
  colorMode(HWB, 360, maxRadius, 100); // Default values 360, 100, 100
  angleMode(DEGREES);

  for (let hueV = 0; hueV < 270; hueV += 0.3) {
    for (let whitenessV = 0; whitenessV < maxRadius; whitenessV ++) {

        radius = whitenessV;
        let x = centerX + radius * cos(hueV);
        let y = centerY - radius/2 * sin(hueV);
        stroke(hueV, whitenessV, 0);
        point (x, y);
    }
  }

  // Draw the last circle
  let whitenessV = maxRadius;
  for (let hueV = 180; hueV < 270; hueV += 0.25) {
    for (let blacknessV = 0; blacknessV < 100; blacknessV ++) {
        radius = whitenessV;
        let x = centerX + radius * cos(hueV);
        let y = centerY - radius/2 * sin(hueV);
        stroke(hueV, whitenessV,  blacknessV);
        point (x, y+blacknessV);
    }
  }

  let hueV = 0;
  for (let whitenessV = 0; whitenessV < maxRadius; whitenessV ++) {
    for (let blacknessV = 0; blacknessV < 100; blacknessV ++) {
        let x = whitenessV;
        let y = blacknessV;
        stroke(hueV, whitenessV, blacknessV);
        point (centerX + x, centerY + y);
    }
  }

  // Hue arrow
  fill(255, 0, 0);
  strokeWeight(5);
  var clockWise = true;
  arrowArc(centerX, 2*centerY, 3*maxRadius+50, 240, 300, clockWise, true, true);

  // Saturation
  arrow(centerX + 10, centerY + centerY/2 + 20, centerX + maxRadius + 10, centerY + centerY/2 +20);
  
  // Blackness
  arrow(centerX + 210, centerY, centerX + 210, centerY + 100);

  // text
  strokeWeight(2);
  textSize(25);
  text("Hue", centerX, 50);
  text("Whiteness", centerX + 50, centerY + 150);
  text("Blackness", centerX + 220, centerY + 50);

  saveCanvas(canvas, 'colors_and_styles_color_model_hwb', 'png');
  noLoop();
}
