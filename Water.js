class Water {
    constructor(x,y) {
      var options = {
          'friction':1,
          'density':1.5,
          'isStatic':true
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 1900;
      this.height = 1000;
      this.image = loadImage("water.gif");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      strokeWeight(4);
      stroke("blue");
      fill("red");
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }