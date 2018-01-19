function clear() {
ctx.fillStyle = "white";
canvasJS.rectangle(0,0,500,500);
}
var y = 250;
var yv = 0;
function char() {
ctx.fillStyle = "red";
  canvasJS.rectangle(50,y,50,50);
  if (y < 400) {
    yv++;
    y+=yv;
  } else {
  y=400;
    yv=0;
  }
}
c.addEventListener("click", function(){
    yv=-20;
});
setInterval(function(){clear();char();},10);
