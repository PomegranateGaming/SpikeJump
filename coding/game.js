function clear() {
ctx.fillStyle = "white";
canvasJS.rectangle(0,0,500,500);
}
var y = 250;
var x = 0;
yv = 0;
var a = 0;
var go = 0;
function char() {
  if (x===0) {
   x=600; 
  }
ctx.fillStyle = "red";
  canvasJS.rectangle(50,y,50,50);
  if (y < 400) {
    yv++;
    y+=yv;
  } else {
  y=400;
    if (go === 0) {
    yv=0;} else {yv=-20;y-=20;go=0}
    a = 0;
  }
  for (var i=x-600; i<x+600; i+=300) {
  ctx.fillStyle = "gray";
  canvasJS.rectangle(i,400,50,50);
    if (i<100 && i>50) {
      if (y > 350) {
        alert("game over");
      }
    }
  }
  x-=4;
}
        window.addEventListener('keydown', function (e) {
              if(a===0) { go = 1;
   a=1;}
        });
window.addEventListener('touchstart', function () {
              if(a===0) { go = 1;
   a=1;}
        });
window.addEventListener('click', function () {
              if(a===0) { go = 1;
   a=1;}
        });

setInterval(function(){clear();char();},10);
