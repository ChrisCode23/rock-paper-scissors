//Store an array global variable "gameChoices" which includes "Rock", "Scissors" and "Paper"
let gameChoices = ["Rock", "Paper", "Scissors"];
//Create variables "humanScore" & "computerScore" to keep track of game score and assign initial value 0 to both
let humanScore = 0;
let computerScore = 0;


//Create a function which randomly returns "Rock", "Scissors" or "Paper" array element for the computer
function getComputerChoice(){
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

//Create a function which allows user to select "Rock", "Scissors" or "Paper" via a prompt, then store it into "userChoice"
function getUserChoice(){
    let userChoice = prompt("What do you choose: Rock, Scissors or Paper?", " "); 
    //Store choice in variable "userChoiceToLC" and use "toLowerCase" to make it case-insensitive
    //Use ternary operators so that if the user doesn't type anything, prompt doesn't turn to null thus avoiding error
    let userChoiceToLC = (userChoice ? userChoice : " ").toLowerCase(); 
    //Create boolean variable "isFound" which determines if one of the values of "gameChoices" has been found
    let isFound = false;

    //Loop through all array elements in "gameChoices"
    for(let i = 0; i < gameChoices.length; i++){
        //Check if the data inserted by the user and stored into "userChoice" matches one of the array elements in "gameChoices"
        if(gameChoices[i].toLowerCase() === userChoiceToLC){  //Use "toLowerCase" to make the array elements lowercase, so they can match "userChoice" 
                isFound = true; //Set "isFound" to true as one of the values was found
                return gameChoices[i];  //Return the respective choice (i.e. "Rock" will return "Rock", "ROCK" will return "Rock")
        } 
    }
    //Output an error message as one of the values in "gameChoices" was not found
    if(!isFound){alert("Incorrect Choice");}    
}

 //Create two variables "humanSelection" & "computerSelection" and within them store the "get...Choice" functions
 const humanSelection = getUserChoice();
 const computerSelection = getComputerChoice();

//Create function "playRound" for a single round and use "humanChoice" & "computerChoice" as arguments
function playRound(humanChoice, computerChoice){
    //Output to console the choice made by the user and the computer
    console.log(humanChoice);
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
playRound(humanSelection, computerSelection);