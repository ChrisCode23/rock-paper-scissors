//Store an array global variable "gameChoices" which includes "Rock", "Scissors" and "Paper"
let gameChoices = ["Rock", "Paper", "Scissors"];
//Create variables "humanScore" & "computerScore" to keep track of game score and assign initial value 0 to both
let humanScore = 0;
let computerScore = 0;
 //Create boolean global variable "isFound" which determines if one of the values of "gameChoices" has been found
let isFound = false;
//Keep track of the number of rounds played and store it in "roundCount"
let roundCount = 0;


//Create a function which randomly returns "Rock", "Scissors" or "Paper" array element for the computer
function getComputerChoice(){
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

//Create a function which allows user to select "Rock", "Scissors" or "Paper" via a prompt, then store it into "userChoice"
function getUserChoice(){
    //Loop with "while" until one of the values is found
    while(!isFound){
    let userChoice = prompt("What do you choose: Rock, Scissors or Paper?", ""); 
    //Store "userChoice" in variable "userChoiceToLC"
    //Use ternary operators so that it lowercase "userChoiceToLC" to make it case-insensitive; if the user doesn't type anything, return null
    let userChoiceToLC = (userChoice ? userChoice.toLowerCase() : null); 
    

    //Loop through all array elements in "gameChoices"
    for(let i = 0; i < gameChoices.length; i++){
        //Check if the data inserted by the user and stored into "userChoice" matches one of the array elements in "gameChoices"
        if(gameChoices[i].toLowerCase() === userChoiceToLC){  //Use "toLowerCase" to make the array elements lowercase, so they can match "userChoiceToLC" 
                isFound = true; //Set "isFound" to true as one of the values was found
                return gameChoices[i];  //Return the respective choice (i.e. "Rock" will return "Rock", "ROCK" will return "Rock")
        } 
    }
    //Output an error message if user doesn't type anything or if one of the values in "gameChoices" was not found
    if(!isFound && !userChoice){
        alert("You must make a choice!"); 
    }else if(!isFound && userChoice){
        alert("Incorrect Choice");
    }
}
    
}

 //Create two variables "humanSelection" & "computerSelection" and within them store the "get...Choice" functions
 let humanSelection = getUserChoice();
 let computerSelection = getComputerChoice();

//Create function "playRound" for a single round and use "humanChoice" & "computerChoice" as arguments
function playRound(humanChoice, computerChoice){
    //Output to console the choice made by the user and the computer
    console.log(humanChoice);
    //If user entered value matches one of the choices, proceed with the game
    if(isFound){
    //Increase "roundCount"
    roundCount++;
    console.log(computerChoice);

    //Add if conditionals that check all possible outcomes, output result to console, increase score based on who won and output score
    //If human wins
    if(humanChoice === "Paper" && computerChoice === "Rock" //Paper beats Rock
        || humanChoice === "Scissors" && computerChoice === "Paper" //Scissors beat Paper
        || humanChoice === "Rock" && computerChoice === "Scissors"  //Rock beats Scissors
    ){
        console.log(humanChoice + " beats " + computerChoice);
        humanScore++;
        console.log("Score: Player " + humanScore + " " + "Computer " + computerScore);
    }
    //If it's a tie (i.e. Human and Computer both choose Rock), don't increase score
    else if(humanChoice === "Paper" && computerChoice === "Paper"
            || humanChoice === "Scissors" && computerChoice === "Scissors"
            || humanChoice === "Rock" && computerChoice === "Rock"
    ){ 
        console.log("It's a tie!");
        console.log("Score: Player " + humanScore + " " + "Computer " + computerScore);
    } 
    //If computer wins
    else{
        console.log(computerChoice + " beats " + humanChoice);
        computerScore++;
        console.log("Score: Player " + humanScore + " " + "Computer " + computerScore);
    }
    }
    //Otherwise stop the game
    else{
        return;    
    }
    isFound = false;
}

//Create function "playGame" to play the entire game
function playGame(){
    

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

    //Make this a five rounds game, where the player with most points wins
    switch(roundCount){
        case 5:
            if(humanScore > computerScore){
                console.log("Player won the game!");
            }else if(computerScore > humanScore){
                console.log("CPU won the game!");
            }else{
                console.log("The game ended in a tie!");
            }
            return;
    }



}

playGame();