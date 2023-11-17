window.addEventListener("load", initEvents);

var fnum;
var snum;

function initEvents() {
    fnum = document.querySelector("#box-1");
    snum = document.querySelector("#box-2");
    // document.querySelector("#add").addEventListener("click", calc);
    // document.querySelector("#sub").addEventListener("click", calc);
    // document.querySelector("#div").addEventListener("click", calc);
    // document.querySelector("#mul").addEventListener("click", calc);
    var btns = document.querySelectorAll(".btn");
    for(var btn of btns) {
        btn.addEventListener("click", calc);
    }
}

function calc() {
    // console.log(this.innerHTML);
    var operator = this.innerHTML;
    // console.log(operator);
    var expression = parseInt(fnum.value) + operator + parseInt(snum.value);
    // console.log(expression);
    // var result = parseInt(fnum.value) + parseInt(snum.value);
    document.querySelector("#box-3").value = eval(expression);
}
