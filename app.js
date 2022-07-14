const Angle1 = document.querySelector(".angle-1");
const Angle2 = document.querySelector(".angle-2");
const Angle3 = document.querySelector(".angle-3");
const check = document.querySelector(".checkbtn");
const output = document.querySelector(".output");
function calculation(){
    if(Number(Angle1.value)+Number(Angle2.value)+Number(Angle3.value)===180){
        output.innerText="It is a triangle";
    }else{
          output.innerText="It is not a triangle ";               
    }
}
check.addEventListener("click",calculation);
