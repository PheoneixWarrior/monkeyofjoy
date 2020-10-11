
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage, rb, ro;
var FoodGroup, obstacleGroup
var score = 0;
var land;

function preload(){
  
    FoodGroup = createGroup();
    obstacleGroup = createGroup();

  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600)
  land = createSprite(290, 600, 1300, 50)
  land.shapeColor = "green"
  land.x = land.width /2;

  monkey = createSprite(100, 530, 10, 10);
  monkey.addAnimation("runner", monkey_running)
  monkey.scale = 0.15
  monkey.setCollider("rectangle",0,0,250,monkey.height);
}


function draw() {
  background("lightblue")
  text("Survival Time:"+score, 300, 100)
    score = Math.round(frameCount/frameRate());

    land.velocityX = -4;
  if (land.x < 0){
      land.x = land.width/2;
    }
  
      monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(land);
  if(keyDown("space")&& monkey.y >= 300) {
        monkey.velocityY = -12;
    }

spawnBananas();
  spawnobstacles();

  drawSprites();
}

function spawnBananas(){
  if (frameCount % 100 === 0) {
     banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(320,420));
    banana.addImage(bananaImage);
    banana.scale = 0.08;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 650;
    
    
    
    //adding cloud to the group
   FoodGroup.add(banana);
    }

}

function spawnobstacles(){
  if (frameCount % 100 === 0) {
     obstacle = createSprite(600,550,40,10);
    
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.25;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 650;
    
    
    
    //adding cloud to the group
   obstacleGroup.add(obstacle);
    }

}

