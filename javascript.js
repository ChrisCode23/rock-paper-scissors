let gameChoices = ["Rock", "Paper", "Scissors"];

// Keeps track of game score and assign initial value 0 to both
let humanScore = 0;
let computerScore = 0;

// Determines if one of the values of "gameChoices" has been found
let isFound = false;   

// Keeps track of the number of rounds played
let roundCount = 0;


// Randomizes "Rock", "Scissors" or "Paper" for the computer
function getComputerChoice(){
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

// Allows user to select "Rock", "Scissors" or "Paper" via a prompt
function getUserChoice(){
    // Loop until one of the values is found
    while (!isFound){
        let userChoice = prompt("What do you choose: Rock, Scissors or Paper?", ""); 
        // Makes input case-insensitive
        let userChoiceToLC = (userChoice ? userChoice.toLowerCase() : null); 
        
        // Loop through all array elements in "gameChoices"
        for (let i = 0; i < gameChoices.length; i++) {
            // Checks if user data matches one of the game choices
            // toLowerCase() used to keep case-insensitivity
            if (gameChoices[i].toLowerCase() === userChoiceToLC) { 
                    isFound = true;
                    return gameChoices[i]; 
            } 
        }
        // Output error message if user doesn't type anything or if text doesn't match one of game choices
        if (!isFound && !userChoice) {
            alert("You must make a choice!"); 
        } else if (!isFound && userChoice) {
            alert("Incorrect Choice");
        }
}
    
}

// Used as callback in "playGame"
let humanSelection = getUserChoice();
let computerSelection = getComputerChoice();

// Controls a single round
function playRound(humanChoice, computerChoice) {

    console.log(humanChoice);
    
    // Proceeds only if user entered correct data
    if (isFound) {
        roundCount++;
        console.log(computerChoice);

        // Checks who won the round and updates score
        
        // If human wins
        if (humanChoice === "Paper" && computerChoice === "Rock"
            || humanChoice === "Scissors" && computerChoice === "Paper" 
            || humanChoice === "Rock" && computerChoice === "Scissors"  
        ) {
            console.log(humanChoice + " beats " + computerChoice);
            humanScore++;
            console.log("Score: Player " + humanScore + " " + "Computer " + computerScore);
        }
        // If it's a tie
        else if (humanChoice === "Paper" && computerChoice === "Paper"
                || humanChoice === "Scissors" && computerChoice === "Scissors"
                || humanChoice === "Rock" && computerChoice === "Rock"
        ) { 
            console.log("It's a tie!");
            console.log("Score: Player " + humanScore + " " + "Computer " + computerScore);
        } 
        // If computer wins
        else {
            console.log(computerChoice + " beats " + humanChoice);
            computerScore++;
            console.log("Score: Player " + humanScore + " " + "Computer " + computerScore);
        }
    }
    // Otherwise stop the game
    else {
        return;    
    }
    isFound = false;
}

// Controls the entire game
function playGame() {
    

    playRound(humanSelection, computerSelection);

    humanSelection = getUserChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    humanSelection = getUserChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    humanSelection = getUserChoice();
    computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    humanSelection = getUserChoice();
    computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);

    // Make this a five rounds game, where the player with most points wins
    switch (roundCount) {
        case 5:
            if (humanScore > computerScore){
                console.log("Player won the game!");
            } else if (computerScore > humanScore){
                console.log("CPU won the game!");
            } else {
                console.log("The game ended in a tie!");
            }
            return;
    }



}

playGame();