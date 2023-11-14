// it will allow to load HTML first
// Event Binding - bind an event with a function
window.addEventListener("load", initEvents);

var fnum;
var snum;

function initEvents() {
    fnum = document.querySelector("#box-1");
    snum = document.querySelector("#box-2");
    document.querySelector("#add").addEventListener("click", add);
    document.querySelector("#sub").addEventListener("click", sub);
    document.querySelector("#div").addEventListener("click", div);
    document.querySelector("#mul").addEventListener("click", mul);
}

function add() {
    var result = parseInt(fnum.value) + parseInt(snum.value);
    document.querySelector("#box-3").value = result;
}

function sub() {
    var result = parseInt(fnum.value) - parseInt(snum.value);
    document.querySelector("#box-3").value = result;
}

function div() {
    var result = parseInt(fnum.value) / parseInt(snum.value);
    document.querySelector("#box-3").value = result;
}

function mul() {
    var result = parseInt(fnum.value) * parseInt(snum.value);
    document.querySelector("#box-3").value = result;
}