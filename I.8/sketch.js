let increment = 0.025;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(640, 480);
  noiseDetail(8, 0.5);
}

function draw() {
  background(0);

  loadPixels();
  let xoff = 0;
  for (let x = 0; x < width; x++) {
    xoff += increment;
    let yoff = 0;
    for (let y = 0; y < height; y++) {
      yoff += increment;
      let index = (x + y * width) * 4;
      const r = noise(xoff, yoff) * 255;
      pixels[index + 0] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
