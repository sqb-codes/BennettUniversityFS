// Event binding - bind events with function
// add load event on window
// it means that when window will be loaded then it will call initEvent function
window.addEventListener("load", initEvents);

function initEvents() {
    document.querySelector("#add").addEventListener("click", ()=>calculate(1));
    document.querySelector("#sub").addEventListener("click", ()=>calculate(2));
    document.querySelector("#div").addEventListener("click", ()=>calculate(3));
    document.querySelector("#mul").addEventListener("click", ()=>calculate(4));
}


function calculate(num) {
    // console.log("Button Clicked...");
    var fnum = parseInt(document.querySelector("#box-1").value);
    var snum = parseInt(document.querySelector("#box-2").value);
    if(num == 1){
        var result = fnum + snum;
    }
    else if(num == 2){
        var result = fnum - snum;
    }
    else if(num == 3){
        var result = fnum / snum;
    }
    else{
        var result = fnum * snum;
    }
    document.querySelector("#box-3").value = result;
}