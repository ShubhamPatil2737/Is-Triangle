    const sides = document.querySelectorAll(".input-side");
    const calculate = document.querySelector(".hypobtn");
    const output = document.querySelector(".hypo-output");

    calculate.addEventListener("click", calculateHypotenuse);

    function calculateSumOfSquare(a,b){
        const sumOfSquare = a*a + b*b;
        return sumOfSquare;
    }
    
    function  calculateHypotenuse(){
        const sumOfSquare = calculateSumOfSquare(Number(sides[0].value),Number(sides[1].value));
        const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
        output.innerText = "The length of Hypotenuse is "+ lengthOfHypotenuse;
    }