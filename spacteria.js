
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
        fill(255,190,200, 255)
        noStroke
        circle(mouseX, mouseY,100,100)

 
            
        fill(255)
        noStroke();
        circle(this.x, this.y, this.width, this.height);
        stroke(255)
        strokeWeight(10);
        line(this.x, this.y, this.x+this.speedX*-5, this.y+this.speedY*-5);
        }

       
        move() {
        this.x = this.x+this.speedX;
        this.y = this.y+this.speedY;
        

        let xoff = 0.0;
        xoff = xoff + 0.01;
        let n = noise(xoff)*.5;

        let perlin = ((random(n*-1, n)));


        //Move Using Perlin Noise
        this.x+perlin;
        this.y+perlin;

        
        //Wall Bounce
        if (this.y > (windowHeight - this.height) || this.y <=0) {
            this.speedY = this.speedY*-.25;
        }

        if (this.x > (windowWidth - this.width) || this.x <= 0) {
            this.speedX = this.speedX*-.25;
        }
        
        //Follow Food
        if (mouseX>this.x) { 

            this.speedX = this.speedX+=.25+perlin;
        }
        
        if (mouseX<this.x) {
            this.speedX = this.speedX-=.25+perlin;
        }
        

        if (mouseY>this.y) {
            this.speedY = this.speedY+=.25//+perlin;
        }

        if (mouseY<this.y) {
            this.speedY = this.speedY-=.25//+perlin;
        }

        }   

        

      }     

let blocks = [];
let numBlocks = 1;

function mouseClicked() {
    numBlocks++
    blocks[i]= new Block(mouseX,mouseY,25,25,.5,.5,0);
    return false;
      }


for (i=0; i<numBlocks; i++) {
blocks[i]= new Block(i,i,25,25,.5,.5,0);
}


function setup() {
createCanvas(windowWidth, windowHeight);
background(0);
}

function draw() {
background(0,0,0,75);
  
    for (i = 0; i < numBlocks; i++){
    blocks[i].display();
    blocks[i].move();
}
  
}
