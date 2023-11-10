// Event Binding - bind an event with a function
// when event will be triggered then function will be called

// so we apply load event on windows
// so first HTML will be loaded and then JS
window.addEventListener("load", initEvents);

function initEvents() {
    document.querySelector("#add").addEventListener("click", add);
}

function add() {
    // console.log("Clicked on add button...");
    var fnum = document.querySelector("#box-1");
    var snum = document.querySelector("#box-2");
    var result = parseInt(fnum.value) + parseInt(snum.value);
    document.querySelector("#box-3").value = result;
}