
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


var bird = new Image();
var bg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();
var fg = new Image();

bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";
bird.src = "images/bird.png";



var gap = 85;
var constant = pipeNorth.height+ gap;
var bx = 10;
var by = 150;
var gravity = 1.5;


var pipe = [];
pipe[0] = {
    x : cvs.width,
    y : 0
};

document.addEventListener("keydown",moveup);
function moveup() {
    by -=25;
}

function draw() {
ctx.drawImage(bg,0,0);

ctx.drawImage(bird,bx,by);

for (let i = 0; i < pipe.length; i++) {
    ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
    ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+ constant);
    pipe[i].x -= 1;

    if (pipe[i].x==105) {
        pipe.push({
            x:cvs.width,
            y:Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
        })
    }
}

ctx.drawImage(fg,0,cvs.height-fg.height);

by = by + gravity;


requestAnimationFrame(draw);

}

draw();
// //------------------------------------------------------
//copied code.






// var cvs = document.getElementById("canvas");
// var ctx = cvs.getContext("2d");

// // // load images

// var bird = new Image();
// var bg = new Image();
// var fg = new Image();
// var pipeNorth = new Image();
// var pipeSouth = new Image();

// bird.src = "images/bird.png";
// bg.src = "images/bg.png";
// fg.src = "images/fg.png";
// pipeNorth.src = "images/pipeNorth.png";
// pipeSouth.src = "images/pipeSouth.png";


// function draw(){
    
//     ctx.drawImage(bg,0,0);
    
    
//     requestAnimationFrame(draw);
    
// }

// draw();























