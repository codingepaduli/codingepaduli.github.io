let canvas;
function setup() {
  canvas = createCanvas(200, 200);
  canvas.parent('astronave');
}

function draw() {
  background(255, 255, 255);

  fill(0, 255, 0);
  
  // coda
  triangle(0, 100, 20, 80, 20, 120);
  
  // ali triangolari posteriori
  triangle(35, 85, 60, 85, 60, 45);
  triangle(35, 115, 60, 115, 60, 155);
  
  // ali triangolari laterali rosse
  fill(250, 50, 35);
  triangle(95, 60, 70, 60, 70, 35);
  triangle(95, 140, 70, 140, 70, 165);
  
  // corridoio centrale
  fill(0, 145, 0);
  rect(20, 75, 15, 50);
  rect(35, 85, 80, 30);
  
  // corridoi laterali
  rect(60, 60, 65, 15);
  rect(60, 125, 65, 15);
  
  // muso frontale blu
  fill(50, 35, 250);
  rect(115, 90, 25, 10);
  rect(115, 100, 25, 10);
  
  // proiettili rettangolari blu
  fill(50, 35, 250);
  rect(95, 40, 25, 10);
  rect(95, 150, 25, 10);
  
  // oblo
  fill(0, 60, 0);
  circle(100, 100, 25);
  fill(0, 200, 0);
  
  // due proiettili
  fill(250, 50, 35);
  circle(140, 67, 15);
  circle(140, 133, 15);
  
  // proiettile centrale
  fill(200, 200, 0);
  circle(155, 100, 20);
  
  // due proiettili
  fill(0, 200, 0);
  circle(165, 67, 15);
  circle(165, 133, 15);
  
  // due proiettili
  fill(0, 200, 100);
  circle(135, 45, 15);
  circle(135, 155, 15);
  
  // linea di simmetria
  line(0, 100, 200, 100);

  saveCanvas(canvas, 'colors_and_styles_exe_astronave_05', 'png');
  noLoop();
}
