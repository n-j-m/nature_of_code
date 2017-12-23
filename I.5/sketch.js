let meanx, meany, sd;

function setup() {
  createCanvas(windowWidth, windowHeight);
  sd = 1;

  w = new Walker(width / 2, height / 2);
}

function draw() {
  w.step();
  w.render();
}

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  step() {
    const rx = randomGaussian(this.x + random(-1, 1), sd);
    const ry = randomGaussian(this.y + random(-1, 1), sd);
    this.x = rx;
    this.y = ry;
  }

  render() {
    noStroke();
    fill(0);
    ellipse(this.x, this.y, 4);
  }
}
