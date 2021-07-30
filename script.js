let gameContainer = document.querySelector('.game')

for (let i=0; i<16; i++){
    let gamePixels = document.createElement('div');
    gamePixels.setAttribute('class', 'game-pixels');
    gameContainer.appendChild(gamePixels);
}

let gamePixels = document.querySelectorAll('.game-pixels');

gamePixels.forEach(item => {
    item.addEventListener('mouseover', () => {
    item.classList.add('hover-color');
  })
});

let clearBtn = document.querySelector('#clear-button');
clearBtn.addEventListener('click', removeColor);

function removeColor(){
    gamePixels.forEach(item => {
        item.classList.remove('hover-color');
      });
}
