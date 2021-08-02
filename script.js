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

//up works
//bellow responsive grid test
function changeFieldSizeText(){
    fieldSizeText = document.querySelector('#field-size').value;
    console.log(fieldSizeText);
    fieldSizeTextP.textContent = fieldSizeText;
    console.log(fieldSizeTextP);
    columnsNumber = fieldSizeText;
    rowsNumber = fieldSizeText;
    console.log("changed columns " + columnsNumber,"changed rows " + rowsNumber);
    fieldSize = rowsNumber * columnsNumber;
    console.log("changed field size " + fieldSize);
    //smth below not working
    document.querySelector('.game').style.gridTemplateColumns = 'repeat(16, 1fr)';
    document.querySelector('.game').style.gridTemplateRows = 'repeat(16, 1fr)';
    //document.querySelector('.game').style.gridTemplateRows = '32, 1fr';
    gameContainer.removeChild(gamePixelsDiv);
    for (let i=0; i<fieldSize; i++){
        let gamePixelsDiv = document.createElement('div');
        gamePixelsDiv.setAttribute('class', 'game-pixels');
        gameContainer.appendChild(gamePixelsDiv);
    }
    
    
}
//below works

//ДОДЕЛАТЬ РЕСПОНСИВ СЕТКУ ГРИДА при изменении размера сетки нужно удалить старые div и создать сетку с новыми div