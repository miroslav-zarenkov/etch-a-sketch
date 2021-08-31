let gameContainer = document.querySelector('.game')
let color = document.querySelector('#pixel-color').value;
let colorPicker = document.querySelector('#pixel-color');
colorPicker.addEventListener('input', changeColor);

let clearBtn = document.querySelector('#clear-button');
clearBtn.addEventListener('click', removeColor);

let fieldSizeText = document.querySelector('#field-size').value;
let htmlStyles = window.getComputedStyle(document.querySelector("html"));
let rowsNumber = parseInt(fieldSizeText);
let columnsNumber = parseInt(fieldSizeText);
let fieldSize = rowsNumber * columnsNumber;



let fieldSizeTextP = document.querySelector('#field-size-text');
fieldSizeTextP.textContent = "Field size: " + fieldSizeText + "x" + fieldSizeText;


for (let i=0; i<fieldSize; i++){
    gamePixelsDiv = document.createElement('div');
    gamePixelsDiv.setAttribute('class', 'game-pixels');
    gameContainer.appendChild(gamePixelsDiv);
}

function changeFieldSizeText(){
    gameContainer.innerHTML='';
    fieldSizeTextP = document.querySelector('#field-size-text');
    fieldSizeText = document.querySelector('#field-size').value;
    fieldSizeTextP.textContent = "Field size: " + fieldSizeText + "x" + fieldSizeText;
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
    item.style.backgroundColor = color;
        //item.classList.add('hover-color');
  })
});
}

function removeColor(){
    let gamePixels = document.querySelectorAll('.game-pixels');
    gamePixels.forEach(item => {
        //item.classList.remove('hover-color');
        item.style.backgroundColor = 'white';
      });
}

function changeColor(){
    color = document.querySelector('#pixel-color').value;
    //document.querySelector('.hover-color').style.backgroundColor = color;
    //console.log(color);
    
}


colorPixels();
