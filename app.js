
function clearScreen() {
    document.getElementById("display").value = "";
}

function display(value) {
    document.getElementById("display").value += value;
}

function maths() {
    var p = document.getElementById("display").value;
    var q = eval(p);
    document.getElementById("display").value = q;
}
