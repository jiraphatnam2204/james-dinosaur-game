// board
let board;
let boardwidth = 750;
let boardheight = 250;
let context;

// dino
let dinowidth = 88;
let dinoheight = 94;
let dinox = 50;
let dinoy = boardheight - dinoheight; // 156
let dinoimg;

let dino = {
    x: dinox,
    y: dinoy,
    width: dinowidth,
    height: dinoheight
}

// cactus
let cactus_array = [];
let cactus1width = 34;
let cactus2width = 69;
let cactus3width = 102;

let cactusheight = 70;
let cactusx = 700;
let cactusy = boardheight - cactusheight;

let cactus1img;
let cactus2img;
let cactus3img;

// physics
let velocityx = -8;
let velocityy = 0;
let gravity = 0.4;

let gameover = false;
let score = 0;


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

    cactus1img = new Image();
    cactus1img.src = "./img/cactus1.png";

    cactus2img = new Image();
    cactus2img.src = "./img/cactus2.png";

    cactus3img = new Image();
    cactus3img.src = "./img/cactus3.png";

    requestAnimationFrame(update);
    setInterval(placecactus, 1000);
    document.addEventListener("keydown", movedino);
}

function update(){
    requestAnimationFrame(update);
    if(gameover){
        return;
    }
    context.clearRect(0, 0, board.width, board.height);
    
    velocityy += gravity;
    dino.y = Math.min(dino.y+velocityy, dinoy);
    context.drawImage(dinoimg, dino.x, dino.y, dino.width, dino.height);

    for (let i=0; i<cactus_array.length; i++){
        let cactus = cactus_array[i];
        cactus.x += velocityx;
        context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height);
        if(detectcollision(dino, cactus)){
            gameover = true;
            dinoimg.src = "./img/dino-dead.png";
            dinoimg.onload = function(){
                context.drawImage(dinoimg, dino.x, dino.y, dino.width, dino.height);
            }
        }
    }

    context.fillStyle = "black";
    context.font = "20px courier";
    score++;
    context.fillText(score, 5, 20);
}

function movedino(e){
    if(gameover){
        return;
    }
    if((e.code == "Space" || e.code == "ArrowUp") && (dino.y == dinoy)){
        velocityy=-10;
    } else if((e.code=="ArrowDown") && (dino.y == dinoy)){
        // comment
    }
}

function placecactus(){
    let cactus = {
        img: null,
        x: cactusx,
        y: cactusy,
        width: null,
        height: cactusheight
    }

    let place_cactus_chance = Math.random();

    if(place_cactus_chance>0.9){
        cactus.img = cactus3img;
        cactus.width = cactus3width;
        cactus_array.push(cactus);
    } else if(place_cactus_chance>0.7){
        cactus.img = cactus2img;
        cactus.width = cactus2width;
        cactus_array.push(cactus);
    } else if(place_cactus_chance>0.7){
        cactus.img = cactus1img;
        cactus.width = cactus1width;
        cactus_array.push(cactus);
    }

    if(cactus_array.length>5){
        cactus_array.shift;
    }

}

function detectcollision(a, b){
    return a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y;
}