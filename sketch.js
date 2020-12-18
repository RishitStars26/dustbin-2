
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,dustbin2,dustbin3;
var paperBall;

function setup() {
	createCanvas(800, 700);

	var ground  = createSprite(width/2,height-35,width,10)
	ground.shapeColor = ("yellow");

	dustbin1 = new Dustbin()
	dustbin2 = new Dustbin()
	dustbin3 = new Dustbin()

	paperBall = new Paper(295,660)
	ground = new Ground(350,675,900,20);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

  paperBall.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85})
	}
}



