const colors = [
  "#5C85ad", //blue
  "#d8d0C5", //cream
  "#1e1e1e", //black
  "#e2b555", //yellow
  "#dda497", //pink
];

const svgPaths = document.querySelectorAll(".svg path");

setInterval(() => {
  setNewColors();
}, 2000);

function setNewColors() {
  svgPaths.forEach((path, i) => {
    console.log(path);

    path.style.fill = colors[i];
  });
  colors.sort(() => 0.5 - Math.random());
}

setNewColors();
