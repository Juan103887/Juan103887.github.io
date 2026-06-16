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