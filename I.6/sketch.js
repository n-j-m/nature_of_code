let w;

function setup() {
  createCanvas(windowWidth, windowHeight);
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
    const stepsize = random(0, this.montecarlo() * 10);

    this.x += random(-stepsize, stepsize);
    this.y += random(-stepsize, stepsize);
  }

  montecarlo() {
    let hack = 0;
    while (hack < 10000) {
      const r1 = random(1);
      const probability = r1;
      const r2 = random(1);

      if (r2 < probability) {
        return r1;
      }
      hack++;
    }
    return 0;
  }

  render() {
    noStroke();
    fill(0);
    ellipse(this.x, this.y, 4);
  }
}
