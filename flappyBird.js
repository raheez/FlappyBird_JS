
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


function draw() {
ctx.drawImage(bg,0,0);
ctx.drawImage(fg,0,cvs.height-fg.height);

ctx.drawImage(bird,bx,by);
ctx.drawImage(pipeNorth,100,0);
ctx.drawImage(pipeSouth,100,constant);

by = by + 1;

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























