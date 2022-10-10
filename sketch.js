var PLAY = 1;
var END = 0;
var PAUSE = 0;
var gameState = PLAY;

var mario, mario_correndo;
var koopa, koopa_correndo;
var goomba;
var chao
var nuvens
var nuvensGroup

function preload(){
chaoimg = loadImage("chao.png");
koopa_img = loadAnimation("koopa.png","koopa_andando.png");
goomba_img = loadAnimation("goomba.png", "goomba_andando.png");
mario_img = loadAnimation("Mario.png", "Mario_correndo1.png","Mario_correndo2.png");

}

function setup() {
 chao = createSprite(400, 365, 100, 100);
 chao.addImage(chaoimg);
 mario = createSprite(50, 309, 100, 100);
 mario.addAnimation("mario_correndo", mario_img);

}

function draw() {
 background(180);
    
  

 if (gameState === PLAY) {
   if(World.frameCount % 60 === 0) {
   
      }

      if(World.frameCount % 60 === 0) {
   if (mario.isTouching(goomba, koopa)) {
    gameState = END;
   
  koopa = createSprite(400, 310, 100, 100);
  koopa.addAnimation("koopa_run", koopa_img);
  koopa.scale = 1;
  koopa.velocityX = -5

  goomba = createSprite(400, 320, 100, 100);
  goomba.addAnimation("goomba_run", goomba_img);
  goomba.scale = 1;
  goomba.velocityX = -5
  }

   chao.velocityX = -5

   
   }

 }

 if(gameState === END) {
  console.log("CABoooooooooooooU")
 }

 if (chao.x < 0) {
    chao.x = chao.width/2; 
 }
 
 



 drawSprites();
}

