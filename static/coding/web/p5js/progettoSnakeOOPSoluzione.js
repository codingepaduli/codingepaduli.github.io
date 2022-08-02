class Colore {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

class PallinaColorata {
    constructor(x, y, d, c) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.color = c;
    }
}

// Random value between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const snakeColor = new Colore(0, 255, 0);
const labirintColor = new Colore(255, 0, 0);
const preyColor = new Colore(0, 0, 255);

const diameter = 20;
const radius = diameter/2;

let snake = [];
let prey;

let directionKey = "ArrowDown";

let maxX, maxY;

function setup() {
    createCanvas(800, 400);

    // snake iniziale con due palline
    snake[0] = new PallinaColorata(3, 1, diameter, snakeColor);
    snake[1] = new PallinaColorata(3, 2, diameter, snakeColor);
    // preda
    prey = new PallinaColorata(9, 9, diameter, preyColor);

    console.info(`Area: ${width} ${height}`);

    maxX = Math.floor((radius + width)/diameter) -1;
    maxY = Math.floor((radius + height)/diameter) -1;

    console.info(`Max: ${maxX} ${maxY}`);
}

function draw() {
    background(0, 0, 0);

    // disegno le possibili posizioni dello snake
    fill(255, 0, 0);
    for(let X=0; X<=maxX; X++) {
        for (let Y=0; Y<=maxY; Y++) {
            circle(radius + diameter * X, radius + diameter * Y, diameter);
        }
    }

    // Input: direzione dello snake
    directionKey = key != "" ? key : directionKey;

    // aggiungo una pallina in testa allo snake
    // (la pallina aggiunta ha la stessa posizione (X,Y) della pallina in testa (X,Y))
    fill(snakeColor.r,snakeColor.g,snakeColor.b);
    snake[snake.length] = new PallinaColorata(snake[snake.length-1].x, snake[snake.length-1].y, diameter, snakeColor);

    // valuto la direzione scelta dall'utente
    // e sposto la pallina aggiunta in testa allo snake
    // se direzione SU, la nuova testa avrà posizione Y=Y-1
    // se direzione GIU, la nuova testa avrà posizione Y=Y+1
    // se direzione DX, la nuova testa avrà posizione X=X+1
    // se direzione SX, la nuova testa avrà posizione X=X-1
    switch (directionKey) {
        case "ArrowUp":
            snake[snake.length-1].y --;
            break;
        case "ArrowDown":
            snake[snake.length-1].y ++;
            break;
        case "ArrowRight":
            snake[snake.length-1].x ++;
            break;
        case "ArrowLeft":
            snake[snake.length-1].x --;
            break;
        default:
    }

    if (prey.x == snake[snake.length-1].x && prey.y == snake[snake.length-1].y) {
        // Se catturo la preda,
        // cambio posizione alla preda
        prey.x = getRandomInt(0, maxX);
        prey.y = getRandomInt(0, maxY);
        console.info(`Snake length: ${snake.length}`);
        console.info(`Prey: ${prey.x} ${prey.y}`);
    } else {
        // SE non ho catturato la preda
        // Sposto la coda di un elemento solo
        snake.shift(); // cancella elemento del vettore in posizione 0
    }

    // disegno lo snake
    for (let i=0; i<snake.length; i++) {
        fill(snake[i].color.r,snake[i].color.g,snake[i].color.b);
        circle(radius + diameter * snake[i].x, radius + diameter *  snake[i].y, snake[i].d);
    }

    // disegno la preda
    fill(preyColor.r,preyColor.g,preyColor.b);
    circle(radius + diameter * prey.x, radius + diameter * prey.y,prey.d);
}
