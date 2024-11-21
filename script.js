// script.js
const container = document.getElementById('container');
const button = document.getElementById('button');

function createGrid(size) {
  container.innerHTML = ''; // Clear the container

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-item');
    div.addEventListener('mouseover', () => {
      div.style.backgroundColor = 'navy';
    });
    div.addEventListener('mouseout', () => {
      div.style.backgroundColor = 'purple';
    });
    container.appendChild(div);
  }

  const itemSize = 960 / size;
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => {
    item.style.width = `${itemSize}px`;
    item.style.height = `${itemSize}px`;
  });
}

// Initial grid creation
createGrid(16);

button.addEventListener('click', () => {
  let size = prompt('Enter the number of squares per side (max 100):');
  size = Math.min(size, 100);
  createGrid(size);
});