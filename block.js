class Block{
    constructor(x, y, width, height) {
        var options = {
          
        
          
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("block.png")
        World.add(world, this.body);
      }
      display(){

        if (this.body.speed<3) {
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        }
        else{
        world.remove(world,this.body);
        push();
        this.visiblity = this.visibllity - 5 ;
        tint(255,this.visiblity)
        rect(this.image,this.body.position.x,this.body.psition.y,50,50);
        pop();
        }
      }
}
