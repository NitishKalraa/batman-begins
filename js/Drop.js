class Drop {
  constructor(x, y, r) {
    var options = {
      restitution: 0.1,
      frictionAir: 0.03,
    };
    this.body = Bodies.circle(x, y, r, options);
    this.radius = r;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    fill("blue");
    ellipseMode(CENTER);
    noStroke();
    circle(pos.x, pos.y, this.radius);
  }
  update() {
    if (this.body.position.y > 700)
      Matter.Body.setPosition(this.body, { x: random(0, 400), y: 0 });
  }
}
