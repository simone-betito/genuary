let colors = ["#c02857", "#39893f", "#028df2", "#ebcc33", "#f27342"];
let borders = [];
var xPositions = [];
var yPositions = [];
var index = 0;

let balls = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  background("#FFFFFF");
}

function draw() {
  if (balls.length < 1400) {
    let randomColor = Math.round(Math.random() * (colors.length - 1));
    let selectedColor = colors[randomColor];
    let darkerColor = tinycolor(selectedColor).darken(3).toString();
    balls.push(new ball(selectedColor, darkerColor));
  }
  for (let ball of balls) {
    ball.display();
  }
}

function ball(selectedColor, darkerColor) {
  // initialize coordinates
  this.posX = random(window.innerWidth);
  this.posY = random(window.innerHeight);
  this.size = random(10, 50);

  this.display = function () {
    fill(selectedColor);
    stroke(darkerColor);
    strokeWeight(1);
    ellipse(this.posX, this.posY, this.size);
  };
}
