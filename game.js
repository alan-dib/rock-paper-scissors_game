// declare html element
const choiceRock = document.getElementById('rock');
const choicePaper = document.getElementById('paper');
const choiceScissors = document.getElementById('scissors');
const humanScoreSpan = document.getElementById('humanScore');
const computerScoreSpan = document.getElementById('computerScore');
const resultSpan = document.getElementById('showResult');
const resetBtn = document.getElementById('resetBtn');

const choices = ['rock', 'paper', 'scissors'];  
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
let humanScore = 0;
let computerScore = 0;
let rounds = 0;

function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
        return 'DRAW';
    }
    if ((userChoice === 'rock' && computerChoice === 'scissors')||
        (userChoice === 'paper' && computerChoice === 'rock')||
        (userChoice === 'scissors' && computerChoice === 'paper')){
            humanScore++;
            return 'WIN';
    }else{
        computerScore++
        return 'LOST';    
    }
}

function getResultMessage(result, userChoice, computerChoice){
    let message = '';
    let color = ''
    if (result === 'DRAW'){
        message = 'DRAW - Try Again idiot!';
        color = 'color: yellow;';
    }
    else if(result === 'WIN'){  
        message += ` ${userChoice} beats ${computerChoice}!`;
        color = 'color: green;';
    }
    else{ 
        message += ` ${computerChoice} beats ${userChoice}.`;
        color = 'color: red;';
    }
    return `<h3 style="${color}">${message}</h3>`;
}

function playRound(userChoice){
    if (rounds >= 5) return;
    rounds++
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice)
    humanScoreSpan.textContent = `Human: ${humanScore}`
    computerScoreSpan.textContent = `Computer: ${computerScore}`
    resultSpan.innerHTML = getResultMessage(result, userChoice, computerChoice)
    
    if (rounds === 5){
        let finalMsg = ''
        if (humanScore > computerScore){
            finalMsg = '<h2 style="color:green;"> You win the game! </h2>'; 
        } else if(computerScore > humanScore){
            finalMsg = '<h2 style="color:red;"> Computer wins the game! </h2>'; 
        } else{
            finalMsg = '<h2 style="color:yellow;"> It\'s a tie </h2>'; 
        }
        resultSpan.innerHTML += finalMsg;
        choiceRock.disabled = true;
        choicePaper.disabled = true;
        choiceScissors.disabled = true;
        resetBtn.style.display = 'block';
    }
    console.log(`User: ${userChoice}, 
                 Computer: ${computerChoice}, 
                 Result: ${result}`);
}

choiceRock.addEventListener('click', function(){
    playRound('rock')
})

choicePaper.addEventListener('click', function(){
    playRound('paper')
})

choiceScissors.addEventListener('click', function(){
    playRound('scissors')
})

resetBtn.addEventListener('click', function(){
    humanScore = 0;
    computerScore = 0;
    rounds = 0; 
    resultSpan.innerHTML = ''
    humanScoreSpan.textContent = 'Human: 0 '
    computerScoreSpan.textContent = 'Computer: 0 '
    choiceRock.disabled = false;
    choicePaper.disabled = false;
    choiceScissors.disabled = false;
    resetBtn.style.display = 'none'

})