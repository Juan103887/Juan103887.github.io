document.querySelector(".burger").addEventListener("click", animation);

var line1 = document.querySelector(".line1");
var line2 = document.querySelector(".line2")
var line3 = document.querySelector(".line3")

function animation(){
    line1.classList.toggle("activeline1");
    line2.classList.toggle("activeline2");
    line3.classList.toggle("activeline3");
}

const menu = document.querySelector(".menu");

function animation(){
    line1.classList.toggle("activeline1");
    line2.classList.toggle("activeline2");
    line3.classList.toggle("activeline3");
    menu.classList.toggle("active");
}

//---VER LOS PRECIOS---//

let churros_input = document.getElementById("churros_input");
let churros_total = document.getElementById("churros_total");

churros_input.addEventListener("input", function() {
    let inputValue = parseFloat(churros_input.value);
    let total = inputValue * 5000;
    churros_total.textContent = "$" + total.toLocaleString();
});

let pancakes_input = document.getElementById("pancakes_input");
let pancakes_total = document.getElementById("pancakes_total");

pancakes_input.addEventListener("input", function() {
    let inputValue = parseFloat(pancakes_input.value);
    let total = inputValue * 18000;
    pancakes_total.textContent = "$" + total.toLocaleString();
});

let waffles_input = document.getElementById("waffles_input");
let waffles_total = document.getElementById("waffles_total");


waffles_input.addEventListener("input", function() {
    let inputValue = parseFloat(waffles_input.value);
    let total = inputValue * 15000;
    waffles_total.textContent = "$" + total.toLocaleString();
});

let coca_input = document.getElementById("coca_input");
let coca_total = document.getElementById("coca_total");

coca_input.addEventListener("input", function() {
    let inputValue = parseFloat(coca_input.value);
    let total = inputValue * 3000;
    coca_total.textContent = "$" + total.toLocaleString();
});

let limonada_input = document.getElementById("limonada_input");
let limonada_total = document.getElementById("limonada_total");

limonada_input.addEventListener("input", function() {
    let inputValue = parseFloat(limonada_input.value);
    let total = inputValue * 6000;
    limonada_total.textContent = "$" + total.toLocaleString();
});