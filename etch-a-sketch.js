let grid = document.getElementById('container');

for (let i = 0; i < 9; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    grid.appendChild(gridItem);
}