window.addEventListener("load", initEvents);

var box;
var expression = "";
function initEvents() {
    box = document.querySelector("#box");
    box.setAttribute("readonly", "true");

    // get all buttons where we have num class
    var numButtons = document.querySelectorAll(".num");
    // iterate over buttons array and add click event on each button
    for (const btn of numButtons) {
        btn.addEventListener("click", appendNumber);
    }

    // get all buttons where we have num class
    var oprButtons = document.querySelectorAll(".opr");
    // iterate over buttons array and add click event on each button
    for (const btn of oprButtons) {
        btn.addEventListener("click", appendOperator);
    }

    document.querySelector(".equals").addEventListener("click", evaluate);
    document.querySelector(".clear").addEventListener("click", clear);

}

function appendNumber() {
    // get the innerHTML of clicked button and append in textbox
    expression += this.innerHTML;
    box.value = expression;
}

function appendOperator() {
    // get the innerHTML of clicked button and append in textbox
    expression += this.innerHTML;
    box.value = expression;
}

function evaluate() {
    box.value = eval(expression);
}

function clear() {
    box.value = "";
    expression = "";
}