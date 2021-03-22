class Block{
    constructor(x, y, width, height,angle) {
        var options = {
          restitution : 0.6,
          friction : 0.1,
          density : 0.001,
          isStatic : false
        }
        this.visibitity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
      
      if(this.body.speed<4){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
      else{
        push();
        World.remove(world,this.body);
        this.visibitity=this.visibility-5;
        tint(255,this.visibility);
        //image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
      } 
      }
}
