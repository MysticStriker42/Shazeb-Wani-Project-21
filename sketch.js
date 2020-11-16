var wall

var bullet

var speed

var weight

var thickness


function setup() {
  createCanvas(1600,400);
  
 
  speed=random(223,321)

  weight=random(30,52)
 
  bullet = createSprite(50, 200, 25, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = color(212,175,55)

  thickness = random(22,83)

  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = color(80,80,80)
}

function draw() {
  background(255,255,255);  
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX= 0
 
    
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10){
      wall.shapeColor = color(255,0,0)
    }

    if(damage<10){
      wall.shapeColor = color(0,255,0)
    }

    if(bullet.xPosition < 800){
    bullet.velocityX = 0;
    }
  }

  drawSprites();
}