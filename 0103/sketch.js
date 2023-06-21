let img;
function preload() {
  img = loadImage("bowie.jpeg");
}

let glitch;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  imageMode(CENTER);

  glitch = new Glitch();
  loadImage("bowie.jpeg", function (im) {
    glitch.loadImage(im, 300, 500);
  });
}

function draw() {
  glitch.resetBytes();
  glitch.randomBytes(1); // add one random byte for movement
  // glitch.replaceBytes(10000, 500);
  // glitch.replaceHex("ffdb00430101", "ffdb004301ff");
  // for (let i = 0; i < 3; i++) {
  glitch.buildImage(function () {
    background(0); // clear background once image is ready
  });
  image(glitch.image, 0, height / 2, window.innerWidth / 3, window.innerHeight);

  glitch.buildImage(function () {
    background(0); // clear background once image is ready
  });
  image(
    glitch.image,
    window.innerWidth / 3,
    height / 2,
    window.innerWidth / 3,
    window.innerHeight
  );

  glitch.buildImage(function () {
    background(0); // clear background once image is ready
  });
  image(
    glitch.image,
    (window.innerWidth / 3) * 2,
    height / 2,
    window.innerWidth / 3,
    window.innerHeight
  );

  glitch.buildImage(function () {
    background(0); // clear background once image is ready
  });
  image(
    glitch.image,
    (window.innerWidth / 3) * 3,
    height / 2,
    window.innerWidth / 3,
    window.innerHeight
  );
  // }
}
