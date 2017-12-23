let w;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(0);
  strokeWeight(2);

  w = new Walker(width / 2, height / 2);
}

function draw() {
  background(255);
  w.step();
  w.render();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 32;
    this.t = 0;
  }

  step() {
    const stepsize = map(noise(this.t), 0, 1, 0, 10);
    this.t += 0.01;

    this.x += random(-stepsize, stepsize);
    this.y += random(-stepsize, stepsize);
  }

  render() {
    stroke(0);
    fill(150);
    ellipse(this.x, this.y, this.size);
  }
}
