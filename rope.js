class sling {
    constructor(body1,pointB){
        var options={
            bodyA:body1,
            pointB:pointB
            
            //pointB:{x:this.x,this.y}
            
        }
        console.log(options)
        this.pointB=pointB
        this.rope=Constraint.create(options);
        World.add(world,this.rope)
    }

    display(){
        rectMode(CENTER);
        var pointA=this.rope.bodyA.position
        var pointB=this.rope.pointB.position
        var p1x=pointA.x
        var p1y=pointA.y
        var p2x=this.pointB.x
        var p2y=this.pointB.y
        stroke("blue")
        line(p1x,p1y,p2x,p2y)

    }
}