// default state after load or refresh page, grid of 16x16
const grid = document.querySelector(".grid-container");
const eraseswitch = document.querySelector("#erase-mode");
const changeButton = document.querySelector("#changebtn");
const gridSizeInput = document.querySelector("#number");
gridSizeInput.addEventListener("input", () => {
  let value = Number(gridSizeInput.value);
  if (value > 100) gridSizeInput.value = 100;
  if (value <= 0) gridSizeInput.value = 0;
  createGrid(gridSizeInput.value);
});
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
  createGrid(gridSizeInput.value);
});

// changeButton.addEventListener("click", () => {
//   createGrid(gridSizeInput.value);
// });

createGrid(16);

function createGrid(size) {
  grid.innerHTML = "";
  let numberofsquares = size * size;
  let squaresize = 20;
  let gridsize = size * squaresize;
  //   resize the square if gridsize above 960px
  if (gridsize >= 960) {
    squaresize = 960 / size;
    gridsize = 960;
  }
  grid.style.width = gridsize + "px";

  for (let i = 0; i < numberofsquares; i++) {
    const square = document.createElement("div");
    grid.appendChild(square);
    square.addEventListener("mouseover", (event) => {
      let squarecolor = "";
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      if (eraseswitch.checked) squarecolor = "ffffff";
      else squarecolor = randomColor;
      event.target.style.backgroundColor = "#" + squarecolor;
    });
    square.style.width = squaresize + "px";
  }
}
