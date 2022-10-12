function setup() {
  createCanvas(650, 450);
}

function draw() {
  background(220);

  // colore verde e bordi bianchi con spessore indicato
  fill(0, 100, 0);
  stroke(255, 255, 255);
  strokeWeight(4);

  // campo
  rect(40, 50, 550, 300);

  // linea e cerchio di centrocampo
  circle(320, 200, 130);
  line(320, 350, 320, 50);

  // area sinistra di rigore (grande e piccola)
  rect(40, 140, 70, 120);
  rect(10, 155, 30, 90);
  arc(110, 205, 60, 60, 11, HALF_PI, OPEN);

  // area di rigore destra (grande e piccola)
  rect(520, 140, 70, 120);
  rect(590, 155, 30, 90);
  arc(515, 205, 60, 60, 190, 30, HALF_PI, PI, OPEN);

  // angoli
  arc(40, 50, 30, 30, 0, HALF_PI);                    // in alto a sinistra
  arc(43, 350, 30, 30, PI + HALF_PI, TWO_PI);         // in basso a sinistra
  arc(587, 52, 30, 30, HALF_PI, PI);                  // in alto a destra
  arc(600, 345, 55, 30, 3, PI + QUARTER_PI, TWO_PI);  // in basso a destra

  // punti del centro del centrocampo e dei dischetti (per battere i rigori)
  strokeWeight(10);
  point(80, 205); // dischetto sinistro
  point(320, 205); // centrocampo
  point(550, 205); // dischetto destro
}
