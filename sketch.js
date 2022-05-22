//this is the angle at which the shapes will rotate
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //switching the angleMode from radians to degrees
  angleMode(DEGREES);
}

function draw() {
  background(46, 46, 46); // color: ink
  noFill();
  stroke(252, 255, 252); // color: white
  strokeWeight(2);
  // Moire Flower
  push(); //change the style and transformation settings 
  //a point of origin for rotation -- the middle of the window screen
  translate(windowWidth/2, windowHeight/2);
  //these loops draw and rotate the circles that create the dancing flower 
  //outer two loops
  for(let cycle = 0; cycle < 30; cycle++) {
    rotate(angle);
    circle(100, 100, 60);
    circle(60, 60, 90);
  } 
  //inner loop
  for(let cycle2 = 0; cycle2 < 45; cycle2++) {
    rotate(angle);
    circle(40, 40, 100);
  }
  //rotate the shapes at this expression with every iteration
  angle += .07;
  pop(); //return to original style and transformation settings 

  //Grid Background
  //begin drawing new shape
  beginShape(LINES);
  //these loops draw x and y grid lines for the background
  //the xGrid lines start at 0 and go across the full width of the window screen by incrementing by 10
  for (let xGrid = 0; xGrid <= windowWidth; xGrid += 10) {
    //while the xGrid lines form, the yGrid lines start at 0 and go across the full height of the window screen by incrementing by 1 -- looking more like solid lines than the xGrid lines do
    for (yGrid = 0; yGrid <= windowHeight; yGrid++) {
      strokeWeight(.07);
      //within the loops, I determined the vertices of the grid lines
      //the yGrid lines are positioned with an increment of one
      vertex(xGrid, yGrid++);
    }
  }
  //end of Grid Background
  endShape();
}

