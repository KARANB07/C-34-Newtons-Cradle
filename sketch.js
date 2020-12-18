
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function setup() {
	createCanvas(1000, 900);
	


	engine = Engine.create();
	world = engine.world;


    Engine.run(engine);
    	//Create the Bodies Here.
	b1=new bob(600,500)
	b2=new bob(200,500)
	b3=new bob(300,500)
	b4=new bob(500,500)
	b5=new bob(400,500)
	//base1=new base(400,200,800,10)
    l=new point(200,200)
    l1=new point(300,200)
    l2=new point(400,200)
    l3=new point(500,200)
    l4=new point(600,200)

    r=new sling (b1.body,{x:600,y:200})
    r1=new sling (b2.body,{x:200,y:200})
    r2=new sling (b3.body,{x:300,y:200})
    r3=new sling (b4.body,{x:500,y:200})
    r4=new sling (b5.body,{x:400,y:200})
  
}


function draw() {
	background("#037ffc");
	rectMode(CENTER);
 
  b1.display();
  //base1.display();
  //c1.display();
  r.display();
  r1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  r2.display();
  r3.display();
  r4.display();
  l.display();
  l1.display();
  l2.display();
  l3.display();
  l4.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-45});

	}

}

function mouseDragged(){
  Matter.Body.setPosition(b2.body,{x:mouseX,y:mouseY})
  }
  