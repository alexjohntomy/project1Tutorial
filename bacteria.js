
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
        
        stroke(this.clr=(random(0,i)), this.clr=(random(i,255)), this.clr=(random(i,255)), alpha+100);
        fill(0)
        strokeWeight(1);

        circle(this.x, this.y, this.width, this.height);
        }


        move() {
        this.x = this.x+this.speedX;
        this.y = this.y+this.speedY;
        

        let xoff = 0.0;
        xoff = xoff + 0.01;
        let n = noise(xoff)*4;


        //Move Using Perlin Noise
        this.x = this.x+(random(n*-1, n));
        this.y = this.y+(random(n*-1, n));
        
        //Wall Bounce
        if (this.y > (windowHeight - this.height) || this.y <=0) {
            this.speedY = this.speedY*-.5;
        }

        if (this.x > (windowWidth - this.width) || this.x <= 0) {
            this.speedX = this.speedX*-.5;
        }
        
        //Follow Food
        if (mouseX>this.x) { 

            this.speedX = this.speedX+=.5+(random(n*-1, n));
        }
        
        if (mouseX<this.x) {
            this.speedX = this.speedX-=.5+(random(n*-1, n));
        }
        

        if (mouseY>this.y) {
            this.speedY = this.speedY+=.5+(random(n*-1, n));
        }

        if (mouseY<this.y) {
            this.speedY = this.speedY-=.5+(random(n*-1, n));
        }

        }   

      }     

let blocks = [];
let numBlocks = 10;
let alpha = 0;

for (i=0; i<numBlocks; i++) {
    blocks[i]= new Block(0,0,25,25,1,1,0);
}

blocks[30]= new Block(this.x,this.y,10,10,1,1,255)


function setup() {
createCanvas(windowWidth, windowHeight);
background(0,0,0);


}


function draw() {
    background(0,0,0,alpha);
    for (i = 0; i < numBlocks; i++){
    blocks[i].display();
    alpha+=.001;
    blocks[i].move();
    fill(255);
    blocks[30].display();
    blocks[30].move();


}

    
}
  

