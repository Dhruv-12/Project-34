const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world
var box1, box2, box3, box4, box5, Box6, box7, box8, box9, box10, box11, box12;
var ground;
var ball
var slingshot

var backgroundImg




function preload() {
  backgroundImg = loadImage("GamingBackground.png");

}
function setup() {
  createCanvas(1200,600);
  engine = Engine.create()
  world = engine.world;
  ground = new Ground(600,540,1200,23);

  box1 = new Box(700,440,100,100);
  box2 = new Box(800,440,100,100);
  box3 = new Box(900,440,100,100);
  box4 = new Box(700,340,100,100);
  box5 = new Box(800,340,100,100);
  box6 = new Box(900,340,100,100);
  box7 = new Box(700,240,100,100);
  box8 = new Box(800,240,100,100);
  box9 = new Box(900,240,100,100);
  box10 = new Box(900,140,100,100);
  box11 = new Box(700,140,100,100);
  box12= new Box(800,140,100,100);



  ball = new Ball(400,250,50);
  
  monster = new Monster(1068,300,200,200)


  slingshot = new SlingShot(ball.body,{x:400, y:150});

}

function draw() {
  background(backgroundImg);  
  Engine.update(engine)
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  ball.display();
  slingshot.display();

 monster.display();

  text(mouseX + ":" + mouseY,600,50);
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}