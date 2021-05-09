class Polygon {
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      this.image = loadImage("polygon.png");
      Matter.Body.setAngle(this.body, angle);
    }

    //Polygon Holder with Sling
 polygon = Bodies.circle(50,200,20,20);
  World;add(world,polygon);

 slingShot = new Slingshot(this.polygon,{x:100,y:1200});

}
