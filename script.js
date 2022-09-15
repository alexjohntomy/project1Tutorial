circleY = 100;
circleX = 100;
speedX = 1;
speedY = 1;
circleR = 50;
random1 = 255;
random2 = 255;
random3 =255;

function setup() {
    createCanvas(windowWidth, windowHeight);    
    background(0,0,0);

}

function draw() {

//DVD


//Set Up
noFill();
stroke(random1, random2, random3, 50);
textSize(40);
textStyle(BOLD);
text('ART_151', circleX, circleY);

//Circle 1 
//circle(windowWidth/2,circleY, circleR*2);


if (circleY > (windowHeight-circleR) || (circleY == circleR) || circleY == 0) {
    speedX = speedX*-1;
    random1 = (random(0,255));
    random2 = (random(0,255));
    random3 = (random(0,255));
 }
circleY = circleY + speedX;

//Circle 2
//circle(circleX,windowHeight/2, circleR*2);
 
 if (circleX > (windowWidth-circleR) || (circleX == circleR || circleX == 0) ) {
    speedY = speedY*-1;
    random1 = (random(0,255));
    random2 = (random(0,255));
    random3 = (random(0,255));
 }

 random1 = (random(0,255));
 random2 = (random(0,255));
 random3 = (random(0,255));

 circleX = circleX+speedY;





}
