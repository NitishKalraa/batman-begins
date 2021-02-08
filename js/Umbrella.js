class Umbrella {
  constructor() {
    var options = {
      isStatic: true,
      restitution: 0.5,
    };
    this.body = Bodies.rectangle(200, height - 85, 100, 150, options);
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    imageMode(CENTER);
    image(man_image, pos.x, pos.y, 200, 200);
  }
}
