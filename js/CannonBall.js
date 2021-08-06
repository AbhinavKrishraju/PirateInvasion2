class CannonBall{

    constructor(x,y){
    var options ={
        restitution:0.8,
        friction:1.0,
        density:1.0,
        isStatic:true
     }

     this.body= Bodies.circle(x,y,this.r,options)   
     World.add(world,this.body);
     this.image= loadImage("assets/cannonball.png");

    }
    display(){
      var angle=this.body.angle
      var pos=this.body.position
      push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);

      pop()
      
    }
    shoot(){
    Matter.body.setVelocity(this.body,{x:50,Y:-30})
    }
}