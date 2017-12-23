class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  step() {
    const r = random(1);
    if (r < 0.5) {
      // move towards mouse
      const mx = mouseX - this.x;
      const my = mouseY - this.y;

      this.x += mx === 0 ? 0 : mx / Math.abs(mx);
      this.y += my === 0 ? 0 : my / Math.abs(my);
    } else {
      // move random
      this.x += random(-1, 1);
      this.y += random(-1, 1);
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
