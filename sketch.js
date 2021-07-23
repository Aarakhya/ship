var sea,seaimage
var ship,shipimage
function preload(){
seaimage=loadImage("sea.png")
shipimage=loadAnimation("ship1.png","ship2.png")


}

function setup(){
  createCanvas(400,400);
  sea=createSprite(0,200,20,20);
  sea.addImage(seaimage);
  sea.scale=0.3
  ship=createSprite(130,200,30,30);
  ship.addAnimation("ship moving",shipimage)
  ship.scale=0.2
}

function draw() {
  background("white");
  sea.velocityX=-2
  if(sea.x<0){
    sea.x=sea.width/8
  }
  
  
 drawSprites();
}