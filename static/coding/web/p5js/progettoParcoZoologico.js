let img1, img2, img3;
let img4, img5, img6;
let img7, img8, img9;

let suono_img1, suono_img2, suono_img3;
let suono_img4, suono_img5, suono_img6;
let suono_img7, suono_img8, suono_img9;

let nomeAnimale = "Scegli l'animale";

// TODO aggiungere i suoni

let clickX, clickY;

function preload() {
    img1 = loadImage('/static/coding/web/p5js/progettoParcoZoologico_cat.jpg');
    img2 = loadImage('/static/coding/web/p5js/progettoParcoZoologico_chicken.jpg');
    img3 = loadImage('/static/coding/web/p5js/progettoParcoZoologico_cock.jpg');
    img4 = loadImage('/static/coding/web/p5js/progettoParcoZoologico_cow.jpg');
    img5 = loadImage('/static/coding/web/p5js/progettoParcoZoologico_dog.jpg');
    img6 = loadImage('/static/coding/web/p5js/progettoParcoZoologico_donkey.jpg');
    img7 = loadImage('/static/coding/web/p5js/progettoParcoZoologico_horse.jpg');
    img8 = loadImage('/static/coding/web/p5js/progettoParcoZoologico_lion.jpg');
    img9 = loadImage('/static/coding/web/p5js/progettoParcoZoologico_rabbit.jpg');

    soundFormats('mp3', 'wav');

    suono_img1 = loadSound('/static/coding/web/p5js/progettoParcoZoologico_cat.mp3');
    suono_img2 = loadSound('/static/coding/web/p5js/progettoParcoZoologico_chicken.mp3');
    suono_img3 = loadSound('/static/coding/web/p5js/progettoParcoZoologico_cock.mp3');
    suono_img4 = loadSound('/static/coding/web/p5js/progettoParcoZoologico_cow.mp3');
    suono_img5 = loadSound('/static/coding/web/p5js/progettoParcoZoologico_dog1.mp3');
    suono_img6 = loadSound('/static/coding/web/p5js/progettoParcoZoologico_donkey.mp3');
    suono_img7 = loadSound('/static/coding/web/p5js/progettoParcoZoologico_horse1.mp3');
    suono_img8 = loadSound('/static/coding/web/p5js/progettoParcoZoologico_lion.mp3');
    suono_img9 = loadSound('/static/coding/web/p5js/progettoParcoZoologico_rabbit.mp3');

    /*
    chicchirichi = loadSound('gallo.wav');
    cipcip = loadSound('canarino.mp3');
    */
}

function setup() {
    createCanvas(450, 600);
}

function draw() {
    background('lightblue');
    image(img1, 0, 0, 150, 150);
    image(img2, 150, 0, 150, 150);
    image(img3, 300, 0, 150, 150);

    image(img4, 0, 150, 150, 150);
    image(img5, 150, 150, 150, 150);
    image(img6, 300, 150, 150, 150);

    image(img7, 0, 300, 150, 150);
    image(img8, 150, 300, 150, 150);
    image(img9, 300, 300, 150, 150);

    fill('red');
    textSize(36);
    textStyle(BOLD);
    textAlign(CENTER, BASELINE); // Align the x center to 70
    text(nomeAnimale, 225, 520);

    //text("click " + clickX + " " + clickY, 225, 550);
}

function mousePressed() {
    clickX = mouseX;
    clickY = mouseY;
    
    if (clickX>0 && clickX<150 && clickY>0 && clickY<150) {
        suono_img1.play();
        nomeAnimale = "Gatto";
    }
    if (clickX>0 && clickX<150 && clickY>150 && clickY<300) {
        suono_img4.play();
        nomeAnimale = "Mucca";
    }
    if (clickX>0 && clickX<150 && clickY>300 && clickY<450) {
        suono_img7.play();
        nomeAnimale = "Cavallo";
    }
    if (clickX>0 && clickX<150 && clickY>450 && clickY<600) {
        // SuonoOrso.play();
    }
    
    if (clickX>150 && clickX<300 && clickY>0 && clickY<150) {
        suono_img2.play();
        nomeAnimale = "Gallina";
    }
    if (clickX>150 && clickX<300 && clickY>150 && clickY<300) {
        suono_img5.play();
        nomeAnimale = "Cane";
    }
    if (clickX>150 && clickX<300 && clickY>300 && clickY<450) {
        suono_img8.play();
        nomeAnimale = "Leone";
    }
    if (clickX>150 && clickX<300 && clickY>450 && clickY<600) {
        // SuonoAquila.play();
        nomeAnimale = "Iena";
    }

    if (clickX>300 && clickX<450 && clickY>0 && clickY<150) {
        suono_img3.play();
        nomeAnimale = "Gallo";
    }
    if (clickX>300 && clickX<450 && clickY>150 && clickY<300) {
        suono_img6.play();
        nomeAnimale = "Asino";
    }
    if (clickX>300 && clickX<450 && clickY>300 && clickY<450) {
        suono_img9.play();
        nomeAnimale = "Coniglio";
    }
    if (clickX>300 && clickX<450 && clickY>450 && clickY<600) {
        //SuonoBalena.play();
    }

    if (clickX>450 && clickX<600 && clickY>0 && clickY<150) {
        //SuonoGatto.play();
    }
    if (clickX>450 && clickX<600 && clickY>150 && clickY<300) {
        //SuonoCapra.play();
    }
    if (clickX>450 && clickX<600 && clickY>300 && clickY<450) {
        //SuonoLupo.play();
    }
    if (clickX>450 && clickX<600 && clickY>450 && clickY<600) {
        //SuonoSerpente.play();
    }
}
