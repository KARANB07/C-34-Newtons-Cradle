class bob {
    constructor(x, y,color) {
      var options = {
          isStatic : false,
          restitution:1,
          frictionAir: 0,
          density: 1.2,
          slop:1,
          interia:Infinity
      }
      this.radius  = 58;
      this.color=color;
      this.body = Bodies.circle(x, y,this.radius, options);
      World.add(world, this.body);
    }
    display()
    {
      var pos = this.body.position;
      push();
      translate(this.body.position.x,this.body.position.y);
      ellipseMode(RADIUS);
      
      ellipse(0,0,60);
      fill('#42f5c2');
      pop();
    }
  }







   