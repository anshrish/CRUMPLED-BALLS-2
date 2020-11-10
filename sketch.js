const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var rectangle1,rectangle2,rectangle3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);
 paper = new Paper(50,600,40);
 dustbin = new Dustbin(600,620);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  paper.display();
  ground.display();
  dustbin.display();
  drawSprites();
}
function keyPressed(){
  if (keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:145,y:-145});
   }
}