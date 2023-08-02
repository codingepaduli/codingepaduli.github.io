let b1 = 0;
let b2 = 0;
let b3 = 0;
let b4 = 0;
let b5 = 0;
let b6 = 0;
let b7 = 0;
let b8 = 0;

let r1 = 0;
let r2 = 0;
let r3 = 0;
let r4 = 0;
let r5 = 0;
let r6 = 0;
let r7 = 0;
let r8 = 0;

let decimale = 0;
let decimaleComplemento1 = 0;

function setup() {
  createCanvas(600, 400);
  /*
  b1 = prompt("inserisci b1");
  b2 = prompt("inserisci b2");
  b3 = prompt("inserisci b3");
  b4 = prompt("inserisci b3");

  b1 = parseInt(b1);
  b2 = parseInt(b2);
  b3 = parseInt(b3);
  b4 = parseInt(b4);
  */
  
  if (b1 == 0) {
    r1 = 1;
  } else {
    r1 = 0;
  }
  
  if (b2 == 0) {
    r2 = 1;
  } else {
    r2 = 0;
  }
  
  if (b3 == 0) {
    r3 = 1;
  } else {
    r3 = 0;
  }

  if (b4 == 0) {
    r4 = 1;
  } else {
    r4 = 0;
  }

  if (b5 == 0) {
    r5 = 1;
  } else {
    r5 = 0;
  }

  if (b6 == 0) {
    r6 = 1;
  } else {
    r6 = 0;
  }

  if (b7 == 0) {
    r7 = 1;
  } else {
    r7 = 0;
  }

  if (b8 == 0) {
    r8 = 1;
  } else {
    r8 = 0;
  }

  decimale = b8 * 2**0 + b7 * 2**1 + b6 * 2**2 + b5 * 2**3;
  decimale += b4 * 2**4 + b3 * 2**5 + b2 * 2**6 + b1 * 2**7;

  decimaleComplemento1 = r8 * 2**0 + r7 * 2**1 + r6 * 2**2 + r5 * 2**3;
  decimaleComplemento1 += r4 * 2**4 + r3 * 2**5 + r2 * 2**6 + r1 * 2**7;
}

function draw() {
  background(220);
  
  fill(255, 0, 0);
  textSize(28);

  text("Bit iniziali - Decimale", 60, 40);
  text(b1, 30, 100);
  text(b2, 50, 100);
  text(b3, 70, 100);
  text(b4, 90, 100);
  text(b5, 110, 100);
  text(b6, 130, 100);
  text(b7, 150, 100);
  text(b8, 170, 100);

  text(decimale, 240, 100);

  text("Complemento a 1 - Decimale", 20, 150);
  text(r1, 30, 200);
  text(r2, 50, 200);
  text(r3, 70, 200);
  text(r4, 90, 200);
  text(r5, 110, 200);
  text(r6, 130, 200);
  text(r7, 150, 200);
  text(r8, 170, 200);

  text(decimaleComplemento1, 240, 200);
}


