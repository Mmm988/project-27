class Chain {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var option={
        bodyA: body1,
        bodyB: body2,
        pointB:{x:this.offsetX,y:this.offsetY}
    }
    this.chain=Constraint.create(option);
    World.add(world,this.chain);
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        var offsetA=pointB.x+this.offsetX;
        var offsetB=pointB.y+this.offsetY;
        strokeWeight(4)
        line(pointA.x,pointA.y,offsetA,offsetB)
    }
}