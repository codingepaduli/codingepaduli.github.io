
// In order to convert to JSON when JSON.stringify(num) is called
BigInt.prototype.toJSON = function() { return this.toString(); };

let mapOfPrimes;
function preload() {
    mapOfPrimes = createMapOfPrimes();
}

function setup() {
    var canvas = createCanvas(800, 700);
    canvas.parent('primeNumbers');
}

function draw() {
    colorMode(RGB);
    background(0, 0, 0);

    // arc style
    strokeWeight(2);
    stroke(0, 204, 255);
    noFill();
    let arcSpace = 50;

    // draw arcs
    let count = 0;
    let rangeMin = 0n;
    let rangeMax = 0n;
    for (let [i, values] of mapOfPrimes) {
        count ++;

        rangeMin = 6n ** (i - 1n) + 1n;
        rangeMax = 6n ** i;

        arc(width/2, height/2, 2 * arcSpace * count, 2 * arcSpace * count, 0, TWO_PI, CHORD);
        text(rangeMin, width/2 - arcSpace * count, height/2 + 20);
        text(rangeMax, width/2 + arcSpace * count, height/2 + 20);
    }

    // point style
    strokeWeight(6);
    stroke(0, 255, 255);
    fill(255, 0, 0);

    // draw points
    count = 0;
    for (let [i, values] of mapOfPrimes.entries()) {
        count ++;

        rangeMin = 6n ** (i - 1n) + 1n;
        rangeMax = 6n ** i;

        let arcStep = TWO_PI / values.length;

        let j = 0;
        for (let prime of values) {

            // (rangeMax - rangeMin) : TWO_PI ==  (prime - rangeMin) : alpha

            let alpha = Number(prime - rangeMin) * TWO_PI / Number(rangeMax - rangeMin);

            point(width/2 - cos(alpha) * arcSpace * count, height/2 - sin(alpha) * arcSpace * count);
            j++;
        }
    }

    noLoop();
}

function createMapOfPrimes() {
    let ranges = new Map();
    let rangeMin = 0n;
    let rangeMax = 0n;

    for (let i=1n; i<6n; i = i + 1n) {
        rangeMin = 6n ** (i - 1n) + 1n;
        rangeMax = 6n ** i;

        let values = new Array();

        for (let k=rangeMin; k<=rangeMax; k = k + 1n) {
            let isprime = isPrime(k);
            if (isprime) {
                // console.debug("number " + k + " is prime: " + isprime);
                values.push(k);
            }
        }

        console.info(rangeMin + "_" + rangeMax + " -> [" + values.length + "] " + JSON.stringify(values));

        ranges.set(i, values);
    }
    return ranges;
}

function isPrime(k) {
    for (let j = 2n; j < k; j = j + 1n) {
        if (k % j == 0n) {
            return false;
        }
    }
    return true;
}
