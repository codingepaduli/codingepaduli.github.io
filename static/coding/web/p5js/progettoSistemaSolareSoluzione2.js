let sole={
  x:800,
  y:800,
  r:100
};

let mercurio={
  x:0,
  y:0,
  r:25,
  distanzaSole:80,
  alfaSole:0
};

let venere={
  x:0,
  y:0,
  r:35,
  distanzaSole:140,
  alfaSole:0
};

let terra={
  x:0,
  y:0,
  r:35,
  distanzaSole:210,
  alfaSole:0
};

let marte={
  x:0,
  y:0,
  r:35,
  distanzaSole:280,
  alfaSole:0
};

// fascia principale degli asteroidi

let giove={
  x:0,
  y:0,
  r:55,
  distanzaSole:400,
  alfaSole:0
};

let saturno={
  x:0,
  y:0,
  r:50,
  distanzaSole:520,
  alfaSole:0
};

let urano={
  x:0,
  y:0,
  r:40,
  distanzaSole:640,
  alfaSole:0
};

let nettuno={
  x:0,
  y:0,
  r:35,
  distanzaSole:710,
  alfaSole:0
};

let luna={
  x:0,
  y:0,
  r:10,
  distanzaTerra:40,
  alfaTerra:0
};

let lunaSaturno1={
  x:0,
  y:0,
  r:10,
  distanzaSaturno:60,
  alfaSaturno:0
};

let lunaSaturno2={
  x:0,
  y:0,
  r:10,
  distanzaSaturno:60,
  alfaSaturno:30
};

let lunaSaturno3={
  x:0,
  y:0,
  r:10,
  distanzaSaturno:60,
  alfaSaturno:60
};

let lunaSaturno4={
  x:0,
  y:0,
  r:10,
  distanzaSaturno:60,
  alfaSaturno:90
};

let lunaSaturno5={
  x:0,
  y:0,
  r:10,
  distanzaSaturno:60,
  alfaSaturno:120
};

let lunaSaturno6={
  x:0,
  y:0,
  r:10,
  distanzaSaturno:60,
  alfaSaturno:150
};

let lunaSaturno7={
  x:0,
  y:0,
  r:10,
  distanzaSaturno:60,
  alfaSaturno:180
};

let lunaSaturno8={
  x:0,
  y:0,
  r:10,
  distanzaSaturno:60,
  alfaSaturno:210
};

let lunaSaturno9={
  x:0,
  y:0,
  r:10,
  distanzaSaturno:60,
  alfaSaturno:240
};

let lunaSaturno10={
  x:0,
  y:0,
  r:10,
  distanzaSaturno:60,
  alfaSaturno:270
};

let canvas;

function setup() {
  canvas = createCanvas(800, 600);
  canvas.parent('solarSystem');
  angleMode(DEGREES);
}

