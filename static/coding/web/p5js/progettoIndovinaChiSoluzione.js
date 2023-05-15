let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;

let clickX, clickY;

// TODO to complete

function preload() {

  img1 = loadImage('https://upload.wikimedia.org/wikipedia/commons/1/14/Bata_drums.jpg');
  img2 = loadImage('https://upload.wikimedia.org/wikipedia/commons/6/62/Cabasa.jpg');
  img3 = loadImage('https://upload.wikimedia.org/wikipedia/commons/f/f1/Gong.jpg');
  img4 = loadImage('https://upload.wikimedia.org/wikipedia/commons/a/ac/Maracas.jpg');
  img5 = loadImage('https://upload.wikimedia.org/wikipedia/commons/2/21/Shekere.jpg');
  img6 = loadImage('https://upload.wikimedia.org/wikipedia/commons/e/e5/Pandeiro_new_30-09-07.jpg');
  img7 = loadImage('https://upload.wikimedia.org/wikipedia/commons/f/fa/Music_instrument_alfaia.jpg');
  img8 = loadImage('https://upload.wikimedia.org/wikipedia/commons/4/4a/Triangle_001.jpg');
  img9 = loadImage('https://upload.wikimedia.org/wikipedia/commons/8/8b/G%C3%BCiro.jpg');
  
  /*
  soundFormats('mp3', 'wav');
  chicchirichi = loadSound('gallo.wav');
  cipcip = loadSound('canarino.mp3');
  */
}

function setup() {
  createCanvas(370, 520);
}

function draw() {
  background('lightblue');
  image(img1, 10, 50, 100, 120);
  image(img2, 130, 50, 100, 120);
  image(img3, 250, 50, 100, 120);

  image(img4, 10, 190, 100, 120);
  image(img5, 130, 190, 100, 120);
  image(img6, 250, 190, 100, 120);
  
  image(img7, 10, 330, 100, 120);
  image(img8, 130, 330, 100, 120);
  image(img9, 250, 330, 100, 120);
  
  fill('red');
  textSize(24);
  textStyle(BOLD);
  text("Indovina lo strumento", 30, 30)
  
  // text("click a coordinate: " + clickX + " " + clickY, 30, 150);
  
  fill('#F44336');
  textSize(48);
  text("Hai Vinto!!", 30, 500)
}

function mousePressed() {
  clickX = mouseX;
  clickY = mouseY;
  
  if (clickX > 200) {
    cipcip.play();
  }
}

