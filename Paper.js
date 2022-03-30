class Paper {
    constructor(x, y, height, angle) {
      var options = {
          'restitution':0,
          'friction':0,
          'density':2
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 0.1;
      this.height = height;
      this.image=loadImage("paper ball.png")
      Matter.Body.setAngle(this.body, angle)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      fill('white')
      image(this.image,pos.x,pos.y,50,50);
    push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("blue")
      strokeWeight(10)
      fill(100);
      circle(0, 0, this.width, this.height);
      pop();
    }
  };
  
