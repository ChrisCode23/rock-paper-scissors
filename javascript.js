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
    
// Used as callback in "playGame"
let humanSelection;
let computerSelection;

// Controls a single round
function playRound(humanChoice, computerChoice) {

        roundCount++;

        const result = document.createElement("div");
        result.setAttribute("class", "result");
        result.textContent = `Round n.${roundCount}: You chose ${humanChoice} while computer chose ${computerChoice} `;

        

        document.body.appendChild(result);

        // Checks who won the round and updates score
        
        // If human wins
        if (humanChoice === "Paper" && computerChoice === "Rock"
            || humanChoice === "Scissors" && computerChoice === "Paper" 
            || humanChoice === "Rock" && computerChoice === "Scissors"  
        ) {
            result.textContent += '- You win the round!';
            humanScore++;
        }
        // If it's a tie
        else if (humanChoice === "Paper" && computerChoice === "Paper"
                || humanChoice === "Scissors" && computerChoice === "Scissors"
                || humanChoice === "Rock" && computerChoice === "Rock"
        ) { 
            result.textContent += '- It\'s a tie!';
        } 
        // If computer wins
        else {
            result.textContent += '- You lost the round!';
            computerScore++;
        }
    }
    


// Controls the entire game
function playGame() {
    
    const buttons = document.querySelectorAll("button");
    const winner = document.createElement("h3");


    // Game will create a score div, but only appears once user clicks a button and gets updated every time
    const score = document.createElement("div");

    // Round is played only once user clicks a button
   
        buttons.forEach((button) => {
        
            button.addEventListener("click", () => {
            
            // Round doesn't play if one of the players has a score of 5
            if(humanScore < 5 && computerScore < 5) {

                humanSelection = button.id;
                computerSelection = getComputerChoice();

            
                playRound(humanSelection, computerSelection);

                
                score.setAttribute("class", "score");
                score.textContent = `Score: Player ${humanScore} | Computer ${computerScore}`;

                document.body.appendChild(score);

                if (humanScore === 5) {
                    winner.textContent = "Player has won the game!";

                    document.body.appendChild(winner);
                } else if (computerScore === 5) {
                    winner.textContent = "Computer has won the game!";

                    document.body.appendChild(winner);
                }
            } 
                
            });

            
        });
    
}


playGame();