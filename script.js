let gridContainer = document.querySelector('.grid-container');
let resetButton = document.querySelector('.reset');
let gridSizeButtons = document.querySelectorAll('.grid-size');
let colorButtons = document.querySelectorAll('.color');
let blackButton = document.querySelector('#black');
let rainbowButton = document.querySelector('#rainbow');
let gridSize = 15;

createGrid(gridSize);

gridSizeButtons.forEach(button => button.addEventListener('click', () => {

    let rows = document.querySelectorAll('.row');
    for (let i = 0; i < rows.length; i++) {
        gridContainer.removeChild(rows[i]);
    }

    for (let i = 0; i < gridSizeButtons.length; i++) {
        gridSizeButtons[i].classList.remove('selected');
    }

    button.classList.add('selected');

    blackButton.click();

    createGrid(button.value);
}));

colorButtons.forEach(button => button.addEventListener('click', () => {
    
    for (let i = 0; i < colorButtons.length; i++) {
        colorButtons[i].classList.remove('selected');
    }

    button.classList.add('selected');
}));

rainbowButton.addEventListener('click', () => {
    let gridBlocks = document.querySelectorAll('.block');

    gridBlocks.forEach(block => block.addEventListener('mouseover', () => {
        let randomColor = randomRgbColor();
        block.style.backgroundColor = randomColor;
    }));

    gridBlocks.forEach(block => block.addEventListener('touchstart', () => {
        let randomColor = randomRgbColor();
        block.style.backgroundColor = randomColor;
    }));

    gridBlocks.forEach(block => block.addEventListener('touchmove', () => {
        let randomColor = randomRgbColor();
        block.style.backgroundColor = randomColor;
    }));
});

blackButton.addEventListener('click', () => {
    let gridBlocks = document.querySelectorAll('.block');
    createColoring(gridBlocks);
});

function createColoring(blocks, color="black") {
    blocks.forEach(block => block.addEventListener('mouseover', () => {
        block.style.backgroundColor = color;
    }));

    blocks.forEach(block => block.addEventListener('touchstart', () => {
        block.style.backgroundColor = color;
    }));

    blocks.forEach(block => block.addEventListener('touchmove', () => {
        block.style.backgroundColor = color;
    }));
}

function resetGrid(item) {
    for (let i = 0; i < item.length; i++) {
        item[i].style.backgroundColor = "white";
    }
}

function makeBlocks(size) {
    for (let i = 0; i < size; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');
        rowDiv.setAttribute('style', 'display: flex');
        for (let j = 0; j < size; j++) {
            let block = document.createElement('div');
            block.setAttribute('style', 'border: 1px solid grey; background-color: white');
            block.style.height = ((gridContainer.clientHeight / size) - 2) + "px";
            block.style.width = ((gridContainer.clientWidth / size) - 2) + "px";
            block.classList.add('block');
            rowDiv.appendChild(block);
        }
        gridContainer.appendChild(rowDiv);
    }
}

function createGrid(size) {
    makeBlocks(size);

    let gridBlocks = document.querySelectorAll('.block');

    createColoring(gridBlocks);

    resetButton.addEventListener('click', () => {
        resetGrid(gridBlocks);
    });
}

function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);

    return `rgb(${r}, ${g}, ${b})`;
}