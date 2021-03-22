const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var player;
var ground1, ground2, ground3;

var block15, block16, block17, block18, block19, block20, block21;
var block22;
var sling;


var ball;
var img;

function preload(){
  img = loadImage("polygon.png");

}

function setup() {
  createCanvas(1164,516);
  engine = Engine.create();
  world = engine.world;
  
  water = new Water(840,500)

  block1 = new Block(400,350,50,50);
  block2 = new Block(450,350,50,50);
  block3 = new Block(500,350,50,50);
  block4 = new Block(550,350,50,50);
  block5 = new Block(600,350,50,50);



  block6 = new Block(425,325,50,50);
  block7 = new Block(475,325,50,50);
  block8 = new Block(525,325,50,50);
  block9 = new Block(575,325,50,50);



  bolck10 = new Block(450,300,50,50);
  block11 = new Block(500,300,50,50);
  block12 = new Block(550,300,50,50);


  block13 = new Block(475,275,50,50);
  block14 = new Block(525,275,50,50);

  blockAny = new Block(500,250,50,50);

  ground1 = new Ground(500,375,290,10);
  ground2 = new Ground(900,260,290,10);
  ground3 = new Ground(0, 500, 400, 300);
  ground4 = new Ground(500,505,2164,10);
  ground5 = new Ground(500,-2,2164,1);

  block15 = new Block(800,230,50,50);
  block16 = new Block(850,230,50,50);
  block17 = new Block(900,230,50,50);
  block18 = new Block(950,230,50,50);
  block19 = new Block(1000,230,50,50);

  block20 = new Block(825,180,50,50);
  block21 = new Block(875,180,50,50);
  block22 = new Block(925,180,50,50);
  block23 = new Block(975,180,50,50);

  block24 = new Block(850,140,50,50);
  block25 = new Block(900,140,50,50);
  block26 = new Block(950,140,50,50);

  block27 = new Block(875,115,50,50);
  block28 = new Block(925,115,50,50);

  block29 = new Block(900,90,50,50);
  boat = new Boat(500,395);
  boat2 = new Boat(900,280);

  catapult = new Catapult(120,260)

  ball = Bodies.circle(50,200,25);
  World.add(world,ball);

  sling = new Sling(this.ball,{x:150, y:200});
  sling2 = new Sling(this.ball,{x:100, y:200});

  ball1 = new Ball(50,300,100,100);

}

function draw() {
  background("grey");
  Engine.update(engine);

  water.display();

  fill(rgb(135, 205, 236));

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("lightBlue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("lightPink");
 bolck10.display();
 block11.display();
 block12.display();
  fill("lightgreen");

  block13.display();
  block14.display();

  fill(rgb(135, 205, 236));
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  fill("lightGreen");

  block20.display();
  block21.display();
  block22.display();
  block23.display();
  fill("lightPink");

  block24.display();
  block25.display();
  block26.display();

  fill("yellow");

  block27.display();
  block28.display();
  blockAny.display();

  fill("orange");
  block29.display();
  ground3.display();
  catapult.display();

  imageMode(CENTER);
  image(img,ball.position.x,ball.position.y,40,40);

  sling.display();
  sling2.display();
  boat.display();
  boat2.display();
  ball1.display();

  stroke("RED ");
  strokeWeight(2);
  fill('YELLOW');
  textSize(24);
  text("DRAG THE HEXAGON AND HIT THE STEALED ITEMS OF THE THIEF !", 20,40);

  stroke("RED ");
  strokeWeight(2);
  fill('YELLOW');
  textSize(24);
  text("PRESS SPACE TO GET A SECOND CHANCE😊", 590,470);
}


function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
  sling2.fly();
}


function keyPressed() {
  if (keyCode === 32) {
    sling.attach(this.ball);
    sling2.attach(this.ball);
  }
};