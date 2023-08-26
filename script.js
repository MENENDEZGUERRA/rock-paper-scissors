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


function playRound(userChoice) {
    let computerSelection = getComputerChoice();
    console.log("The computer selection is: " + computerSelection);
    if(computerSelection == "rock" && userChoice == "paper"){
        return "You Won!";
    }else if (computerSelection == "paper" && userChoice == "rock"){
        return "You Lose!";
    }else if (computerSelection == "scissors" && userChoice == "rock"){
        return "You Won!";
    }else if (computerSelection == "rock" && userChoice == "scissors"){
        return "You Lose!";
    }else if(computerSelection == "scissors" && userChoice == "paper"){
        return "You Lose!";
    }else if(computerSelection == "rock" && userChoice == "paper"){
        return "You Won!";
    }else if (computerSelection == "paper" && userChoice == "scissors"){
        return "You Won!";
    }
    else if (computerSelection == userChoice) {
        return "Draw";
    }
    else {
        return "Invalid choice, so you lose";
    }
}

function game(){
    let userScore = 0;
    let computerScore = 0;

    const computerSelection = getComputerChoice().toLowerCase();
    let userChoice = prompt("Enter your choice (Rock, Paper Scissors): ").toLowerCase();
    let result = playRound(computerSelection, userChoice);
    console.log("The computer selection is " + computerSelection + " " + result)
        
    if (result == "You Lose!"){
        computerScore += 1;
    }else if (result == "You Won!"){
        userScore += 1;
    }

    console.log("Computer Score: " + computerScore + " User Score: " + userScore)
}

function reply_click(clicked_id){
    console.log(playRound(clicked_id));
}