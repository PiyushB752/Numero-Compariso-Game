const score01 = document.getElementById("score01");
const score02 = document.getElementById("score02");

const number1 = document.getElementById("numb1");
const number2 = document.getElementById("numb2");

const generateButton = document.getElementById("generate");
const addScoreButton = document.getElementById("addScore");


generateButton.addEventListener("click", ()=>{
    var randomNumber1 = Math.floor(Math.random()*100);
    var randomNumber2 = Math.floor(Math.random()*100);

    number1.textContent = randomNumber1;
    number2.textContent = randomNumber2;

    generateButton.disabled = true;
})

var PlayerScore1 = 0;
var PlayerScore2 = 0;


function addScoreFunction() {
    const number01 = parseInt(number1.textContent);
    const number02 = parseInt(number2.textContent);
  
    if (number01 > number02) {
      PlayerScore1++;
      score01.textContent = PlayerScore1;

    } else if(number01 < number02) {
      PlayerScore2++;
      score02.textContent = PlayerScore2;
    } else if(number01===number02){
        score01.textContent = PlayerScore1;
        score02.textContent = PlayerScore2;
    };
    number1.textContent = "00";
    number2.textContent = "00";
    generateButton.disabled = false;

    if (PlayerScore1 === 10 || PlayerScore2 === 10) {
      if (PlayerScore1 === 10) {
        window.location.href="./player1.html";
      } else {
        window.location.href="./player2.html";
      } }
    }
  

addScoreButton.addEventListener("click",addScoreFunction);