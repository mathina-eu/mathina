// funcao usada para desenhar um circulo
function drawCirculo(x,y,r,cor,ctx){
    //var ctx = layer.getContext("2d");
    ctx.fillStyle = cor; // Red color
    ctx.beginPath();
    ctx.ellipse(x,y,r,r,0,0,2*Math.PI,true);
    ctx.fill();
}

function drawTracejado(P1, P2, cor, ctx){
    ctx.strokeStyle = cor;
    ctx.beginPath();
    ctx.setLineDash([5, 10]);
    ctx.moveTo(P1.x,P1.y);
    ctx.lineTo(P2.x,P2.y);
    ctx.stroke();
}

function clearCanvas(canvasId){
    var ctx = canvasId.getContext("2d");
    ctx.clearRect(0,0,canvasId.width,canvasId.height);
}