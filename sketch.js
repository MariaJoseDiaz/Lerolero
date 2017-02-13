var cnv;
var d;
var g;
function setup() {
  cnv = createCanvas(100, 100);
  cnv.touchStarted("#e25a93"); // attach listener for
                                // canvas click only
  d = 10;
  g = 100;
}

function draw() {
  background(g);
  ellipse(width/2, height/2, d, d);
}
