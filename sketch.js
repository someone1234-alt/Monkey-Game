
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var gameState = PLAY;
var END=0;
var PLAY=1;
  var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  

  createCanvas(400,400);
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width /2;
  console.log(ground.y)

  gameState=PLAY;
obstacleGroup=createGroup();
  foodGroup=createGroup();
}


function draw() {
    background("white");
  if(monkey.isTouching(obstacleGroup)){
    gameState=END;
  }
  if(gameState===PLAY){
  if(keyDown("space")&&monkey.y>=310){
    monkey.velocityY=-20;
  }
    if(monkey.isTouching(foodGroup)){
      foodGroup.destroyEach();
    }
  monkey.velocityY=monkey.velocityY+0.8;
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  monkey.collide(ground)
  food();
  obstacles();
    
    stroke("white");
    textSize(20);
    fill("white");
    text("Score:"+score,500,50)
    
    stroke("black")
     textSize(20);
    fill("black")
    survivalTime=Math.ceil(frameCount/frameRate());
    text("survivalTime:"+survivalTime,100,50);
    
    
  }
  if(gameState===END){
    text("GameOver!",200,200)
    foodGroup.destroyEach();
    obstacleGroup.destroyEach();
    ground.velocityX=0;
    monkey.destroy();
  }
  drawSprites();
}


function food(){
    if(frameCount%80===0){
    banana=createSprite(400,300,20,20);
  banana.addImage(bananaImage);
      banana.scale=0.05;
    banana.velocityX=-3;
     banana.y = Math.round(random(120,200));
    banana.lifetime=150;
      foodGroup.add(banana)
}
}
  function obstacles(){
    if(frameCount%300===0){
      obstacle=createSprite(400,300,20,20);
      obstacle.addImage(obstacleImage);
      obstacle.scale=0.3;
      obstacle.velocityX=-3;
      obstacle.lifetime=150;
      obstacleGroup.add(obstacle);
    }
    
    
    
    
    
    
    
    
    
  }
  
  
  

    




