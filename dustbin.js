class Dustbin{
    constructor(x,y,w,h){
    var options={
    isStatic:true
    }
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options)
    this.image = loadImage("dustbingreen.png")
    World.add(world,this.body)
    }

    display(){
    var dustbinpos = this.body.position
    var angle = this.body.angle
    push();
    translate(dustbinpos.x,dustbinpos.y)
    rotate(angle)
    fill("white")
    image(this.image,dustbinpos.x,dustbinpos.y,this.w,this.h)
    rect(0,0,this.w,this.h)
    pop();
    }
}
