
function drawCleaningSquare(x, y, size) {
    push();

    stroke('black');

    for(let i=-1; i<size+1; i++) {
        point(x+i, y-1);
        point(x-1, y+i);
        point(x+i, y+size);
        point(x+size, y+i);
    }

    pop();
}

function drawMaskPattern(startX, startY, size, maskPattern) {
    push();

    let maskPatternMatrix = [];
    let draw;

    for (let x = 0; x < size; x++) {
        maskPatternMatrix[x] = [];
        for (let y = 0; y < size; y++) {

            switch (maskPattern) {
                case 0:
                    draw = (x+y) % 2 == 0 ? true : false;
                    break;
                case 1:
                    draw = x % 2 == 0 ? true : false;
                    break;
                case 2:
                    draw = y % 3 == 0 ? true : false;
                    break;
                case 3:
                    draw = (x+y) % 3 == 0 ? true : false;
                    break;
                case 4:
                    draw = (Math.floor(x/2)+Math.floor(y/3)) % 2 == 0 ? true : false;
                    break;
                case 5:
                    draw = ((x*y) % 2) + ((x*y) % 3) == 0 ? true : false;
                    break;
                case 6:
                    draw = ((x*y) % 2) + ((x*y) % 3) % 2 == 0 ? true : false;
                    break;
                case 7:
                    draw = ((x+y) % 2) + ((x*y) % 3) % 2 == 0 ? true : false;
                    break;
            }
            
            if (draw) {
            //if ( (x+y) % 3 == 0) {
                maskPatternMatrix[x][y] = 1;
                stroke('red');
                point(startX+x, startY+y);
            } else {
                maskPatternMatrix[x][y] = 0;
                stroke('white');
                point(startX+x, startY+y);
            }
        }
    }

    pop();
    
    return maskPatternMatrix;
}

function alfanumericCoder(text) {
    let codedString = "";
    let coded = [];

    for (let letter of text) {
        letter = letter.toUpperCase();

        if (letter >= '0' && letter <= '9') {
            coded.push(letter.charCodeAt(0) - 48);
        }
        if (letter >= 'A' && letter <= 'Z') {
            coded.push(letter.charCodeAt(0) - 55);
        }
        switch (letter) {
            case ' ':
                coded.push(36);
                break;
            case '$':
                coded.push(37);
                break;
            case '%':
                coded.push(38);
                break;
            case '*':
                coded.push(39);
                break;
            case '+':
                coded.push(40);
                break;
            case '-':
                coded.push(41);
                break;
            case '.':
                coded.push(42);
                break;
            case '/':
                coded.push(43);
                break;
            case ':':
                coded.push(44);
                break;
        }
    }

    let codedLength = (coded.length % 2 == 0) ? coded.length : coded.length - 1;

    for (let i = 0; i < codedLength; i+=2) {
        let pair = coded[i] * 45 + coded[i+1];
        // convert pair to a binary string
        let binaryPair = (pair >>> 0).toString(2);
        if (binaryPair.length < 11) {
            let missingBits = 11 - binaryPair.length;
            binaryPair = '0'.repeat(missingBits) + binaryPair;
        }
        codedString += binaryPair + " ";
    }

    // coding the last character in 6 bit
    if (coded.length % 2 == 1) {
        let binaryPair = (coded[coded.length-1] >>> 0).toString(2);
        if (binaryPair.length < 6) {
            let missingBits = 6 - binaryPair.length;
            binaryPair = '0'.repeat(missingBits) + binaryPair;
        }
        codedString += binaryPair + " ";
    }

    // add the terminator
    codedString += "0000";
      
    return codedString;
}

function drawFinderPattern(x, y, size) {
    push();

    fill('white');
    square(x, y, 9);
    fill('black');
    square(x+1, y+1, 7);
    fill('white');
    square(x+2, y+2, 5);
    fill('black');
    square(x+3, y+3, 3);

    pop();
}


function drawAlignmentPattern(centerX, centerY) {
    push();

    fill('black');
    square(centerX-2, centerY-2, 5);
    fill('white');
    square(centerX-1, centerY-1, 3);
    fill('black');
    square(centerX, centerY, 1);

    pop();
}

function calculateAllAlignmentPatterns(centerY, version) {

    let stepArray = [];

    // no alignment pattern for version == 1
    if (version != 1) {
        let start = 6;
        let stop = centerY +2;

        let numIntervals = Math.floor(version / 7) +1;
        
        //console.info(`version ${version} start ${start} stop ${stop} numIntervals ${numIntervals}`);

        if (numIntervals > 1) {

            let step = (stop - start) / numIntervals;
            
            let stepFixed = Math.ceil(step);
            
            if (stepFixed % 2 == 1) stepFixed++;

            //console.info(`step ${step} stepFixed ${stepFixed}`);

            for (let i = stop; i > 10; i -= stepFixed) {
                stepArray.push(i);
            }
            stepArray.push(6);
        } else {
            stepArray.push(stop);
            stepArray.push(start);
        }

    }
    //console.dir(stepArray);
    return stepArray;
}

function drawTiming(x, y, size) {
    push();

    fill('black');

    // vertical line
    point(x+6, y+8);
    point(x+6, y+10);
    point(x+6, y+12);
    point(x+6, y+14);
    point(x+6, y+16);

    // orizontal line
    point(x+8,  y+6);
    point(x+10, y+6);
    point(x+12, y+6);
    point(x+14, y+6);
    point(x+16, y+6);

    pop();
}

function drawQrCode(startX, startY, version, maskPattern) {

    let size = 17 +4*version;

    square(startX, startY, size);
    drawMaskPattern(startX, startY, size, maskPattern);

    drawFinderPattern(startX-1, startY-1, size);
    drawFinderPattern(startX+size-8, startY-1, size);
    drawFinderPattern(startX-1, startY+size-8, size);

    let alignments = calculateAllAlignmentPatterns(size-9, version);

    for (let x of alignments) {
        for (let y of alignments) {
            let draw = true;
            draw &= draw && !(x == 6 && y == 6);
            draw &= draw && !(x == size-7 && y == 6);
            draw &= draw && !(x == 6 && y == size-7);

            if (draw) {
                drawAlignmentPattern(startX+x, startY+y);
            }
        }
    }

    drawTiming(startX, startY, size);

    drawCleaningSquare(startX, startY, size);
}

function setup() {
    var canvas = createCanvas(200*5, 200*5);
    canvas.parent('qrCode');
}

function draw() {
    background(180, 180, 180);
    scale(5);
    translate(5, 5);
    
    strokeWeight(0);

    let dati = document.querySelector("#dati").value;
    let codificaInput = document.querySelector("#datiCodificati");

    codificaInput.value = alfanumericCoder(dati);
    
    let maskPattern = document.querySelector("#maskPattern").value;
    maskPattern = parseInt(maskPattern);


    let qrVersion = document.querySelector("#qrVersion").value;
    
    drawQrCode(10, 10, qrVersion, maskPattern);

    /*
    for (version = 1; version <= 40; version ++) {
        let size = 17 +4*version;
        calculateAllAlignmentPatterns(size-9, version);
    }
    */

}
