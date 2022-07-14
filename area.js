const base = document.querySelector("#base");
const height = document.querySelector("#height");
const Areabtn = document.querySelector("#areabtn");
const output =  document.querySelector(".area-output");

Areabtn.addEventListener("click", calculateArea);

function calculateArea(){
    var area = 0.5*Number(base.value)*Number(height.value);
    output.innerText="Area of Triangle is "+area;   
}