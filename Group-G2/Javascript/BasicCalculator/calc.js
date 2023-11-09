// Event Binding - first we bind an event with a function
// when event will be triggered then function will be called

window.addEventListener("load", initEvents);
// we are adding an event "load" on windows
// it means window will allow browser to load HTML first then it calls initEvent function

var fnum;
var snum;

// bind all events in this function
function initEvents() {
    fnum = document.querySelector("#box-1");
    snum = document.querySelector("#box-2");

    document.querySelector("#add").addEventListener("click", add);
    document.querySelector("#sub").addEventListener("click", sub);
    document.querySelector("#div").addEventListener("click", div);
    document.querySelector("#mul").addEventListener("click", mul);
}


function add() {
    // parseInt - type cast into integer
    var result = parseInt(fnum.value) + parseInt(snum.value);
    document.querySelector("#box-3").value = result;
}

function sub() {
    // parseInt - type cast into integer
    var result = parseInt(fnum.value) - parseInt(snum.value);
    document.querySelector("#box-3").value = result;
}

function div() {
    // parseInt - type cast into integer
    var result = parseInt(fnum.value) / parseInt(snum.value);
    document.querySelector("#box-3").value = result;
}

function mul() {
    // parseInt - type cast into integer
    var result = parseInt(fnum.value) * parseInt(snum.value);
    document.querySelector("#box-3").value = result;
}