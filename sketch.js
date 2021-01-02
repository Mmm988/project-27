
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint

var ground;
var ball1,ball2,ball3,ball4,ball5;
var chain1,chain2,chain3,chain4,chain5;
var xoff=400;
var yoff=800;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Box(400,80,400,30);

	ball1=new Ball(400,450,30)
	ball2=new Ball(340,450,30)
	ball3=new Ball(280,450,30)
	ball4=new Ball(460,450,30)
	ball5=new Ball(520,450,30)

	chain1=new Chain(ball1.body,ground.body,0,0);
	chain2=new Chain(ball2.body,ground.body,-60,0);
	chain3=new Chain(ball3.body,ground.body,-120,0);
	chain4=new Chain(ball4.body,ground.body,60,0);
	chain5=new Chain(ball5.body,ground.body,120,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  
  ground.display();
   chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball3.body,ball3.body.position,{x:200,y:200})
	}
}

