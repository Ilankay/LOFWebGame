
const gCanvas = {height:500,width:500,dHeight:"50%",dWidth:"50%"}

function initGame(){
    const gameDiv = document.getElementById("game-div");
    const canvas = document.createElement("canvas");
    canvas.setAttribute("id","myCanvas");
    gameDiv.style.height = 
    canvas.setAttribute("height",gCanvas.height);
    canvas.setAttribute("width",gCanvas.width);
    gameDiv.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    gameLoop(ctx,canvas);
}
function gameLoop(ctx,canvas){
    //here is where you check all of the stuff that is happeining in the game
    drawGame(ctx);
    requestAnimationFrame(gameLoop.bind(null,ctx,canvas));
}
function eventListeners(canvas){

}
function drawGame(ctx){
    ctx.fillStyle='red';
    ctx.fillRect(0,0,gCanvas.width,gCanvas.height);
    ctx.fill();
}