const GRIDSIZE = 800;

let grid = document.getElementById('container');
let colInput = document.getElementById('col-input');
colInput.addEventListener('input', function () {
    calculateSize();
    resetGrid();
}, false);

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGrid, false);

window.onload = calculateSize(8);

function calculateSize() {
    let boxes = colInput.value;
    if (boxes > 100) {
        boxes = 100;
    }
    boxes *= boxes;
    makeGrid(boxes);
}

function resetGrid() {
    let resetDivs = document.querySelectorAll(".active");

    for (let i = 0; i < resetDivs.length; i++) {
        resetDivs[i].classList.remove("active");
    }
}

function makeGrid(numberOfBoxes) {
    let boxCounter = 0;
    let boxDimension = Math.sqrt(numberOfBoxes);
    let gridItemSize = GRIDSIZE / boxDimension;
    grid.style.gridTemplateRows = "repeat(" + boxDimension + ", " + gridItemSize + "px)";
    grid.style.gridTemplateColumns = "repeat(" + boxDimension + ", " + gridItemSize + "px)";

    while (boxCounter < numberOfBoxes) {
        let gridItem = document.createElement('div');

        gridItem.classList.add('grid-item');

        gridItem.style.width = gridItemSize;
        gridItem.style.height = gridItemSize;

        grid.appendChild(gridItem);

        gridItem.addEventListener('mouseenter', function (e) {
            let cell = e.target;
            changeColor(cell);
        }, false);

        boxCounter++;
    }
}

let changeColor = (cell) => {
    cell.classList = "grid-item active";
};