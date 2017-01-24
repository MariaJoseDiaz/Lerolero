

 
   function drawEllipse(myWidht, myheight, r, g, b) {
    fill(r, g, b);
    noStroke()
    ellipse(random(0, width), random(0, height), myWidht, myheight);
    frameRate(7)
  }
  
  function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(237, 34, 93);
  fill(0);

    if (mouseButton == LEFT === true){
       drawEllipse(45, 45, 45, 168, 143);
       
   } else { (mouseButton == RIGHT === false)
      //   drawEllipse(130, 30, 147, 168, 45);
   
 //  if (false === (237, 34, 93) ){
   //   drawEllipse(130, 30, 147, 168, 45);
  // }
   
   
     fill(255)
}
  }