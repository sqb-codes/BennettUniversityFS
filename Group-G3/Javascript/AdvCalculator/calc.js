window.addEventListener("load", initEvents);

var expression = "";
var box;
function initEvents() {
    box = document.querySelector("#box");
    document.querySelector(".equals").addEventListener("click", evaluate);
    let numBtns = document.querySelectorAll(".num");
    let oprBtns = document.querySelectorAll(".opr");
    for (const btn of numBtns) {
        btn.addEventListener("click", appendNumber);
    }

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
    box.value = eval(expression);
    expression = "";
}

function clear() {

}