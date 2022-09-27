
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
        
        fill(this.clr=(random(0,i*2)), this.clr=(random(i,255)), this.clr=(random(i,255-i)), i*2);
        circle(this.x, this.y, this.width, this.height);
        }


        move() {
          this.x = this.x+this.speedX;
    
          let xoff = 0.0;
          xoff = xoff + 0.01;
          let n = noise(xoff)*3;

          this.x = this.x+(random(n*-1, n));
          this.y = this.y+(random(n*-1, n));
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
            this.width = 2;
            this.height = 2;

            strokeWeight(.75);
        }
        }
        
}

let blocks = [];
let numBlocks = 60;
for (i=0; i<numBlocks; i++) {
    blocks[i]= new Block(i*2,i*2,3,3,.03*i,.03*i,0);
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
  

