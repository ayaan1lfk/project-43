
var hr,mn,sc;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  //caliculate time using frefered func form p5.js;
  hr = hour();
  mn = minute();
  sc = second();
  angleMode(12);
}

function draw() {
  background(255,255,255); 
  scAngle = map(sc,0,60,0,360);
  //creating lines
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0)
  
  map();
  drawSprites();
}