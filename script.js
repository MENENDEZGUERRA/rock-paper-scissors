// Returns the computer choice
function getComputerChoice(){
    let computerChoiceSeed = Math.floor(Math.random() * 3) + 1;
    let computerChoiceText;
    
    switch(computerChoiceSeed){
        case 1:
            computerChoiceText = "rock"
            break;
        case 2:
            computerChoiceText = "paper"
            break;
        case 3:
            computerChoiceText = "scissors"
            break;
    }

    return computerChoiceText;
}

let userScore = 0;
let computerScore = 0;

//return the result of the game using the user choice
function playRound(userChoice) {
    let computerSelection = getComputerChoice();


    console.log("The computer selection is: " + computerSelection);
    if(computerSelection == "rock" && userChoice == "paper"){
        userScore += 1;
        return "You Won!";
    }else if (computerSelection == "paper" && userChoice == "rock"){
        computerScore += 1;
        return "You Lose!";
    }else if (computerSelection == "scissors" && userChoice == "rock"){
        userScore += 1;
        return "You Won!";
    }else if (computerSelection == "rock" && userChoice == "scissors"){
        computerScore += 1;
        return "You Lose!";
    }else if(computerSelection == "scissors" && userChoice == "paper"){
        computerScore += 1;
        return "You Lose!";
    }else if(computerSelection == "rock" && userChoice == "paper"){
        userScore += 1;
        return "You Won!";
    }else if (computerSelection == "paper" && userChoice == "scissors"){
        userScore += 1;
        return "You Won!";
    }
    else if (computerSelection == userChoice) {
        return "Draw";
    }
    else {
        computerScore += 1;
        return "Invalid choice, so you lose";
    }
}



//display the results
function scoreCount(computerScore, userScore) {
    const cs = document.getElementById('computer-score');
    cs.innerHTML = "Computer Score: " + computerScore;

    const us = document.getElementById('user-score');
    us.innerHTML = "Human Score: " + userScore;

    if (userScore = 5){
        


    }else if (computerScore >= 5){
        const wn = document.getElementById('winner');
        wn.innerHTML = "The winner is: Computer";

    }
}

//buttons
function reply_click(clicked_id){
    console.log(playRound(clicked_id));
    if (computerScore === 5){

        const wn = document.getElementById('winner');
        wn.innerHTML = "The winner is: Computer";
        userScore = 0;
        computerScore = 0;
        scoreCount(computerScore, userScore);
    } else if (userScore === 5) {
        
        const wn = document.getElementById('winner');
        wn.innerHTML = "The winner is: User";
        userScore = 0;
        computerScore = 0;
        scoreCount(computerScore, userScore);

    } else {
        scoreCount(computerScore, userScore);
    }

}
