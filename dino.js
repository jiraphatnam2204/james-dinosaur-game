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
}

function update(){
    requestAnimationFrame(update);
    
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

    

}