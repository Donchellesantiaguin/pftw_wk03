function setup() {
    createCanvas(600, 600);
  }
  
  function createTile(originX, originY, primaryColor, secondaryColor){
    push();
    translate(originX, originY);
    fill(primaryColor);
    rect(0, 0, 200, 200);
  

    stroke("orange");
    strokeWeight(5);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
  

    drawHeart(50, 50, secondaryColor);
    drawHeart(50, 150, secondaryColor);
    drawHeart(150, 50, secondaryColor);
    drawHeart(150, 150, secondaryColor);
  
    drawArrow(50, 100, 150, 50);
    
    pop();
  }
  
  function drawHeart(x, y, color){
    fill(color);
    beginShape();
    vertex(x, y);
    bezierVertex(x - 25, y - 25, x - 25, y + 25, x, y + 50);
    bezierVertex(x + 25, y + 25, x + 25, y - 25, x, y);
    endShape(CLOSE);
  }
  

  function drawArrow(startX, startY, endX, endY){
    fill("red");
    noStroke();
  
    beginShape();
    vertex(endX, endY);
    bezierVertex(endX - 5, endY - 5, endX + 5, endY - 5, endX, endY);
    endShape(CLOSE);
    
    stroke("gray");
    strokeWeight(3);
    line(startX, startY, endX, endY);
  }
  
  function draw(){
    // Create 9 tiles with different colors in a 3x3 grid
    createTile(0, 0, "red", "pink");
    createTile(200, 0, "pink", "purple");
    createTile(400, 0, "purple", "red");
    
    createTile(0, 200, "magenta", "cyan");
    createTile(200, 200, "cyan", "magenta");
    createTile(400, 200, "yellow", "green");
    
    createTile(0, 400, "green", "blue");
    createTile(200, 400, "blue", "yellow");
    createTile(400, 400, "orange", "brown");
  }  