// default state after load or refresh page, grid of 16x16
const grid = document.querySelector(".grid-container");
const changeButton = document.querySelector("#changebtn");
const gridSizeInput = document.querySelector("#number");
changeButton.addEventListener("click", (event) => {
  createGrid(gridSizeInput.value);
});

createGrid(16);

function createGrid(size) {
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
      event.target.style.backgroundColor = "red";
    });
    square.style.width = squaresize + "px";
  }
}
