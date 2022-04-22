// Copiato da Wikipedia
// https://it.wikipedia.org/wiki/Algoritmo_di_Euclide
function MCD(a, b) {
    let r;
    while(b != 0) {//ripetere finché non riduciamo a zero
         r = a % b;
         a = b;
         b = r; //scambiamo il ruolo di a e b
    }
    return a; //... e quando b è (o è diventato) 0, il risultato è a
}

// a coprimo b se (a, b) non hanno divisori comune eccetto 1
// cioè se il massimo comune divisore di (a, b) è 1.
function generaCoprimo(inizio, num) {
    let coprimo = -1n;

    // parto da inizio (da 2)
    let x = inizio;
    do {
        // verifico se x è coprimo di num
        if (MCD(x,num) == 1) {
            coprimo=x;
        }

        // se non e' coprimo, passo al successivo
        x ++;
    } while (x<num && coprimo == -1n);
    return coprimo;
}

// a e b sono congruenti modulo n se (a-b) è un multiplo di n
// in RSA (d*e) - 1 è multiplo di f
// Devo quindi cercare un k tale che k*f + 1 modulo e sia ZERO
function generaCongruente(start, e, f) {
    let d = -1n;

    let k = start;

    do {
        let mod = (k * f +1n) % e;

        if (mod == 0) {
            d = (k * f +1n) / e;
        }

        // se non e' congruente, passo al successivo
        k ++;
    } while (k < 1000 && d == -1n);
    return d;
}

function congruenteSuccessivo() {
    let coprimoString = document.getElementById("coprimo").value;
    let pString = document.getElementById("p").value;
    let qString = document.getElementById("q").value;

    let p = BigInt(pString);
    let q = BigInt(qString);
    let e = BigInt(coprimoString);
    let f = (p-1n) * (q-1n);

    let d = generaCongruente(e, e, f); // congruente partendo da e

    if (d != -1n) {
      document.getElementById("congruente").value = d;
      document.getElementById("privataD").value = d;
    }
}

function codificaArray(values, chiave1, chiave2) {
    console.log(typeof chiave1 === 'bigint');
    console.log(typeof chiave2 === 'bigint');

    let codedValues = [];

    for (let value of values) {
      console.log(typeof value === 'bigint');

      let codedVal = value ** chiave1 % chiave2;
      codedValues.push(codedVal);
    }
    return codedValues;
}

function codificaMessaggio() {
  // input
  let message = document.getElementById("messaggio").value;
  let eString = document.getElementById("pubblicaE").value;
  let nString = document.getElementById("pubblicaN").value;
  let dString = document.getElementById("privataD").value;

  let e = BigInt(eString);
  let n = BigInt(nString);
  let d = BigInt(dString);

  let chars = message.split('');

  // converto ogni carattere in codice ascii (numerico)
  let values = [];
  let asciiCode = null;
  for (let c of chars) {
      asciiCode = BigInt(c.charCodeAt(0) - 96);
      values.push(asciiCode);
  }
  let codedValues = codificaArray(values, e, n);

  let decodedValues = codificaArray(codedValues, d, n);

  // output
  let codificaElement = document.getElementById("codifica");

  for (let i=0; i<chars.length; i++) {
      let c = chars[i];
      let asciiCode = values[i];
      let codedAscii = codedValues[i];
      let decodedAscii = decodedValues[i];
      let trElem = document.createElement("tr");
      let td1Elem = document.createElement("td");
      let char = document.createTextNode(c);
      let td2Elem = document.createElement("td");
      let ascii = document.createTextNode(asciiCode);
      let td3Elem = document.createElement("td");
      let codedPow = document.createTextNode(`${asciiCode} ^ ${e} = ${asciiCode ** e}`);
      let td4Elem = document.createElement("td");
      let codedVal = document.createTextNode(`${asciiCode} ^ ${e} % ${n} = ${codedAscii}`);
      let td5Elem = document.createElement("td");
      let decodedPow = document.createTextNode(`${codedAscii} ^ ${d} = ${(codedAscii ** d).toLocaleString()}`);
      let td6Elem = document.createElement("td");
      let decodedVal = document.createTextNode(`${codedAscii} ^ ${d} % ${n} = ${decodedAscii}`);

      td1Elem.appendChild(char);
      td2Elem.appendChild(ascii);
      td3Elem.appendChild(codedPow);
      td4Elem.appendChild(codedVal);
      td5Elem.appendChild(decodedPow);
      td6Elem.appendChild(decodedVal);

      trElem.appendChild(td1Elem);
      trElem.appendChild(td2Elem);
      trElem.appendChild(td3Elem);
      trElem.appendChild(td4Elem);
      trElem.appendChild(td5Elem);
      trElem.appendChild(td6Elem);

      codificaElement.appendChild(trElem);
  }
}

function calcolaChiavi() {
  // input
  let pString = document.getElementById("p").value;
  let qString = document.getElementById("q").value;

  let p = BigInt(pString);
  let q = BigInt(qString);

  let n = p*q;
  let f = (p-1n) * (q-1n);

  let e = generaCoprimo(2n, f); // coprimo partendo da 1
  let d = generaCongruente(1n, e, f); // congruente partendo da 1

  document.getElementById("n").value = n;
  document.getElementById("f").value = f;
  document.getElementById("coprimo").value = e;
  document.getElementById("congruente").value = d;

  if (e != -1n && d != -1n) {
    document.getElementById("pubblicaE").value = e;
    document.getElementById("pubblicaN").value = n;
    document.getElementById("privataD").value = d;
    document.getElementById("privataN").value = n;
  }
}
