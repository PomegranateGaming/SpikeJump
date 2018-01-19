function clear() {
ctx.fillStyle = "white";
canvasJS.rectangle(0,0,500,500);
}
var y = 250;
yv = 0;
var a = 0;
function char() {
ctx.fillStyle = "red";
  canvasJS.rectangle(50,y,50,50);
  if (y < 400) {
    yv++;
    y+=yv;
  } else {
  y=400;
    yv=0;
    a = 0;
  }
}
        window.addEventListener('keydown', function (e) {
              if(a===0) { yv=-20;
   a=1;}
        });
setInterval(function(){clear();char();},10);
