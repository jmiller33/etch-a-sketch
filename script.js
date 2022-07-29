const container = document.querySelector('#container');

const controller = document.querySelector('#controller');

const resetButton = document.createElement('button');
resetButton.textContent = "Reset"
const newNumberSquaresButton = document.createElement('button');
newNumberSquaresButton.textContent = "Set a new number of squares"

controller.appendChild(resetButton);
controller.appendChild(newNumberSquaresButton);

const width = 640;

let squares = 16;

function clearScreen () {
    container.innerHTML = '';
}

function makeGrid(squares){
    for (let i=0;i<=squares;i++) {
        
        const column = document.createElement('div');
        column.style.display = "flex";
        column.style.flexDirection = "column";
        container.appendChild(column);
        for (let i=0;i<=squares;i++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add("square")
            newDiv.style.width = String(width/squares+"px");
            let widthChecker = newDiv.style.width;
            console.log(widthChecker);
            newDiv.style.height = String(width/squares+"px");
            let heightChecker = newDiv.style.height;
            console.log(heightChecker);
            column.appendChild(newDiv);
            newDiv.addEventListener('mouseover', ()=> {
                newDiv.classList.add('square-hovered');
            });
        }
        
    }
}

makeGrid(squares);

newNumberSquaresButton.addEventListener ('click', () => {
    let squares = Number(prompt("How many squares wide do you want the sides to be?"));
    if (squares>100) {
        let squares = Number(prompt("Pick a number less than or equal to 100"));
        clearScreen();
        makeGrid(squares);
    } else {
        clearScreen();
        makeGrid (squares);
    }
});

resetButton.addEventListener('click', ()=> {
    clearScreen();
    makeGrid(squares);
});