const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//variables
let engine;
let world;
let edges,check;
var astronaut,bgImg,sleep,brush,gym,eat,drink,bath,move;


function preload(){
  bgImg= loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png", "gym12.png");
  eat = loadAnimation ("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  bath = loadAnimation("bath1.png","bath2.png");
  move = loadAnimation("move.png","move1.png");
  }
  

function setup() {
  createCanvas(800,400);

 //Initializing Physics Engine
  engine = Engine.create();
  world = engine.world;

 //Creating edges
  edges = createEdgeSprites()

 //Creating the backgound 
  bg = createSprite(300,230);
  bg.addAnimation("Bg1", bgImg);
  bg.scale = 0.15;
  World.add(world,bg);

 //Creating the astronaut 
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  World.add(world,astronaut);

 //Assigning a value to a variable for moving the astronaut
  check = "left"


  touches = [] 

 //console logs
  console.log(bg.depth)
  console.log(astronaut.depth)
  console.log(edges)
}

function draw() {
  background(255,255,255);
  Engine.update(engine); 
  
 //Making astronaut bouce off edges
  astronaut.bounceOff(edges) 

 //Setting up key controls 
  if(keyDown ("UP_ARROW")) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.x = 489;
    astronaut.y = 150;
    astronaut.scale = 0.1;
  }

  if(keyDown ("DOWN_ARROW")) {
    astronaut.addAnimation("gyming", gym);
    astronaut.changeAnimation("gyming");
    astronaut.x = 300;
    astronaut.y = 100;
    astronaut.scale = 0.1;
  }

  if(keyDown ("RIGHT_ARROW")) {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.scale = 0.07;
    astronaut.x = 151;
    astronaut.y = 320;
  }

  if(keyDown ("LEFT_ARROW")) {
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 350;
    astronaut.scale = 0.1;
  }

  if(keyDown ("M")) {
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.x = astronaut.x + 3
    check = "left"
    astronaut.scale = 0.1;
    console.log(astronaut.x);
    console.log(bg.depth)
    console.log(astronaut.depth)
  }

  drawSprites();
}

//I hoped you like the project
//Thanks for reading