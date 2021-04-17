var pac_man,pacimage,ghost1,ghost1img,ghost2img,ghost3img,ghost4img,ghost2,ghost3,ghost4,ghost5;
var pac_man
var defenders
var pacimg
var bgimg
var take_copter
var copterimg
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4,lives=5;
var score = 0;
var PLAY=1;
var END=0;
var gameState=PLAY;
var lives=5;

//var lives=5;
var heartimg
var i=0;
var livesspr1,livesspr2,livesspr3,livesspr4,livesspr5
var a=1;

function preload()
{
pacimage = loadImage('ghostimage.png');
ghost1img= loadImage('pacman2.png');
ghost2img= loadImage('pacman3.png');
ghost3img= loadImage('pacman4.png');
ghost4img= loadImage('pacman5.png');
heartimg = loadImage("heart.png")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  background('black');
  pac_man = createSprite(70, height/2, 50, 50);
  pac_man.addImage(pacimage);
  pac_man.scale = 0.4;
  obstaclesGroup = new Group()
  livesspr1 = createSprite(displayWidth-200+30,50);
  livesspr2 = createSprite(displayWidth-200+60,50);
  livesspr3 = createSprite(displayWidth-200+90,50);
  livesspr4 = createSprite(displayWidth-200+120,50);
  livesspr5 = createSprite(displayWidth-200+150,50);
    
}

function draw() {
  background('black');  
  pac_man.x=World.mouseX;
  pac_man.y=World.mouseY;
 
  if(obstaclesGroup.isTouching(pac_man))
{
  if(a<=i)
  {
//obstaclesGroup.get(a).velocityX=0;
console.log("a = "+ a);
console.log("i = "+ i);
obstaclesGroup.get(a-1).destroy();
console.log("a = "+ a);
console.log("i = "+ i);
lives=lives-1;
i--;
}
}
if(gameState===PLAY)
{
   spawnObstacles();
}
  //for(i = lives; i>0;i--)
  //{
    
    livesspr1.addImage(heartimg);
    livesspr1.scale = 0.05
    
    livesspr2.addImage(heartimg);
    livesspr2.scale = 0.05
    
    livesspr3.addImage(heartimg);
    livesspr3.scale = 0.05
    
    livesspr4.addImage(heartimg);
    livesspr4.scale = 0.05
    
    livesspr5.addImage(heartimg);
    livesspr5.scale = 0.05
    
    switch (lives)
    {
      case 4 : livesspr5.visible=false; break;
      case 3 : livesspr5.visible=false; livesspr4.visible=false;break;
      case 2 : livesspr5.visible=false; livesspr4.visible=false;livesspr3.visible=false;break;
      case 1 : livesspr5.visible=false; livesspr4.visible=false;livesspr3.visible=false;livesspr2.visible=false;break;
      case 0 : livesspr5.visible=false; livesspr4.visible=false;livesspr3.visible=false;livesspr2.visible=false;livesspr1.visible=false;break;
      default:break
    }
    
    
  //}


  drawSprites();
  //fill('black');
  //textSize(20);
  //text("Lives : " +lives, displayWidth -100,50);
 if (lives===0)
 {
  pac_man.velocityY=0;
  pac_man.velocityX=0;
  obstaclesGroup.destroy();
  gameState=END;
  //gameState=END;
  }
  
}

function spawnObstacles(){
  
  if ((frameCount % 20) === 0){
    var rand2 = Math.round(random(0,displayHeight));
    var obstacle = createSprite(displayWidth,rand2,10,40);
    
    
     //generate random obstacles
     var rand = Math.round(random(3,6));
     switch(rand) {
       case 3: obstacle.addImage(ghost1img);
       obstacle.velocityX = -(6+rand);
               break;
       case 4: obstacle.addImage(ghost2img);
       obstacle.velocityX = -(6+rand);
               break;
       case 5: obstacle.addImage(ghost3img);
       obstacle.velocityX = -(6+rand);
               break;
       case 6: obstacle.addImage(ghost4img);
       obstacle.velocityX = -(6+rand);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.3;
     obstacle.lifetime = displayWidth/obstacle.velocityX;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 }