var begin = [20,50];
var end = [360,320];
var dx = Math.abs(end[0] - begin[0]);
var dy = Math.abs(end[1] - begin[1]);
var s1 = sign(end[0] - begin[0]);
var s2 = sign(end[1] - begin[1]);
var swap = false;
if (dy>dx) {
  temp = dx;
  dx = dy;
  dy = dx;
  swap = true;
}

function sign(val) {
  if(val<0) return -1;
  else if(val>0) return 1;
  else return 0;
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke('white');

  var x = begin[0];
  var y = begin[1];
  
  var p = 2*dy - dx;
  
  point(Math.round(x),Math.round(y));
  console.log(Math.round(x),Math.round(y));
  
  for(let n=1;n<dx;n++) {
    if (p>=0) {
      x = x+s1;
      y = y+s2;
      p = p + 2*(dy-dx);
    }
    else {
      if(swap === true) y=y+s2;
      else x=x+s1
      
      p = p + 2*dy;
    }
    point(Math.round(x),Math.round(y));
    console.log(Math.round(x),Math.round(y));
  }
  
  noLoop();
}