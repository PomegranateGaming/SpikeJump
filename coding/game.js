function clear() {
ctx.fillStyle = "aqua";
canvasJS.rectangle(0,0,500,500);
  ctx.fillStyle = "green";
  canvasJS.rectangle(0,450,500,50);
}
var y = 250;
var mode = 0;
var x = 0;
yv = 0;
var a = 0;
var go = 0;
function char() {
  if (mode===1) {
  if (x===0) {
   x=600; 
  }
ctx.fillStyle = "red";
  canvasJS.rectangle(50,y,50,50);
  if (y < 400) {
    a = 1;
    yv++;
    y+=yv;
  } else {
    a = 0;
  y=400;
    if (go === 0) {
    yv=0;} else {yv=-20;y-=20;go=0}
    
  }
  for (var i=x-600; i<x+600; i+=300) {
  ctx.fillStyle = "gray";
  canvasJS.rectangle(i,400,50,50);
    if (i<100 && i>0) {
      if (y > 380) {
        mode = 0;
        
      }
    }
  }
  x-=4;
  } else {
  ctx.fillStyle = "blue";
  canvasJS.rectangle(0,0,500,500);
  ctx.fillStyle = "orange";
    ctx.textAlign = "center";
  canvasJS.text.fill("50px Comic Sans MS","SpikeJump",250,210);
  canvasJS.text.fill("30px Comic Sans MS","By Pomegranate Gaming",250,250);
    canvasJS.text.fill("20px Comic Sans MS","Click/Drag(mobile)/Press a button to play.",250,300);
    ctx.fillStyle = "darkblue";
    canvasJS.rectangle(50,350,400,100);
  }
}
var touch = 0;
        window.addEventListener('keydown', function (e) {
              if(a===0) {go = 1;
   a=1;}
        });
window.addEventListener('touchstart', function (e) {
             if(mode===1) { if(a===0) { touch = 1;
   a=1;}} else {
     if(e.touches[0].screenY>350 && e.touches[0].screenY<450 && e.touches[0].screenX>50 && e.touches[0].screenX<450) {
  y = 250;
mode = 1;
x = 0;
yv = 0;
a = 0;
go = 0;
        }
   }
        });
window.addEventListener('touchend', function () {
             if(touch===1) {go = 1; touch=0;
   a=1;}
        });
window.addEventListener('click', function (e) {
              if(mode===1) {if(a===0) {go = 1;
   a=1;}} else {
     if(e.pageY>350 && e.pageY<450 && e.pageX>50 && e.pageX<450) {
   y = 250;
mode = 1;
x = 0;
yv = 0;
a = 0;
go = 0;
        }
   }
        });

setInterval(function(){clear();char();},10);
