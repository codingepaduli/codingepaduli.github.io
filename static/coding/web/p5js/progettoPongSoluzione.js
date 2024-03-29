// ball X and Y
let x = 50;
let y = 50;
let speed = 5;

// ball directions
let dx = 1;
let dy = 1;

// goals
let p1Goals=0;

// rect height
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
    console.info("raggio: " + r);

    // rect height
    rectHeight = 2*d;
}

function setup() {
    let canvasNode = document.querySelector('#progettoPong');
    let cw = canvasNode.parentNode.clientWidth;
    createCanvas(cw * 0.9, cw * 0.4).parent('progettoPong');
}

function draw() {
    frameRate(48);

    background(50,50,50);

    // frame rate
    // text(frameRate(), 30, 30);

    // draw the goals
    textSize(16);
    text("P1: " + p1Goals, width-50, 20);

    // get the Y axe from the mouse
    let rectY = mouseY;

    // set the min and max for the Y axes of the rectangle
    if (rectY < 0) {
        rectY = 0;
    }
    if (rectY + rectHeight > height) {
        rectY = height - rectHeight;
    }

    // draw the rectangle
    rect(10,rectY,10,rectHeight);

    // the ball will bounce on the top and bottom borders
    if (y < r) {
        dy = 1;
    }
    
    if (y + r > height) {
        dy = -1;
    }

    // the ball will bounce on the right border
    if (x + r > width) {
        dx = -dx;
    }

    // the ball is in the limit
    if (x-r <= 20) {
        if (y >= rectY - r && y < rectY+rectHeight + r) {
            // the ball will bounce on the rect
            speed += 3;
            p1Goals=p1Goals+1;
        } else {
            speed -= 3;
            // loose a point
            p1Goals=p1Goals-1;
        }
        // bounce out of the limit
        x = 2*20+r;
        dx = -dx;
    }

    // increase speed
    x = x + dx*speed;
    y = y + dy*speed;

    // draw the ball
    fill(255, 204, 100);
    ellipse(x, y, d, d);
    
    drawFullScreenRect();
}

// fullscreen when click
function mousePressed() {
  if (mouseX > width - 60 && mouseX < width - 30 && mouseY > height - 60 && mouseY < height - 30) {
    if (!document.fullscreenElement) {
      let canvasNode = document.querySelector('#progettoPong canvas');
      canvasNode.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

function drawFullScreenRect() {
  // fullscreen rectangle
  push();

  textSize(10);
  //text(" " + mouseX + " " + mouseY, width - 100, height - 70);

  noFill();
  strokeWeight(4);
  stroke(0, 255, 0);

  rectMode(CORNER);
  square(width - 60, height - 60, 30);
  pop();
}
