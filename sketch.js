var plank;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	plank = Bodies.rectangle(350,200,500,25,{isStatic:true});
	World.add(world,plank);

	b1 = new Ball(200,500);
	b2 = new Ball(270,500);
	b3 = new Ball(340,500);
	b4 = new Ball(410,500);
	b5 = new Ball(550,100);

	r1 = new Rope(b1.body,{x:200,y:200});
	r2 = new Rope(b2.body,{x:270,y:200});
	r3 = new Rope(b3.body,{x:340,y:200});
	r4 = new Rope(b4.body,{x:410,y:200});
	r5 = new Rope(b5.body,{x:480,y:200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240);
  fill("Red")
  rect(plank.position.x,plank.position.y,500,25);  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  drawSprites();
 
}



