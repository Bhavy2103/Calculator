let AC = document.getElementById("display");
let a7 = document.getElementById("display");
let a6 = document.getElementById("display");
let a5 = document.getElementById("display");
let a4 = document.getElementById("display");
let a3 = document.getElementById("display");
let a2 = document.getElementById("display");
let a1 = document.getElementById("display");
let a0 = document.getElementById("display");
let plus = document.getElementById("display");
let minus = document.getElementById("display");
let mul = document.getElementById("display");
let div = document.getElementById("display");
let mod = document.getElementById("display");
let a00 = document.getElementById("display");
let PlusMinus = document.getElementById("display");

let display = document.getElementById("display");
function Cleardisplay() {
    display.value = "";
}


function ac() {
    display.value = ""
}

function result() {
    if (display.value === "") {
        display.innerHTML = "Invalid Fromate Used";
    } else {
        display.value = eval(display.value);
    }
}

function modules() {
    if (display.value === "") {
        display.innerHTML = "Invalid Fromate Used";
    } else {
        display.value = Number(display.value) / 100.00;
    }
}

function minpul() {
    if (display.value === "") {
        display.innerHTML = "Invalid Fromate Used";
    } else {
        display.value = -Number(display.value)
    }
}

function storeData() {
    localStorage.setItem("display", display.value);
}

function show() {
    display.value = localStorage.getItem("display")
}
show()