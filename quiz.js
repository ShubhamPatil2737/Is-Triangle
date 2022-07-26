const quizForm = document.querySelector(".quiz-form");
const submit = document.querySelector("#submitbtn");
const output = document.querySelector(".quiz-output");

const correctAnswer = ["90","right angled","True","5:3","36"];
submit.addEventListener("click", calculateScore);

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResult = new FormData(quizForm);
    for(let value of formResult.values()){
        if(value === correctAnswer[index]){
            score++
        }
        index++
    }
 output.innerText="Your score is "+ score;
}