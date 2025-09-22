// declare user choice
const choiceRock = document.getElementById('rock');
const choicePaper = document.getElementById('paper');
const choiceScissors = document.getElementById('scissors');
// array of possible choices (computer)
const choices = ['rock', 'paper', 'scissors'];  
// Function to randomize computer's choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
// Priority function determines the result of the game
function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
        return 'DRAW';
    }
    if ((userChoice === 'rock' && computerChoice === 'scissors')||
        (userChoice === 'paper' && computerChoice === 'rock')||
        (userChoice === 'scissors' && computerChoice === 'paper')){
            return 'WIN';
    }
    return 'LOST';    
}
// gets the result message and outputs to the user
function getResultMessage(result, userChoice, computerChoice){
    let message = '';
    if (result === 'DRAW'){
        message = 'DRAW - Try Again idiot!';
        color = 'color: yellow;';
    }
    else if(result === 'WIN'){  
        message = 'YOU WON Good job winning on the easiest difficulty!';
        message += ` - ${userChoice} beats ${computerChoice}!`;
        color = 'color: green;';
    }
    else{ 
        message = 'YOU LOST, noob';
        message += ` - ${computerChoice} beats ${userChoice}.`;
        color = 'color: red;';
    }
    return `<h3 style="${color}">${message}</h3>`;
}

choiceRock.addEventListener('click', function(){
    const userChoice = 'rock';
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);  
    document.getElementById('showResult').innerHTML = getResultMessage(result, userChoice, computerChoice);
    console.log(`User: ${userChoice}, Computer: ${computerChoice}, Result: ${result}`); // debugging purposes
});

choicePaper.addEventListener('click', function(){
    const userChoice = 'paper';
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);  
    document.getElementById('showResult').innerHTML = getResultMessage(result, userChoice, computerChoice);
    console.log(`User: ${userChoice}, Computer: ${computerChoice}, Result: ${result}`); // debugging purposes
});

choiceScissors.addEventListener('click', function(){
    const userChoice = 'scissors';
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);  
    document.getElementById('showResult').innerHTML = getResultMessage(result, userChoice, computerChoice);
    console.log(`User: ${userChoice}, Computer: ${computerChoice}, Result: ${result}`); // debugging purposes
});