

var wall,thickness;


var  bullet,speed, weight; 


function setup() {
  createCanvas(1600, 400);
  
  speed = random(223,223)
  weight = random(32,22)
  
  
	wall=createSprite(1200,200, thickness, height/2)
  bullet = createSprite(500,200,50,50)
  

	thickness = random(70,40)
    

}


function draw() {
  background(0);

   
  bullet.velocityX = 5;
  
  if(hasCollided(bullet,wall))
  {
   bullet.velocityX = 0;
   var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

   if(damage>10)
{
  wall.shapeColor = color(255,0,0);

}
  if(damage<10)
  {
   wall.shapeColor = color(0,255,0);

  }

  }
 
  
  drawSprites();
  hasCollided(bullet,wall)
}

function hasCollided(lbullet,lwall)
{
	bulletRightEdge = lbullet.x+lbullet.width;
	wallLeftEdge = lwall.x;
	{
     return true
	}


    return false;


}

