// ball X and Y
let x = 50;
let y = 50;
let speed = 10;

// ball directions
let dx = 1;
let dy = 1;

// goals
p1Goals=0;

// set the numbers of row and columns
let righePalline = 4;
let colonnePalline = 7;

// create a matrix for the (X,Y and color) of each ball
let pallineX = [
    [colonnePalline],
    [colonnePalline],
    [colonnePalline],
    [colonnePalline]
];
let pallineY = [
    [colonnePalline],
    [colonnePalline],
    [colonnePalline],
    [colonnePalline]
];
let pallineColore = [
    [colonnePalline],
    [colonnePalline],
    [colonnePalline],
    [colonnePalline]
];

// my rect height
let rectHeight;

// ball diameter and radius
let d;
let r;

function preload() {
    console.info("displayWidth / displayHeight: " + displayWidth + " " + displayHeight);
    console.info("windowWidth / windowHeight: " + windowWidth + " " + windowHeight);
    console.info("pixelDensity: " + pixelDensity());

    // ball diameter and radius
    d = Math.min(50, displayWidth * 0.9 / 15);
    r = d/2;

    // rect height
    rectHeight = 2*d;

    let centerX = displayWidth * 0.9 / 2;

    // initialize (X,Y and color) of each ball
    for (let i = 0; i<righePalline; i++) {
        for (let j = 0; j<colonnePalline; j++) {
            pallineX[i][j] = centerX + i*d;
            pallineY[i][j] = j * d + r;
            pallineColore[i][j] = 0;
        }
    }
}

function setup() {
    let canvasNode = document.querySelector('#progettoArknoid');
    let cw = canvasNode.parentNode.clientWidth;
    createCanvas(cw * 0.9, cw * 0.4).parent('progettoArknoid');
}

function draw() {
    background(50,50,50);
    fill(255, 204, 100);
    strokeWeight(1);
    stroke(255, 204, 100);

    // draw the others ball
    for (let i = 0; i<righePalline; i++) {
        for (let j = 0; j<colonnePalline; j++) {
            if (pallineX[i][j] != null && pallineY[i][j] != null) {
                ellipse(pallineX[i][j], pallineY[i][j], d, d);
            }
        }
    }

    // get the Y axe from the mouse
    let rectY = mouseY;

    // set the min and max for the Y axes of the rectangle
    if (rectY < 0) {
        rectY = 0;
    }
    if (rectY + rectHeight > height) {
        rectY = height - rectHeight;
    }

    // draw my rectangle
    rect(10,rectY,10,rectHeight);

    // the ball will bounce on the top and bottom borders
    if (y < r || y + r > height) {
        dy = -dy;
    }

    // the ball will bounce on the right border
    if (x + r > width) {
        dx = -dx;
    }

    // the ball is in the limit
    if (x-r <= 20) {
        if (y >= rectY - r && y < rectY+rectHeight + r) {
            // the ball will bounce on my rect, I win a point
            // speed += 3;
            p1Goals=p1Goals+1;
        } else {
            // speed -= 3;
            // the ball will NOT bounce on my rect, I loose a point
            p1Goals=p1Goals-1;
        }
        // bounce out of the limit
        x = 2*20+r;
        dx = -dx;
    }

    // move
    x = x + dx*speed;
    y = y + dy*speed;

    // check the contacts with the other balls
    let distanza = 0;

    for (let i = 0; i<righePalline; i++) {
        for (let j = 0; j<colonnePalline; j++) {
            distanza = Math.sqrt(
                Math.pow(pallineX[i][j] - x, 2) +
                Math.pow(pallineY[i][j] - y, 2)
            );

            // if the ball touchs one other ball
            if (distanza < d) {
                // the first ball will bounce
                dx = -dx;
                dy = -dy;

                // remove the second ball
                pallineX[i][j] = null;
                pallineY[i][j] = null;
            }
        }
    }

    // draw the ball
    ellipse(x, y, d, d);

    // fullscreen rectangle
    textSize(28);
    text("[ ]", width - 60, height - 30);
}

// fullscreen when click
function mousePressed() {
  if (mouseX > width - 60 && mouseX < width - 30 && mouseY > height - 60 && mouseY < height - 30) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}
