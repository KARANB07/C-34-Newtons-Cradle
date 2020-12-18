class point{
    constructor(x,y){
        this.x=x
        this.y=y
        this.body=Bodies.circle(x,y,5)
    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.x,this.y,5)
        fill('blue')
    }
}