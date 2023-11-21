window.addEventListener("load", initEvents);

var counter = 0;

let winning_combinations = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
];

function initEvents() {
    loadGameBoard();
}


function loadGameBoard() {
    let table = document.querySelector("#gameBoard");
    for(let i = 0; i < 3; i++) {
        // create a new row
        let tr = table.insertRow();
        for(let j = 0; j < 3; j++) {
            // create a new col
            let td = tr.insertCell();
            // create button
            let btn = document.createElement("button");
            btn.className = "btn";
            // append button in column
            td.appendChild(btn);
            btn.addEventListener("click", userMove);
        }
    }
    
}

function userMove() {
    this.innerHTML = "X";
    this.setAttribute("disabled", "true");
    counter++;
    cpuMove();
}

function cpuMove() {
    let randomPosition = parseInt(Math.random() * 9);
    let btns = document.querySelectorAll(".btn");
    let randomBtn = btns[randomPosition];
    if(counter <= 8) {
        if (randomBtn.innerHTML == "") {
            randomBtn.innerHTML = "0";
            randomBtn.setAttribute("disabled", "true");
            counter++;
        }
        else {
            console.log("Picked :",randomPosition);
            cpuMove();
        }
    }    
}