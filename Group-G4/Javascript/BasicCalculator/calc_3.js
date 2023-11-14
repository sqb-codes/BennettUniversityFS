window.addEventListener("load", initEvents);
var fnum;
var snum;
function initEvents() {
    fnum = document.querySelector("#box-1");
    snum = document.querySelector("#box-2");
    
    // querySelector vs querySelectorAll
    var btns = document.querySelectorAll("button");
    for(let btn of btns) {
        btn.addEventListener("click", calc);
    }
}


function calc() {
    // console.log(this);
    var opr = this.innerHTML;
    var expression = parseInt(fnum.value) + opr + parseInt(snum.value);
    // console.log(expression);
    document.querySelector("#box-3").value = eval(expression);
}