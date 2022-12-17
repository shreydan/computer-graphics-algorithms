var r = 100;

var x = 0;
var y = r;
var p = 1-r; // decision parameter

var a=400/2; // x-centre
var b=400/2; // y-centre

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(10);
  strokeWeight(2);
  
  point(a, b+r);    
  point(a, b-r);  
  point(a-r, b);  
  point(a+r, b);  
  
  while(x<y) {
    if(p<0) {
      p+= 2*x + 3;
    }
    else {
      p+=2*(x-y) + 5;
      y--;
    }
    x++;
    
    stroke('lightblue');
    point(a+x,b-y); // 1 octet
    stroke('red');
    point(a+y,b-x); // 2 octet
    stroke('blue');
    point(a+y,b+x); // 3 octet
    stroke('yellow');
    point(a+x,b+y); // 4 octet
    stroke('orange');
    point(a-x,b+y); // 5 octet
    stroke('lightgreen');
    point(a-y,b+x); // 6 octet
    stroke('pink');
    point(a-y,b-x); // 7 octet
    stroke('purple');
    point(a-x,b-y); // 8 octet
    
  }
  noLoop();
}