class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  step() {
    const r = random(1);
    if (r < 0.4) {
      this.x++;
    } else if (r < 0.6) {
      this.x--;
    } else if (r < 0.85) {
      this.y++;
    } else {
      this.y--;
    }
  }

  render() {
    stroke(0);
    point(this.x, this.y);
  }
}

let w;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  w = new Walker(width / 2, height / 2);
}

function draw() {
  w.step();
  w.render();
}

function resize() {
  resizeCanvas(windowWidth, windowHeight);
}
