
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ball = new BALL(700,100);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  drawSprites();
 ball.display();
}



