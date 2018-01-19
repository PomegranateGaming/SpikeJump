function clear() {
ctx.fillStyle = "white";
canvasJS.rectangle(0,0,500,500);
}
var y = 250;
function char() {
ctx.fillStyle = "red";
  canvasJS.rectangle(50,y,50,50);
  if (y < 400) {
    y++;
  } else {
  y=400;
  }
}
setInterval(function(){clear();char();},10);
