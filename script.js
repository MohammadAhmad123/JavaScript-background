const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
let currentIndex = 0;


const changeColorBtn = document.getElementById('change-color-btn');
const randomColorBtn = document.getElementById('random-color-btn');
const colorDisplay = document.getElementById('color-display');


changeColorBtn.addEventListener('click', () => {

  document.body.style.backgroundColor = colors[currentIndex];
  colorDisplay.textContent = `Current Colour: ${colors[currentIndex]}`;
  

  currentIndex = (currentIndex + 1) % colors.length;
});


function getRandomColor() {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  return randomColor;
}

randomColorBtn.addEventListener('click', () => {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  colorDisplay.textContent = `Current Colour: ${randomColor}`;
});

