class Ball {

constructor(x, y){

var a = {

restitution: 0.5,
density : 0.05

}

this.Image = loadImage("paper.png")
this.body = Bodies.circle(x, y, 50, a)
World.add(world, this.body)
}

display(){




var pos = this.body.position
//ellipseMode(RADIUS)
//ellipse(pos.x,pos.y, 20)
imageMode(RADIUS)
image(this.Image, pos.x, pos.y, 50, 50)
}
}