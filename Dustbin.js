class Dustbin{
    constructor(x,y){
        var options={
        isStatic:true
        }
        this.image=loadImage("dustbingreen.png");
        this.body=Bodies.rectangle(x,y,0,0,options);
        this.width=0;
        this.height=0;
        World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    fill("red");
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,100,100);
    }
    }