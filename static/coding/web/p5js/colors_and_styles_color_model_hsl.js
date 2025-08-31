var canvas;
function setup() {
  canvas = createCanvas(650, 430);
  canvas.parent('hsl');
}

function draw() {
  background(255, 255, 255);

  let radius; // alias of saturation

  // circle position and width
  let centerX = 250;
  let centerY = 200;
  let maxRadius = 200;

  // set the color mode and the model's interval
  colorMode(HSL, 360, maxRadius, 100); // Default values 360, 100, 100
  angleMode(DEGREES);

  for (let hue = 0; hue < 270; hue += 0.3) {
    for (let saturation = 0; saturation < maxRadius; saturation ++) {

        radius = saturation;
        let x = centerX + radius * cos(hue);
        let y = centerY - radius/2 * sin(hue);
        stroke(hue, saturation, 100);
        point (x, y);
    }
  }

  // Draw the last circle
  let saturation = maxRadius;
  for (let hue = 180; hue < 270; hue += 0.25) {
    for (let bright = 0; bright < 100; bright ++) {
        radius = saturation;
        let x = centerX + radius * cos(hue);
        let y = centerY - radius/2 * sin(hue);
        stroke(hue, saturation, 100 - bright);
        point (x, y+bright);
    }
  }

  let hue = 0;
  for (let saturation = 0; saturation < maxRadius; saturation ++) {
    for (let bright = 0; bright < 100; bright ++) {
        let x = saturation;
        let y = bright;
        stroke(hue, saturation, 100 - bright);
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
  
  // Brightness
  arrow(centerX + 210, centerY + 100, centerX + 210, centerY);

  // text
  strokeWeight(2);
  textSize(25);
  text("Hue", centerX, 50);
  text("Saturation", centerX + 50, centerY + 150);
  text("Lightness", centerX + 220, centerY + 50);

  saveCanvas(canvas, 'colors_and_styles_color_model_hsl', 'png');
  noLoop();
}
