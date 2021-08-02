let gameContainer = document.querySelector('.game')


let clearBtn = document.querySelector('#clear-button');
clearBtn.addEventListener('click', removeColor);

let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let rowsNumber = parseInt(htmlStyles.getPropertyValue("--rowsNumber"));
let columnsNumber = parseInt(htmlStyles.getPropertyValue("--columnsNumber"));
console.log(rowsNumber, columnsNumber);
let fieldSize = rowsNumber * columnsNumber;
console.log(fieldSize);




for (let i=0; i<fieldSize; i++){
    let gamePixelsDiv = document.createElement('div');
    gamePixelsDiv.setAttribute('class', 'game-pixels');
    gameContainer.appendChild(gamePixelsDiv);
}

let gamePixels = document.querySelectorAll('.game-pixels');
gamePixels.forEach(item => {
    item.addEventListener('mouseover', () => {
    item.classList.add('hover-color');
  })
});

function removeColor(){
    gamePixels.forEach(item => {
        item.classList.remove('hover-color');
      });
}

