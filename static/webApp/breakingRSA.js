function breakRSA() {
  let N = document.getElementById("n").value;
  N = Number.parseInt(N);

  let bStart = Math.ceil(Math.sqrt(N)); // FIXME how to with BigInt ??
  let b = bStart;
  let a;
  
  let squareFound = false;
  do {
    let b2 = b*b;
    let a2 = b2 - N;
    a = Math.sqrt(a2); // FIXME how to with BigInt ??
    squareFound = Number.isInteger(a);
    
    scriviRiga(a, a2, b, b2, N, squareFound);

    b++;
  } while (b < bStart +1000 && !squareFound);
  
  b--;

  if (squareFound) {
    let p = Math.abs(a - b);
    let q = Math.abs(a + b);
    document.getElementById("p").value = p;
    document.getElementById("q").value = q;
  }
}

function scriviRiga(a, a2, b, b2, N, squareFound) {

    let codificaElement = document.getElementById("codifica");
    
    let trElem = document.createElement("tr");
    let td1Elem = document.createElement("td");
    let bText = document.createTextNode(b);
    let td2Elem = document.createElement("td");
    let b2Text = document.createTextNode(b2);
    let td3Elem = document.createElement("td");
    let a2Text = document.createTextNode(`${a2} = ${b2} - ${N} = ${b2-N}`);
    let td4Elem = document.createElement("td");
    let aText = document.createTextNode(a);
    let td5Elem = document.createElement("td");
    let squareFoundText = document.createTextNode(squareFound);
    
    td1Elem.appendChild(bText);
    td2Elem.appendChild(b2Text);
    td3Elem.appendChild(a2Text);
    td4Elem.appendChild(aText);
    td5Elem.appendChild(squareFoundText);

    trElem.appendChild(td1Elem);
    trElem.appendChild(td2Elem);
    trElem.appendChild(td3Elem);
    trElem.appendChild(td4Elem);
    trElem.appendChild(td5Elem);
    
    codificaElement.appendChild(trElem);
}

