var change = 0;
var planet1 = 0;
var planet2 = 0;
var planet3 = 0;
  
function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  ellipseMode(CENTER);
 
}

function draw() {
     
  background(0);
  //Rings
  push();
  translate(width/2,height/2);
  noFill();
  stroke(255);
  ellipse(0,0,250);
  ellipse(0,0,350);
  ellipse(0,0,500);
  pop();
  
  //sun
  push();
  translate(width/2,height/2);
  fill(252,212,64);
  noStroke();
  ellipse(0,0,150);
  pop();
  
  //planet1
  push()
  translate(width/2,height/2);
  fill(255);
  noStroke();
  rotate(planet1);
  ellipse(125,0,50);
  pop();
  
  //planet2
  push()
  translate(width/2,height/2);
  fill(12,49,102);
  noStroke();
  rotate(planet2);
  ellipse(175,0,30);
  pop();
  
  //planet3
  push()
  translate(width/2,height/2);
  fill(199,125,78);
  noStroke();
  rotate(planet3);
  ellipse(250,0,80);
  pop(); 

  //rotation change in each planet
  planet1 = planet1 + 3*change;
  planet2 = planet2 + 2*change;
  planet3 = planet3 + change;
  
  textAlign(LEFT);
  stroke('white');
  textSize(30);
  text('Right Click to Start',10,50);
  textSize(30)
  text('Press Any Key to Pause',10,570)
}
 
  
  function mousePressed() {
    change = 1;
  }
  
  function keyPressed() {
    change = 0;
  }
