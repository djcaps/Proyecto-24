class Iron {
    constructor(x, y) {
      var options = {   
        'restitution':0.8,
        'friction': 3,
        'density':70
      };
      this.body = Bodies.rectangle(x, y, 30, 60, options);
      this.width = 30;
      this.height = 60;
      World.add(world, this.body);
    };
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER)
        rect(0,0, this.width, this.height);
        fill("black")
        pop();
    }
}