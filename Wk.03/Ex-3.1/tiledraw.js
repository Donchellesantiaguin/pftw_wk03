function setup(){
    createCanvas(200, 200);
  }
  
  function createTile() {
    translate(0, 0);
    fill("pink");
    rect(0, 0, 200, 200);  // Background color edit here
  
    // Draw diagonals Aiming)
    stroke("orange");
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    
    // First Heart(top-left)
    drawHeart(50, 50);
  
    // Second Heart(bottom-left)
    drawHeart(50, 150);
  
    // Third Heart(top-right)
    drawHeart(150, 50);
  
    // Fourth Heart(bottom-right)
    drawHeart(150, 150);
    
    // Cupid's Heart Arrow (shooting to top-right)
    drawArrow(50, 100, 150, 50); // Adjust points here
  }
  
  // heart shape function
  function drawHeart(x, y){
    fill("red");
    beginShape();
    vertex(x, y);
    bezierVertex(x - 25, y - 25, x - 25, y + 25, x, y + 50);
    bezierVertex(x + 25, y + 25, x + 25, y - 25, x, y);
    endShape(CLOSE);
  }
  
  // Cupid's heart arrow (Attempt LOL)
  function drawArrow(startX, startY, endX, endY){
    fill("red");
    noStroke();
    
    // Heart arrow tip
    beginShape();
    vertex(endX, endY);
    bezierVertex(endX - 5, endY - 5, endX + 5, endY - 5, endX, endY);
    endShape(CLOSE);
    stroke("gray");
    strokeWeight(3);
    line(startX, startY, endX, endY);
  }
  
  function draw(){
    createTile();
    noLoop();
  }