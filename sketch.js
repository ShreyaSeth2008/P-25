
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



	ground = new Ground(600,height,1200,20)
	paper = new Paper(600,40,1200,20)
	line1 = new Line(110, 595, 10,150)
	line2= new Line(230, 680, 250, 10)
	line3=new Line(350,595,10,150)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);

  ground.display();
  paper.display();
  line1.display();
  line2.display();
  line3.display();
  
  drawSprites();
 
}



