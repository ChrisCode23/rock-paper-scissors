//Store an array global variable "gameChoices" which includes "Rock", "Scissors" and "Paper"
let gameChoices = ["Rock", "Paper", "Scissors"];

//Create a function which randomly returns "Rock", "Scissors" or "Paper" array element for the computer
function getComputerChoice(){
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

//Create a function which allows user to select "Rock", "Scissors" or "Paper" via a prompt, then store it into "userChoice" and return the variable
function getUserChoice(){
    let userChoice = prompt("What do you choose: Rock, Scissors or Paper?", " ");

    //Loops through all array elements in "gameChoices", and if "userChoice" equals one of the array elements, returns "userChoice"
    for(let i = 0; i < gameChoices.length; i++)
        
        //Checks if the data inserted by the user and stored into "userChoice" matches one of the choices in "gameChoices"
        {
        if(gameChoices[i] === userChoice   
            || gameChoices[i].toUpperCase() === userChoice    //Makes the data inserted by user case insensitive, same as next line
            || gameChoices[i].toLowerCase() === userChoice){
                return gameChoices[i];    //Returns the respective choice (i.e. "Rock" will return "Rock", "ROCK" will return "Rock")
        } else {
            alert ("Incorrect Choice!");
        }
    }
}
console.log(getUserChoice());