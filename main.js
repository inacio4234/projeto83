var lastPositionX, lastPositionY;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "blue";
line = 1;

var width = screen.width;
newWidth = screen.width - 70;
newHeight = screen.height - 300;
if(width < 992)
{
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", myTouchStart);

function myTouchStart(e){
    color = document.getElementById("color").value;
    line = document.getElementById("line").value;
    lastPositionX = e.touches[0].cilentX - canvas.offsetLeft;
    lastPositionY = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", myTouchMove)

function myTouchMove(e){
    PositionTouchX = e.touches[0].clientX - canvas.offsetLeft;
    PositionTouchY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.lineWidth = line;
    ctx.moveTo(lastPositionX, lastPositionY);
    ctx.lineTo(PositionTouchX, PositionTouchY);
    ctx.stroke(); 
    lastPositionX = PositionTouchX;
    lastPositionY = PositionTouchY;
}




function limpar(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
}
