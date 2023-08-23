function getComputerChoice(){
    let computerChoiceSeed = Math.floor(Math.random() * 3) + 1;
    let computerChoiceText;
    
    switch(computerChoiceSeed){
        case 1:
            computerChoiceText = "Rock"
            break;
        case 2:
            computerChoiceText = "Paper"
            break;
        case 3:
            computerChoiceText = "Scissors"
            break;
    }

    return computerChoiceText;
}


function playRound(computerSelection, userChoice) {
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

    for (let i = 0; i <5; i++) {
        const computerSelection = getComputerChoice().toLowerCase();
        let userChoice = prompt("Enter your choice (Rock, Paper Scissors): ").toLowerCase();
        let result = playRound(computerSelection, userChoice);
        alert("The computer selection is " + computerSelection + " " + result)
        
        if (result == "You Lose!"){
            computerScore += 1;
        }else if (result == "You Won!"){
            userScore += 1;
        }
    }

    alert("Computer Score: " + computerScore + " User Score: " + userScore)
}




game()
