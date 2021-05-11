class Ball{
    constructor(x,y){
        var option = {
            friction:0.1,
            density:0.2,
            restitution:1.0,
           
        }
        this.body = Bodies.circle(x,y,30,option)
        World.add(world,this.body); 
    }
    display(){
        var pos = this.body.position;
        fill("hotPink")
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,30,30);
    }
}