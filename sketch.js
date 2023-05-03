//The setup function only happens once
var sandy=0

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(238,238,19); //an RGB color for the canvas' background
  //circle
  stroke(0,0,0) // an RGB color for the circle's border
  strokeWeight(2);
  fill(81,216,215,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(mouseX,mouseY,100,75); // center of canvas, 20px dia
  fill(186,103,127,120);
  stroke(184,249,241);
  strokeWeight(5);
  rect(200,100,40,sandy);
  fill(230,149,130);
  textSize(100);
  textFont("Helvetica");
  text('Hello',250,100);
}

function mousePressed() {
if (sandy>=75) 
  {sandy=0} else 
sandy=sandy+5;


}