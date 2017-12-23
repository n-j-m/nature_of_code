let meanx, meany, meanr, meang, meanb, sd;
let vx, vy; // velocity

let useColor = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150);
  meanx = width / 2;
  meany = height / 2;
  meanr = random(255);
  meang = random(255);
  meanb = random(255);
  sd = 60;
}

function draw() {
  const rx = randomGaussian();
  const ry = randomGaussian();

  const x = sd * rx + meanx;
  const y = sd * ry + meany;

  noStroke();
  if (useColor) {
    const rc = randomGaussian();
    const r = sd * rc + meanr;
    const g = sd * rc + meang;
    const b = sd * rc + meanb;
    const c = color(r, g, b);
    fill(c);
  } else {
    fill(0, 30);
  }
  ellipse(x, y, 10);
}

function mousePressed() {
  useColor = !useColor;
}
