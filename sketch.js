const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(275,100,70,70);
    box4 = new Box(290,100,70,70);
    box5 = new Box(350,100,70,70);
    ground = new Ground(200,height,1600,20)
    pig1 = new Pig(810,320,50,50);
    log1 = new log(810,260,300,PI/2);
    bird = new Bird(100,100,50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    bird.display();
}