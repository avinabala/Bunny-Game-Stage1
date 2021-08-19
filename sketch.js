var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bunny, fox, carrot ;

var bgImg, carrotImg, bunnyImg, foxImg; 

var score;

function preload(){
  bgImg = loadImage("background.png")
  bunnyImg = loadImage("bunny.png")
  carrotImg = loadImage("carrot.png")
  foxImg = loadImage("fox.png")
}

function setup() {
  createCanvas(1000,500);

  bunny = createSprite(100,312,10,10)
  bunny.addImage(bunnyImg)
  bunny.scale = 0.25
}

function draw() {
  background(bgImg);  

  carrotsGroup = createGroup();
  foxGroup = createGroup();

  spawnCarrots();
  spawnFox();

  drawSprites();
}

function spawnCarrots(){
  if (frameCount % 80 === 0){

    var carrots = createSprite(600,350,10,40);
    carrots.velocityX = -2;
    
    //generate random carrots
    carrots.y = Math.round(random(200,250));
    carrots.addImage(carrotImg)
    carrots.scale = 0.05
  }
}

function spawnFox(){
  if (frameCount % Math.round(random(200,800)) === 0){

    var fox = createSprite(600,320,10,40);
    fox.velocityX = -2;
    
    //generate random fox
    fox.x = Math.round(random(700,750));
    fox.addImage(foxImg)
    fox.scale = 0.3
  }
}