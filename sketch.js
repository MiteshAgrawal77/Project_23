var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var package_options

var line1, line2, line3
var line_options
var line1body, line2body, line3body

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myengine, myworld

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	line_options = {

		isStatic: false,
		restitution: 0
	}

	line1=createSprite(400,690,200,20,line_options);
	line2=createSprite(300,650,20,100,line_options);
	line3=createSprite(500,650,20,100,line_options);
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	package_options = {
		
		isStatic: false,
		restitution:0.7
	  }

	packageSprite=createSprite(width/2, 80, 10,10,package_options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
    packageSprite.visible=false

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	myengine = Engine.create();
	myworld = myengine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(myworld, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(myworld, ground);

   


	Engine.run(myengine);
  
}


function draw() {

	Engine.update(myengine)
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  line1body.x= line1.position.x
  line1body.y= line1.position.y

  line2body.x= line2.position.x
  line2body.y= line2.position.y

  line3body.x= line3.position.x
  line3body.y= line3.position.y


  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   
	  Matter.Body.setStatic(packageBody,false) 
	   packageSprite.visible=true;
	  // packageSprite.setVelocityY = +10;
	   
    
  }
}



