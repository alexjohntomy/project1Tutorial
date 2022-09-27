
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
        strokeWeight(2);

        circle(this.x, this.y, this.width, this.height);
        }


        move() {
        this.x = this.x+this.speedX;
        this.y = this.y+this.speedY;
        

        let xoff = 0.0;
        xoff = xoff + 0.01;
        let n = noise(xoff)*2;
        let perlin = (random(n*-1, n))

        //Move Using Perlin Noise
        this.x = this.x+perlin;
        this.y = this.y+perlin;
        
        //Wall Bounce
        if (this.y > (windowHeight - this.height) || this.y <=0) {
            this.speedY = this.speedY*-.5;
        }

        if (this.x > (windowWidth - this.width) || this.x <= 0) {
            this.speedX = this.speedX*-.5;
        }
        
        //Follow Food
        if (mouseX>this.x) { 

            this.speedX = this.speedX+=.5+perlin;
        }
        
        if (mouseX<this.x) {
            this.speedX = this.speedX-=.5+perlin;
        }
        

        if (mouseY>this.y) {
            this.speedY = this.speedY+=.5+perlin;
        }

        if (mouseY<this.y) {
            this.speedY = this.speedY-=.5+perlin;
        }

        }   

      }     

let blocks = [];
let numBlocks = 1;
let alpha = 0;
let sze = 30;

for (i=0; i<numBlocks; i++) {
    blocks[i]= new Block(0,0,sze,sze,1,1,0);
}

blocks[30]= new Block(this.x,this.y,this.width,this.height,1,1,255)



function mouseClicked() {
    numBlocks++
    blocks[i]= new Block(mouseX,mouseY,sze,sze,.5,.5,0);
    sze+perlin;;
    return false;
      }


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
  

