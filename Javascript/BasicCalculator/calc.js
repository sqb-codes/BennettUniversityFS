// Event binding - bind events with function
// add load event on window
// it means that when window will be loaded then it will call initEvent function
window.addEventListener("load", initEvents);

function initEvents() {
    document.querySelector("#add").addEventListener("click", add);
}


function add() {
    // console.log("Button Clicked...");
    var fnum = parseInt(document.querySelector("#box-1").value);
    var snum = parseInt(document.querySelector("#box-2").value);
    var result = fnum + snum;
    document.querySelector("#box-3").value = result;
}