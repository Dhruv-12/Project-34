class Ball{
    constructor(x,y,radius){
        var options={
            frictionAir: 0.005,
            density : 1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius
        World.add(world,this.body);
        this.image = loadImage("Superhero-01.png")

    }
    display(){
        var angle = this.body.angle;
        push()
        translate(this.body.position.x, this.body.position.y)
        rotate(angle)
        fill("red");
        imageMode(CENTER);
        image(this.image, 0, 0, 500,200);
      
        pop();
    }
}