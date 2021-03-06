class Rope{
    constructor(body1,body2,offSetX,offsetY){
        this.offSetX = offSetX;
        this.offsetY = offsetY;
        var options={
  bodyA:body1,
  bodyB:body2,
  pointB:{x:this.offSetX,y:this.offsetY}
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;
        strokeWeight(2);
        var Anchor1X = point1.x;
        var Anchor1Y = point1.y;
        var Anchor2X = point2.x + this.offSetX;
        var Anchor2Y = point2.y + this.offsetY;
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);

    }
}