let rotateBy = 3;
let angle = 5;

function setup(){
  createCanvas(600, 600);
  background(169, 169, 169);
  angleMode(DEGREES);
  textSize(14); // Adjust txt sze here
  fill("hotpink");
  textAlign(CENTER, CENTER);
  text("Press any key to Pause/Play", width / 2, height / 2);

  // Buttons
  let button = createButton("Change Background");
  button.position(10, 10);
  button.mousePressed(repaint);
}

// Change background color here
function repaint(){
  let g = random(255);
  background(169, 169, 169);
}

function makeTriangle(rotation){
  let alt = Math.round(rotation / 360);
  console.log(alt);
  noFill();
  stroke("lightpink");
  strokeWeight(3);
  triangle(300, 50, 50, 100, 550, 375);
}

function makeEllipse(rotation){
  let alt = Math.round(rotation / 360);
  console.log(alt);
  noFill();
  stroke("hotpink");
  strokeWeight(3);
  ellipse(200 / alt, 200 / alt, 150);  // Adjust canvas sze
}

function makeSquare(rotation){
  let alt = Math.round(rotation / 180);
  console.log(alt);
  noFill();
  stroke("pink"); // Set stroke to pink
  strokeWeight(3);
  rect(130 - alt, 90 - alt, 200, 200);
}

function draw(){
  translate(width / 2, height / 2);
  rotate(angle);
  makeEllipse(angle);
  makeTriangle(angle);
  makeSquare(angle);
  angle += rotateBy;
}

function keyPressed(){
    if (isLooping()) {
      noLoop(); // Stops the animation when any key is pressed
    } else {
      loop(); // Starts the animation when the key is pressed again
    }
  }  