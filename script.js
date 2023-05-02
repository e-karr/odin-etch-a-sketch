const gridContainer = document.querySelector(".grid-container");
const resetButton = document.querySelector(".reset");
const gridSizeButtons = document.querySelectorAll(".grid-size");
const colorButtons = document.querySelectorAll(".color");
const blackButton = document.querySelector("#black");
const rainbowButton = document.querySelector("#rainbow");
const gridSize = 15;

window.addEventListener("load", () => createGrid(gridSize));

gridSizeButtons.forEach((button) =>
  button.addEventListener("click", () => {
    const rows = document.querySelectorAll(".row");
    for (let i = 0; i < rows.length; i++) {
      gridContainer.removeChild(rows[i]);
    }

    for (let i = 0; i < gridSizeButtons.length; i++) {
      gridSizeButtons[i].classList.remove("selected");
    }

    button.classList.add("selected");

    blackButton.click();

    createGrid(button.value);
  })
);

colorButtons.forEach((button) =>
  button.addEventListener("click", () => {
    for (let i = 0; i < colorButtons.length; i++) {
      colorButtons[i].classList.remove("selected");
    }

    button.classList.add("selected");
  })
);

rainbowButton.addEventListener("click", () => {
  createColoring("rainbow");
});

blackButton.addEventListener("click", () => {
  createColoring("black");
});

function createColoring(color) {
  const gridBlocks = document.querySelectorAll(".block");
  gridBlocks.forEach((block) =>
    block.addEventListener("mouseover", () => {
      if (color === "black") {
        block.style.backgroundColor = color;
      } else {
        block.style.backgroundColor = randomRgbColor();
      }
    })
  );
}

function resetGrid(item) {
  for (let i = 0; i < item.length; i++) {
    item[i].style.backgroundColor = "white";
  }
}

function makeBlocks(size) {
  for (let i = 0; i < size; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    rowDiv.setAttribute("style", "display: flex");
    for (let j = 0; j < size; j++) {
      const block = document.createElement("div");
      block.setAttribute(
        "style",
        "border: 1px solid grey; background-color: white"
      );
      block.style.height = `${gridContainer.clientHeight / size - 2}px`;
      block.style.width = `${gridContainer.clientWidth / size - 2}px`;
      block.classList.add("block");
      rowDiv.appendChild(block);
    }
    gridContainer.appendChild(rowDiv);
  }
}

function createGrid(size) {
  makeBlocks(size);

  const gridBlocks = document.querySelectorAll(".block");

  createColoring("black");

  resetButton.addEventListener("click", () => {
    resetGrid(gridBlocks);
  });
}

function randomInteger(max) {
  return Math.floor(Math.random() * (max + 1));
}

function randomRgbColor() {
  const r = randomInteger(255);
  const g = randomInteger(255);
  const b = randomInteger(255);

  return `rgb(${r}, ${g}, ${b})`;
}
