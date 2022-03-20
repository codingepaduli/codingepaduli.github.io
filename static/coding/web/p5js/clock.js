function setup() {
    var canvas = createCanvas(800, 1500);
    canvas.parent('clock');
    angleMode(DEGREES);
}

function drawClock(x, y, d, h, m, s, clockWise) {
    push(); // Start a new drawing state

    var r = d/2;

    var rh = r * 60 / 100;
    var rm = r * 80 / 100;
    var rs = r * 95 / 100;

    circle(x, y, d);

    textAlign(CENTER, CENTER);
    for (var hour = 1; hour <= 12; hour = hour+1) {
        text(hour, x + rm * cos(hour*30-90), y + rm * sin(hour*30-90));
    }

    var hoursToDegree = h * 30 - 90;
    var minutesToDegree = m * 6 - 90;

    arrow(x, y, x + rh * cos(hoursToDegree), y + rh * sin(hoursToDegree));
    arrow(x, y, x + rm * cos(minutesToDegree), y + rm * sin(minutesToDegree));

    if (s != null && s >= 0 && s <= 60) {
        var secondsToDegree = s * 6 - 90;
        arrow(x, y, x + rs * cos(secondsToDegree), y + rs * sin(secondsToDegree));
    }

    arrowArc(x, y, r, hoursToDegree, minutesToDegree, clockWise, false, true);

    pop();  // Restore original state
}

function draw() {
    background('white');
    stroke(10);

    fill('black');
    textSize(36);
    text("Misure in senso orario", 10, 30);
    text("(clockwise)", 30, 70);

    text("Misure in senso antiorario", 20, 550);
    text("(counterclockwise)", 20, 590);
    text("Orologio analogico", 80, 1050);

    noFill();
    textSize(14);

    // clockwise arc
    var clockWise = true;
    drawClock(80, 175, 120, 3, 15+7.5, null, clockWise);
    text("Angolo di 45 gradi", 20, 175+80);

    drawClock(240, 175, 120, 3, 15+15, null, clockWise);
    text("Angolo di 90 gradi", 180, 175+80);

    drawClock(400, 175, 120, 3, 15+15+7.5, null, clockWise);
    text("Angolo di 135 gradi", 340, 175+80);

    drawClock(80, 350, 120, 3, 15+30, null, clockWise);
    text("Angolo di 180 gradi", 20, 350+80);

    drawClock(240, 350, 120, 3, 15+45, null, clockWise);
    text("Angolo di 270 gradi", 180, 350+80);

    drawClock(400, 350, 120, 3, 15+60, null, clockWise);
    text("Angolo di 360 gradi", 340, 350+80);

    // counterclockwise arc
    counterclockwise = false;
    drawClock(80, 700, 120, 3, 15-7.5, null, counterclockwise);
    text("Angolo di 45 gradi", 20, 700+80);

    drawClock(240, 700, 120, 3, 0, null, counterclockwise);
    text("Angolo di 90 gradi", 180, 700+80);

    drawClock(400, 700, 120, 3, 60-7.5, null, counterclockwise);
    text("Angolo di 135 gradi", 340, 700+80);

    drawClock(80, 875, 120, 3, 60-15, null, counterclockwise);
    text("Angolo di 180 gradi", 20, 875+80);

    drawClock(240, 875, 120, 3, 60-30, null, counterclockwise);
    text("Angolo di 270 gradi", 180, 875+80);

    drawClock(400, 875, 120, 3, 15+60, null, counterclockwise);
    text("Angolo di 360 gradi", 340, 875+80);

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    drawClock(250, 1150, 120, h, m, s, clockWise);
    text(`${h} : ${m} : ${s}`, 210, 1150+80);

}
