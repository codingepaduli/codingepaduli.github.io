let tasto='>';
let tentativi=6;

let lunghezza=6;
let parolaSegreta=['a','l','b','e','r','o'];
let parolaIndovinata = ['*', '*', '*', '*', '*', '*'];

function setup() {
  createCanvas(700,500);
  
  // vado al menu di gioco
  tasto='>';
}

function draw() {
  background(250,250,255);

  text(tasto, 20, 20);
  if (tasto == '>') {
    menu();
  }
  if (tasto == '.') {
    classifica();
  }
  if (tasto == '-') {
    gioco();
  }
  if (tasto >= 'a' && tasto <= 'z') {
    gioco();
  }
}

function keyPressed() {
  tasto = key;
}

function menu(){
  textSize(25);
  strokeWeight(4);
  text("L'impiccato",250,20);
  text('Menù di Gioco',250,65);

  // istruzioni laterali
  text('Premi (-) per giocare',340,200);
  text('Premi (.) per la classifica',340,240);
  text('Esci dal gioco',340,280);
  
  ghigliottina0();
  
  // linee tratteggiate della parola da indovinare
  line(360,430,380,430);
  line(395,430,415,430);
  line(430,430,450,430);
  line(465,430,485,430);
  text('C',360,420);
  text('A',430,420);
}

function gioco(){
  
  if (tasto >= 'a' && tasto <= 'z' && tentativi > 0) {
    let letteraPresente=false;
    // cerco la lettera nella parola segreta
    for(let i=0;i<lunghezza;i++){
      if(parolaSegreta[i]==tasto){
        parolaIndovinata[i]=tasto;
        letteraPresente=true;
      }
    }
    // la lettera non è presente
    if(letteraPresente==false){
      tentativi = tentativi - 1;
    }
  }

  textSize(25);
  strokeWeight(4);
  text('Parola da indovinare='+parolaIndovinata,320,370,380,370);

  tasto = '-';
  fill(0,0,0);
  text('Tentativi: ' + tentativi, 500,20);
  
  if(!parolaIndovinata.includes('*')){
    fill(240,20,10);
    textSize(40);
    text("Hai Vinto",120,120);
  }

  if (tentativi == 0) {
    ghigliottina0();

    fill(240,20,10);
    textSize(40);
    text("Hai perso",120,120);
  }
  if (tentativi == 1) {
    ghigliottina1();
  }
  if (tentativi == 2) {
    ghigliottina2();
  }
  if (tentativi == 3) {
    ghigliottina3();
  }
  if (tentativi == 4) {
    ghigliottina4();
  }
  if (tentativi == 5) {
    ghigliottina5();
  }
  if (tentativi == 6) {
    ghigliottina6();
  }
}

function classifica(){
  fill(240,20,10);
  textSize(40);
  strokeWeight(4);
  text('Classifica',275,60);
  line(260,70,460,70);

  // titolo tabella
  textSize(30);
  text('Top five',330,130);

  // tabella, prima colonna
  fill(255,255,255);
  rect(260,140,200,50);
  rect(260,190,200,50);
  rect(260,240,200,50);
  rect(260,290,200,50);
  rect(260,340,200,50);
  // tabella, seconda colonna
  rect(460,140,60,50);
  rect(460,190,60,50);
  rect(460,240,60,50);
  rect(460,290,60,50);
  rect(460,340,60,50);
  
  // classifica
  textSize(25);
  fill(0,20,10);
  text('1) Giocatore 1',270,170);
  text('2) Giocatore 5',270,220);
  text('3) Giocatore 3',270,270);
  text('4) Giocatore 2',270,320);
  text('5) Giocatore 4',270,370);

  // punti
  text('60',465,170);
  text('50',465,220);
  text('30',465,270);
  text('20',465,320);
  text('0',465,370);
}

function ghigliottina0(){
  // gambe omino
  line(230,300,250,360);
  ghigliottina1(); 
}

function ghigliottina1(){
  // gambe omino
  line(230,300,210,360);
  ghigliottina2();
}

function ghigliottina2(){
  // braccia omino
  line(230,250,200,280);
  ghigliottina3();
}

function ghigliottina3(){
  // braccia omino
  line(230,250,260,280);
  ghigliottina4();
}

function ghigliottina4(){
  // corpo omino
  line(230,238,230,300);
  ghigliottina5();
}
  
function ghigliottina5(){
  // testa omino
  circle(230,225,25);
  ghigliottina6();
}
  
function ghigliottina6(){
  // linee della ghigliottina
  line(250,400,65,400);
  line(150,200,150,400);
  line(150,200,230,200);
  line(230,200,230,215);
}
