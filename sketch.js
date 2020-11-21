var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var heli_pad, Side1, Side2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 heli_pad = Bodies.rectangle(400, 650, 300, 20 , {isStatic:true} );
	 World.add(world, heli_pad);
	 
	 Side1= Bodies.rectangle(550, 600, 20, 120 , {isStatic:true} );
	 World.add(world, Side1);

	 Side2 = Bodies.rectangle(250, 600, 20, 120 , {isStatic:true} );
	 World.add(world, Side2);
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();



rect(heli_pad.position.x,heli_pad.position.y,300,20)
rect(Side1.position.x,Side1.position.y,20,120)
rect(Side2.position.x,Side2.position.y,20,120)

   fill("red")
text ("BOX",400,530)
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false)
  }
}



