let gameContainer = document.querySelector('.game')


let clearBtn = document.querySelector('#clear-button');
clearBtn.addEventListener('click', removeColor);

let fieldSizeText = document.querySelector('#field-size').value;
let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let rowsNumber = parseInt(fieldSizeText);
let columnsNumber = parseInt(fieldSizeText);
let fieldSize = rowsNumber * columnsNumber;



let fieldSizeTextP = document.querySelector('#field-size-text');
fieldSizeTextP.textContent = fieldSizeText;


for (let i=0; i<fieldSize; i++){
    gamePixelsDiv = document.createElement('div');
    gamePixelsDiv.setAttribute('class', 'game-pixels');
    gameContainer.appendChild(gamePixelsDiv);
}


colorPixels();

function changeFieldSizeText(){
    gameContainer.innerHTML='';
    fieldSizeTextP = document.querySelector('#field-size-text');
    fieldSizeText = document.querySelector('#field-size').value;
    fieldSizeTextP.textContent = fieldSizeText;
    columnsNumber = fieldSizeText;
    rowsNumber = fieldSizeText;
    fieldSize = rowsNumber * columnsNumber;
    let cssChange = 'repeat('+rowsNumber+', 1fr)';
    document.querySelector('.game').style.gridTemplateColumns = cssChange;
    document.querySelector('.game').style.gridTemplateRows = cssChange;
    for (let i=0; i<fieldSize; i++){
        gamePixelsDiv = document.createElement('div');
        gamePixelsDiv.setAttribute('class', 'game-pixels');
        gameContainer.appendChild(gamePixelsDiv);
    };
    colorPixels();
}
   
function colorPixels(){
let gamePixels = document.querySelectorAll('.game-pixels');
gamePixels.forEach(item => {
    item.addEventListener('mouseover', () => {
    item.classList.add('hover-color');
  })
});
}

function removeColor(){
    let gamePixels = document.querySelectorAll('.game-pixels');
    gamePixels.forEach(item => {
        item.classList.remove('hover-color');
      });
}