function draw() {
  background(0,0,0);

  scale(0.4);

  fill(255,40,40);
  circle(sole.x,sole.y,sole.r);
  
  fill(200,150,30);
  mercurio.x= sole.x+mercurio.distanzaSole*cos(mercurio.alfaSole);
  mercurio.y=sole.y+mercurio.distanzaSole*sin(mercurio.alfaSole);
  circle(mercurio.x,mercurio.y,mercurio.r);
  mercurio.alfaSole=mercurio.alfaSole-5.7;
  
  fill(250,250,240);
  venere.x=sole.x+venere.distanzaSole*cos(venere.alfaSole);
  venere.y=sole.y+venere.distanzaSole*sin(venere.alfaSole);
  circle(venere.x,venere.y,venere.r);
  venere.alfaSole=venere.alfaSole+1.6;
  
  fill(10,10,200);
  terra.x=sole.x+terra.distanzaSole*cos(terra.alfaSole);
  terra.y=sole.y+terra.distanzaSole*sin(terra.alfaSole);
  circle(terra.x,terra.y,terra.r);
  terra.alfaSole=terra.alfaSole+0.7;
  
  fill(255,165,0);
  marte.x=sole.x+marte.distanzaSole*cos(marte.alfaSole);
  marte.y=sole.y+marte.distanzaSole*sin(marte.alfaSole);
  circle(marte.x,marte.y,marte.r);
  marte.alfaSole=marte.alfaSole-0.4;
  
  fill(255,80,80);
  giove.x=sole.x+giove.distanzaSole*cos(giove.alfaSole);
  giove.y=sole.y+giove.distanzaSole*sin(giove.alfaSole);
  circle(giove.x,giove.y,giove.r);
  giove.alfaSole=giove.alfaSole+0.3;
  
  fill(255,180,255);
  saturno.x=sole.x+saturno.distanzaSole*cos(saturno.alfaSole);
  saturno.y=sole.y+saturno.distanzaSole*sin(saturno.alfaSole);
  circle(saturno.x,saturno.y,saturno.r);
  saturno.alfaSole=saturno.alfaSole-2.2;
  
  fill(150,255,205);
  urano.x=sole.x+urano.distanzaSole*cos(urano.alfaSole);
  urano.y=sole.y+urano.distanzaSole*sin(urano.alfaSole);
  circle(urano.x,urano.y,urano.r);
  urano.alfaSole=urano.alfaSole+1.1;
  
  fill(0,50,100);
  nettuno.x=sole.x+nettuno.distanzaSole*cos(nettuno.alfaSole);
  nettuno.y=sole.y+nettuno.distanzaSole*sin(nettuno.alfaSole);
  circle(nettuno.x,nettuno.y,nettuno.r);
  nettuno.alfaSole=nettuno.alfaSole+1;
  
  fill(160,160,160);
  luna.x=terra.x+luna.distanzaTerra*cos(luna.alfaTerra);
  luna.y=terra.y+luna.distanzaTerra*sin(luna.alfaTerra);
  circle(luna.x,luna.y,luna.r);
  luna.alfaTerra=luna.alfaTerra+6;
  
  fill(160,160,160);
  lunaSaturno1.x=saturno.x+lunaSaturno1.distanzaSaturno*cos(lunaSaturno1.alfaSaturno);
  lunaSaturno1.y=saturno.y+lunaSaturno1.distanzaSaturno*sin(lunaSaturno1.alfaSaturno);
  circle(lunaSaturno1.x,lunaSaturno1.y,lunaSaturno1.r);
  lunaSaturno1.alfaSaturno=lunaSaturno1.alfaSaturno+4;
  
  fill(160,160,160);
  lunaSaturno2.x=saturno.x+lunaSaturno2.distanzaSaturno*cos(lunaSaturno2.alfaSaturno);
  lunaSaturno2.y=saturno.y+lunaSaturno2.distanzaSaturno*sin(lunaSaturno2.alfaSaturno);
  circle(lunaSaturno2.x,lunaSaturno2.y,lunaSaturno2.r);
  lunaSaturno2.alfaSaturno=lunaSaturno2.alfaSaturno+4;
  
  fill(160,160,160);
  lunaSaturno3.x=saturno.x+lunaSaturno3.distanzaSaturno*cos(lunaSaturno3.alfaSaturno);
  lunaSaturno3.y=saturno.y+lunaSaturno3.distanzaSaturno*sin(lunaSaturno3.alfaSaturno);
  circle(lunaSaturno3.x,lunaSaturno3.y,lunaSaturno3.r);
  lunaSaturno3.alfaSaturno=lunaSaturno3.alfaSaturno+4;
  
  fill(160,160,160);
  lunaSaturno4.x=saturno.x+lunaSaturno4.distanzaSaturno*cos(lunaSaturno4.alfaSaturno);
  lunaSaturno4.y=saturno.y+lunaSaturno4.distanzaSaturno*sin(lunaSaturno4.alfaSaturno);
  circle(lunaSaturno4.x,lunaSaturno4.y,lunaSaturno4.r);
  lunaSaturno4.alfaSaturno=lunaSaturno4.alfaSaturno+4;
  
  fill(160,160,160);
  lunaSaturno5.x=saturno.x+lunaSaturno5.distanzaSaturno*cos(lunaSaturno5.alfaSaturno);
  lunaSaturno5.y=saturno.y+lunaSaturno5.distanzaSaturno*sin(lunaSaturno5.alfaSaturno);
  circle(lunaSaturno5.x,lunaSaturno5.y,lunaSaturno5.r);
  lunaSaturno5.alfaSaturno=lunaSaturno5.alfaSaturno+4;
  
  fill(160,160,160);
  lunaSaturno6.x=saturno.x+lunaSaturno6.distanzaSaturno*cos(lunaSaturno6.alfaSaturno);
  lunaSaturno6.y=saturno.y+lunaSaturno6.distanzaSaturno*sin(lunaSaturno6.alfaSaturno);
  circle(lunaSaturno6.x,lunaSaturno6.y,lunaSaturno6.r);
  lunaSaturno6.alfaSaturno=lunaSaturno6.alfaSaturno+4;
  
  fill(160,160,160);
  lunaSaturno7.x=saturno.x+lunaSaturno7.distanzaSaturno*cos(lunaSaturno7.alfaSaturno);
  lunaSaturno7.y=saturno.y+lunaSaturno7.distanzaSaturno*sin(lunaSaturno7.alfaSaturno);
  circle(lunaSaturno7.x,lunaSaturno7.y,lunaSaturno7.r);
  lunaSaturno7.alfaSaturno=lunaSaturno7.alfaSaturno+4;
  
  fill(160,160,160);
  lunaSaturno8.x=saturno.x+lunaSaturno8.distanzaSaturno*cos(lunaSaturno8.alfaSaturno);
  lunaSaturno8.y=saturno.y+lunaSaturno8.distanzaSaturno*sin(lunaSaturno8.alfaSaturno);
  circle(lunaSaturno8.x,lunaSaturno8.y,lunaSaturno8.r);
  lunaSaturno8.alfaSaturno=lunaSaturno8.alfaSaturno+4;
  
  fill(160,160,160);
  lunaSaturno9.x=saturno.x+lunaSaturno9.distanzaSaturno*cos(lunaSaturno9.alfaSaturno);
  lunaSaturno9.y=saturno.y+lunaSaturno9.distanzaSaturno*sin(lunaSaturno9.alfaSaturno);
  circle(lunaSaturno9.x,lunaSaturno9.y,lunaSaturno9.r);
  lunaSaturno9.alfaSaturno=lunaSaturno9.alfaSaturno+4;
  
  fill(160,160,160);
  lunaSaturno10.x=saturno.x+lunaSaturno10.distanzaSaturno*cos(lunaSaturno10.alfaSaturno);
  lunaSaturno10.y=saturno.y+lunaSaturno10.distanzaSaturno*sin(lunaSaturno10.alfaSaturno);
  circle(lunaSaturno10.x,lunaSaturno10.y,lunaSaturno10.r);
  lunaSaturno10.alfaSaturno=lunaSaturno10.alfaSaturno+4;
}