function setup() {
  createCanvas(800, 800);
}

function draw() {
  if (mousePressed == true){

    background(255, 0, 0);
    
    if (mouseButton == LEFT){
      
      ellipse (400,400,200);
    
    }
    
    if (mouseButton == RIGHT){
      
      rect (200,200,400,400);
    }
    

} else {

  background(255, 255, 255);
}
}