let gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 16; i++) {
    let rowDiv = document.createElement('div');
    rowDiv.setAttribute('style', 'display: flex');
    for (let j = 0; j < 16; j++) {
        let block = document.createElement('div');
        block.setAttribute('style', 'border: 1px solid grey; height: 10px; width: 10px;');
        rowDiv.appendChild(block);
    }
    gridContainer.appendChild(rowDiv);
}