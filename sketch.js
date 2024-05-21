function setup() {
    createCanvas(600, 600);
    background(0,160,255);
  }
  
  function draw() {
    stroke("yellow");
    fill("orange");
  
    console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY,10,10);  }
  }
  