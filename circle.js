
class Block {
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
        blendMode(LIGHTEST);
        
        noFill();
        stroke(this.clr=(random(0,30)), this.clr=(random(0,255)), this.clr=(random(0,255)), i*2);
        circle(this.x, this.y, this.width, this.height);
        }

        move() {
          this.x = this.x+this.speedX;
          this.x = this.x+(random(-5, 5));
          this.y = this.y+(random(-5, 5));
            this.y = this.y+this.speedY;

            if (this.y > (windowHeight - this.height) || this.y <=0) {
                this.speedY = this.speedY*-1;
            }

            if (this.x > (windowWidth - this.width) || this.x <= 0) {
                this.speedX = this.speedX*-1;

            }
        }

        scale() {
            if (i%2==0) {
            this.width = 4;
            this.height = 4;

            strokeWeight(.75);
        }
        }
        

        

}

let blocks = [];
let numBlocks = 80;
for (i=0; i<numBlocks; i++) {
    blocks[i]= new Block(i*2,i*2,2,2,.1*i,.1*i,0);
}

function setup() {
createCanvas(windowWidth, windowHeight);
}


function draw() {
    background(0,0,0);
    for (i = 0; i < numBlocks; i++){
    blocks[i].display();
    blocks[i].move();
    blocks[i].scale();
}

    
}
  

