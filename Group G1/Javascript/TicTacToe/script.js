window.addEventListener("load", initEvents);

let winninig_combinations = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
];

function initEvents() {
    loadButtons();
}

function loadButtons() {
    var table = document.querySelector("#gameBoard");
    for(var i = 0; i < 3; i++) {
        // Create row inside table
        var tr = table.insertRow();
        for(var j = 0; j < 3; j++) {
            // Create column inside row
            var td = tr.insertCell();
            // Create a new element on HTML
            var btn = document.createElement("button");
            btn.className = "btn";
            btn.addEventListener("click", userMove);
            td.appendChild(btn);
        }
    }    
}

function userMove() {
    // console.log("Clicked on button...");
    this.innerHTML = "X";
    this.setAttribute("disabled", "true");

    // will call cpuMove function after 1 second
    setTimeout(() => {
        cpuMove();
    }, 1000);
}

function cpuMove() {
    let randomPosition = parseInt(Math.random() * 9);
    let btns = document.querySelectorAll(".btn");
    let btn = btns[randomPosition];
    if(btn.innerHTML == "") {
        btn.innerHTML = "0";
        btn.setAttribute("disabled","true");
    }
    else {
        cpuMove();
    }
}

function checkWinner() {
    let btns = document.querySelectorAll(".btn");
    // if(btns[0].innerHTML == "X" && btns[1].innerHTML == "X" && btns[2].innerHTML == "X") {
    //     alert("X Won the game...");
    // }
    // else if(btns[3].innerHTML == "X" && btns[4].innerHTML == "X" && btns[5].innerHTML == "X") {
    //     alert("X Won the game...");
    // }
}