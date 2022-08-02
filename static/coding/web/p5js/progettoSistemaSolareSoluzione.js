class Stella {
    constructor(n, x, y) {
        this.nome = n;
        this.x = x;
        this.y = y;
        this.pianeta = null;
    }

    ruota(tempo) {
        if (this.pianeta != null) {
            this.pianeta.x = this.x + Math.cos(tempo) * this.pianeta.distanza;
            this.pianeta.y = this.y + Math.sin(tempo) * this.pianeta.distanza;

            this.pianeta.ruota(tempo);
        }
    }
}

class Pianeta {
    constructor(n, d) {
        this.nome = n;
        this.distanza = d;
        this.luna = null;
        this.x = 0;
        this.y = 0;
    }

    ruota(tempo) {
        if (this.luna != null) {
            this.luna.x = this.x + Math.cos(6*tempo) * this.luna.distanza;
            this.luna.y = this.y + Math.sin(6*tempo) * this.luna.distanza;
        }
    }
}

class Luna {
    constructor(n, d) {
        this.nome = n;
        this.distanza = d;
        this.x = 0;
        this.y = 0;
    }
}

let stella = new Stella("Sole", 400, 300);
let terra = new Pianeta("Terra", 240);
let luna = new Luna("Luna", 50);

stella.pianeta = terra;
terra.luna = luna;

let alpha = 0;

let canvas;
function setup() {
   canvas = createCanvas(800, 600);
   canvas.parent('solarSistem');
}

function draw() {
    background(0,255,255);

    stella.ruota(alpha);

    fill(255,255,0);
    circle(stella.x, stella.y, 100);

    fill(0,0,255);
    circle(terra.x, terra.y, 40);

    fill(0,255,0);
    circle(luna.x, luna.y, 10);

    alpha=alpha + 0.05;
}
