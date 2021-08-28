var garden,rabbit,apple;
var gardenImg,rabbitImg,appleImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200,100,100);
garden.addImage(gardenImg);
garden.scale = 0;

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function createApples()
{
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg);
apple.scale = 0.5;
apple.velocityY= 0;
}


function draw() {
  background(0);
  //background("green");
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var apple = Math.round(random(1,2));

if(frameCount % 80 ==0)
{
if(select_sprites == 1) {
  createApples();
}
else{
  createLeaves();
}
} 
spawnApples();
  drawSprites();
}


