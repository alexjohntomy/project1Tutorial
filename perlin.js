let xoff = 0.0;


function draw() {
  xoff = xoff + 0.01;
  let n = noise(xoff) * width;
}