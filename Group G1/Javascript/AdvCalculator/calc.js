window.addEventListener("load", initEvents);

var box;
var expression = "";
function initEvents() {
    box = document.querySelector("#box");
    document.querySelector(".equals").addEventListener("click", evaluate);
    var numBtns = document.querySelectorAll(".num");
    for (const btn of numBtns) {
        btn.addEventListener("click", appendNumber);
    }

    var oprBtns = document.querySelectorAll(".opr");
    for (const btn of oprBtns) {
        btn.addEventListener("click", appendOperator);
    }
}

function appendNumber() {
    box.value += this.innerHTML;
    expression = box.value;
}

function appendOperator() {
    box.value = expression + this.innerHTML;
}

function evaluate() {
    var result = eval(box.value);
    box.value = result;
    expression = "";
}