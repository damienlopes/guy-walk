var guy, guyrun
var road, roadimage

function preload(){
  guyrun = loadAnimation("Runner-1.png","Runner-2.png");
  roadimage = loadImage("path.png");
}

function setup(){
  createCanvas(270,500);

  road = createSprite(130, 350, 600,10)
  road.addImage("road", roadimage)
  road.scale = 1
  road.velocityY = 8

  guy = createSprite(100,400,20,50);
  guy.addAnimation("running", guyrun);
  guy.scale = 0.04

  inwall1 = createSprite(265,300, 2, 600)
  inwall2 = createSprite(0,300, 5, 600)
 
}


function draw() {
  background("white");
  guy.x = World.mouseX
  guy.collide(inwall1);
  guy.collide(inwall2);
 
  


  
  if(road.y >500){
    road.y = -10}
    drawSprites();
}
