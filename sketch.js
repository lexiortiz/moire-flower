//this is the angle at which the shapes will rotate
let angle = 200;
let paper;
// let petals;
// let middle;
// let bottom;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //switching the angleMode from radians to degrees
  angleMode(DEGREES);
  frameRate(600);
  paper = color('#F8F1FFEF');
  // petals = color('##EFCB68');
  // middle = color('##EE9344');
  // bottom = color('##3F292B');
}

function draw() {
  background("rgba(18, 19, 23, 0.95)");
  noFill();
  stroke(paper);
  strokeWeight(2.1);
  
  
  // Moire Flower
  push(); //change the style and transformation settings 
  //a point of origin for rotation -- the middle of the window screen
  translate(windowWidth/2, windowHeight/2);
  // outer loop
  for(let cycle = 0; cycle < 80; cycle++) {
    rotate(angle * 2);
    circle(100, 100, 60);
  }
  
  // middle loop
  for(let cycle = 0; cycle < 100; cycle++) {
    rotate(angle * 2);
    circle(75, 80, 30);
  }
  
  //inner loop
  for(let cycle2 = 0; cycle2 < 45; cycle2++) {
    rotate(angle * 2);
    circle(40, 40, 100);
  }
  //rotate the shapes at this expression with every iteration
  angle += 0.07;
  pop(); //return to original style and transformation settings
  
  
  
  //Grid Background
  //begin drawing new shape
  beginShape(LINES);
  //these loops draw x and y grid lines for the background
  //the xGrid lines start at 0 and go across the full width of the window screen by incrementing by 10
  for (let xGrid = 0; xGrid <= windowWidth; xGrid += 10) {
    //while the xGrid lines form, the yGrid lines start at 0 and go across the full height of the window screen by incrementing by 1 -- looking more like solid lines than the xGrid lines do
    for (yGrid = 0; yGrid <= windowHeight; yGrid++) {
      strokeWeight(0.07);
      //within the loops, I determined the vertices of the grid lines
      //the yGrid lines are positioned with an increment of one
      vertex(xGrid, yGrid++);
    }
  }
  //end of Grid Background
  endShape();
}
