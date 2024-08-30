//Store an array global variable "gameChoices" which includes "Rock", "Scissors" and "Paper"
let gameChoices = ["Rock", "Paper", "Scissors"];

//Create a function which randomly returns "Rock", "Scissors" or "Paper" array element for the computer
function getComputerChoice(){
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

//Create a function which allows user to select "Rock", "Scissors" or "Paper" via a prompt, then store it into "userChoice" and return the variable
function getUserChoice(){
    let userChoice = prompt("What do you choose: Rock, Scissors or Paper?", " ");
    //Create boolean variable "isFound" which determines if one of the values of "gameChoices" has been found
    let isFound = false;

    //Loop through all array elements in "gameChoices"
    for(let i = 0; i < gameChoices.length; i++){
        //Check if the data inserted by the user and stored into "userChoice" matches one of the array elements in "gameChoices"
        if(gameChoices[i] === userChoice   
            || gameChoices[i].toUpperCase() === userChoice  //Make the data inserted by user case insensitive, same as next line
            || gameChoices[i].toLowerCase() === userChoice){
                isFound = true; //Set "isFound" to true as one of the values was found
                return gameChoices[i];  //Return the respective choice (i.e. "Rock" will return "Rock", "ROCK" will return "Rock")
        } 
    }
    //Output an error message as one of the values in "gameChoices" was not found
    if(!isFound){alert("Incorrect Choice");}    
}
console.log(getUserChoice());