var PLAY = 1;
var END = 0;
var gameState = PLAY;

// tela de inicio
var backHome, backHomeImg;
var playButton, playButtonImg, playButtonCrash = 0;

// tela de escolha de fases
var backMap, backMapImg;
var fase1, fase1Img, fase1Crash = 1; var checkFase1 = false;
var fase2, fase2Img, fase2Crash = 0;
var fase3, fase3Img, fase3Crash = 0;

// carregar personagens de jogo
var Citra, CitraImg, citraMoving, citraMovingImg, checkMoving = 0;

// tela da fase 1
var backFase1, backFase1Img;
var plataformFase1, plataformFase1Img;
var cheeck = 0;
function preload(){

// tela de inicio
backHomeImg = loadImage("home.png");
playButtonImg = loadImage("play.png");

// tela de escolha de fases
backMapImg = loadImage("map.png");
fase1Img = loadImage("fase1.png");

// carregar personagens de jogo
CitraImg = loadImage("citra.png");
citraMovingImg = loadImage("citraMoving.gif");
// tela da fase 1
backFase1Img = loadImage("fasee1.png");


}

function setup(){
createCanvas(600,400);
// tela de inicio
playButton = createSprite(300,250,200,50);
playButton.addImage(playButtonImg);
playButton.scale = 3;

backHome = createSprite(300,200,600,400);
backHome.addImage(backHomeImg);
backHome.scale = 1.5;
backHome.depth = -1;

// tela de escolha de fase
backMap = createSprite(300,200,600,400);
backMap.addImage(backMapImg);
backMap.scale = 1.1;
backMap.visible = false;

fase1 = createSprite(100,340,80,80)
fase1.addImage(fase1Img);
fase1.scale = 0.75;
fase1.visible = false;

// tela da fase 1

}

function draw() {
 background(0);
 // tela de inicio
if(mousePressedOver(playButton) && playButtonCrash === 0){
  playButton.visible = false;
  backHome.visible = false;
  chossefase();
  playButtonCrash = 1;
  fase1Crash = 0;
}
// tela de escolha de fase
if(mousePressedOver(fase1) && fase1Crash === 0){
  backMap.visible = false;
  fase1.visible = false;
  fase1Start();
  fase1Crash = 1;
}
// tela da fase 1
cheeck = 1;

if(keyDown("right")){
  Citra.x = Citra.x + 3;  
}
if(keyDown("left")){
  Citra.x = Citra.x - 3;
}
if(keyDown("space")){
  Citra.velocityY = -12;
}
Citra.velocityY = Citra.velocityY + 0.7;
 drawSprites();
}
function chossefase(){
  backMap.visible = true;
  fase1.visible = true;  
}

function fase1Start(){
  backFase1 = createSprite(300,200,600,400)
  backFase1.addImage(backFase1Img);
  backFase1.scale = 6.5;

  Citra = createSprite(75,350,70,90)
  Citra.addImage(CitraImg);
  Citra.scale = 0.2

  citraMoving = createSprite(200,200,100,100);
  citraMoving.addImage(citraMovingImg);
  citraMoving.scale = 2.2;
  citraMoving.visible = false;
  citraMoving.depth = 6;

  plataformFase1 = createSprite(75,380,300,10);
}
