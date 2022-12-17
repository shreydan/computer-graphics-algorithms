var begin = [20,50];
var end = [360,320];
var steps;
var dx = Math.abs(end[0] - begin[0]);
var dy = Math.abs(end[1] - begin[1]);
if (dx > dy) steps = dx;
else steps = dy;
var xinc = dx/steps;
var yinc = dy/steps;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke('white');
  var x = begin[0];
  var y = begin[1];
  point(Math.round(x),Math.round(y));
  console.log(Math.round(x),Math.round(y));
  for(let i=0;i<steps;i++) {
    x = x+xinc;
    y = y+yinc;
    point(Math.round(x),Math.round(y));
    console.log(Math.round(x),Math.round(y));
  }
  noLoop();
}
