class Rope{
    constructor(bodyA,pointB){
        var option = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.0,
            length:300
        }
        this.rope = Constraint.create(option);
        World.add(world,this.rope)
        this.bodyA = bodyA
        this.pointB = pointB
    }
    display(){
       var pos = this.rope.bodyA.position
       line(pos.x,pos.y,this.pointB.x,this.pointB.y)
    }
}