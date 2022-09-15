
class Block{
    constructor(x,y,width,height, speedX, speedY, clr) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedX = speedX;
    this.speedY = speedY;
    this.clr = clr;
    }

    display() {
        fill(this.clr);
        rect(this.x, this.y, this.width, this.height);
        }

    move() {
        this.x = this.x+this.speedX;
        if (this.x > (windowWidth - this.width) || this.x <= 0) {
            this.speedX = this.speedX*-1;
        }
    }
}

let Block1 = new Block(50,50,30,30,1,1,255);

function setup() {
createCanvas(windowWidth, windowHeight);
background(0);
}


function draw() {
    Block1.display();
    Block1.move();
}
  

