//  /**************\\
//  / MADE BY NITISH //
//  /**************//

const Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.Body;

var man_image, thunder1, thunder2, thunder3;
var drops = [];
var umbrella;
var thunder;
var Frames = 0;

function preload() {

  man_image = loadImage("images/man.png");
  thunder1 = loadImage("images/thunder1.png");
  thunder2 = loadImage("images/thunder2.png");
  thunder3 = loadImage("images/thunder3.png");
}

function setup() {
  createCanvas(400, 680);

  engine = Engine.create();
  world = engine.world;
  umbrella = new Umbrella();
  for (var i = 0; i < 100; i++)
    drops.push(new Drop(random(0, 400), random(0, 400), 8));
}

function draw() {
  background(0);
  Engine.update(engine);

  var rand = Math.round(random(1, 3));
  if (frameCount % 80 === 0) {
    Frames = frameCount;
    thunder = createSprite(random(10, 370), random(10, 30), 10, 10);
    switch (rand) {
      case 1:
        thunder.addImage(thunder1);
        break;
      case 2:
        thunder.addImage(thunder2);
        break;
      case 3:
        thunder.addImage(thunder3);
        break;
      default:
        break;
    }
  }

  if (frameCount === Frames + 40 && thunder != undefined)
    thunder.destroy();

  umbrella.display();

  drops.forEach((drop) => {
    drop.display();
    drop.update();
  });

  drawSprites();
}
