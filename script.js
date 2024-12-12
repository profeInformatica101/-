let angle = 0;
let scalar = 20;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('p5-background');
  frameRate(30);
}

function draw() {
  background(0);
  
  // Dibujar un patrón simple con puntos moviéndose en círculo
  translate(width/2, height/2);
  stroke(255);
  noFill();
  
  // Dibujamos múltiples puntos en el círculo rotando con el tiempo
  for (let i = 0; i < 200; i+=10) {
    let x = cos(angle + i) * scalar * i * 0.05;
    let y = sin(angle + i) * scalar * i * 0.05;
    point(x, y);
  }
  
  angle += 0.01;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
