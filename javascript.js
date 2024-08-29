//Store an array global variable "gameChoices" which includes "Rock", "Scissor" and "Paper"
let gameChoices = ["Rock", "Paper", "Scissor"];

//Create a function which randomly returns "Rock", "Scissor" or "Paper" array element for the computer
function getComputerChoice(){
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}
console.log(getComputerChoice());

//Create a function which allows user to select "Rock", "Scissor" or "Paper" via a prompt