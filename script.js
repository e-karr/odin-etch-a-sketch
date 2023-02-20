let gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 16; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.setAttribute('style', 'display: flex');
    for (let j = 0; j < 16; j++) {
        let block = document.createElement('div');
        block.setAttribute('style', 'border: 1px solid grey; height: 20px; width: 20px;');
        block.classList.add('block');
        rowDiv.appendChild(block);
    }
    gridContainer.appendChild(rowDiv);
}

let gridBlocks = document.querySelectorAll('.block');

gridBlocks.forEach(block => block.addEventListener('mouseover', colorGrid));

function colorGrid (e) {
    this.style.backgroundColor = "black";
}