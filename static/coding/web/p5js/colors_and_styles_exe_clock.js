function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(255, 255, 100);
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    fill(255,0,0);
    text(h, 160, 90);
    fill(0,255,0);
    text(m, 190, 90);
    fill(0,0,255);
    text(s, 220, 90);

    fill(255,255,255);
    circle(200,200,150);

    fill(0,0,255);
    arc(200,200,150,150,(s*6)-90,(s*6)-89);

    fill(0,255,0);
    arc(200,200,140,140,(m*6)-90,(m*6)-89);

    fill(255,0,0);
    arc(200,200,110,110,(h*30)-90,(h*30)-89);

    textSize(16);
    fill(0, 0, 0);
    text("12", 190, 140);
    text("11", 160, 150);
    text("10", 140, 170);
    text("9", 130, 206);
    text("8", 136, 236);
    text("7", 165, 260);
    text("6", 198, 270);
    text("5", 232, 260);
    text("4", 255, 235);
    text("3", 260, 206);
    text("2", 255, 177);
    text("1", 232, 150);
}
