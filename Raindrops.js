class Raindrops{
  constructor(x,y,radius){
      this.body = ellipse(x,y,radius);
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.velocityY  = random(1,3);
  }
   fall(speed){
      this.y +=speed;
  }

  display(){
      push();
      stroke("blue");
      fill("blue");
      ellipse(this.x, this.y, this.radius);
      pop();
  }
}