let xspacing = [26, Math.random() * 50, 20]; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = [75.0, Math.random() * 50, 30]; // Height of wave
let period = [500.0, Math.random() * 50, 250]; // How many pixels before the wave repeats
let dx = []; // Value for incrementing x
let yvalues = [];
let colors = ["#3B3C40", "#72736E", "#D2D5D9"];

let lineCount = 3;

function setup() {
  createCanvas(910, 600);
  w = width + 16;

  for (let i = 0; i < lineCount; i++) {
    dx.push((TWO_PI / period[i]) * xspacing[i]);
    yvalues.push(new Array(floor(w / xspacing[i])));
  }
}

function draw() {
  background("#F2EFDF");

  for (let z = 0; z < lineCount; z++) {
    calcWave(z);
    renderWave(z);
  }
}

function calcWave(z) {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues[z].length; i++) {
    yvalues[z][i] = sin(x) * amplitude[z];
    x += dx[z];
  }
}

function renderWave(z) {
  noStroke();
  fill(colors[z]);
  // A simple way to draw the wave with an ellipse at each location

  for (let j = 0; j < lineCount; j++) {
    for (let x = 0; x < yvalues[z].length; x++) {
      ellipse(x * xspacing[z], height / 2 + yvalues[z][x], 6, 106);
    }
  }
}
