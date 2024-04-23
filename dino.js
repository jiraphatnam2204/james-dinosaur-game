// board
let board;
let boardwidth = 750;
let boardheight = 250;
let context;

// dino
let dinowidth = 88;
let dinoheight = 94;
let dinox = 50;
let dinoy = boardheight - dinoheight;
let dinoimg;

let dino = {
    x: dinox,
    y: dinoy,
    width: dinowidth,
    height: dinoheight
}

// cactus


window.onload = function(){
    board = document.getElementById("board");
    board.height = boardheight;
    board.width = boardwidth;

    context = board.getContext("2d");
    // context.fillStyle="green";
    // context.fillRect(dino.x, dino.y, dino.width, dino.height);
    dinoimg = new Image();
    dinoimg.src = "./img/dino.png";
    dinoimg.onload = function(){
        context.drawImage(dinoimg, dino.x, dino.y, dino.width, dino.height);
    }
}