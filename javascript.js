//Store an array global variable "gameChoices" which includes "Rock", "Scissors" and "Paper"
let gameChoices = ["Rock", "Paper", "Scissors"];

//Create a function which randomly returns "Rock", "Scissors" or "Paper" array element for the computer
function getComputerChoice(){
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}
console.log(getComputerChoice());

//Create a function which allows user to select "Rock", "Scissors" or "Paper" via a prompt