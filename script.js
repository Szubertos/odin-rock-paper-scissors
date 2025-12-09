console.log("Hello World!")

//Computer chooses number from 0-2, and is then assigned Rock, Paper or Scissors.
function computerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice == 0) {
        return 'Rock';
    } else if (choice == 1) {
        return 'Paper';
    }   else {
        return 'Scissors';
    }
}

//Prompt allowing player to choose their move.
function humanChoice() {
    let choice = prompt();
    return choice;
}

//Main gameplay function.
function playGame() {
    //Variables for tracking the score.
    let humanScore = 0;
    let computerScore = 0;

    //Code for a singular round. It first recognizes move chosen by the computer, later compares it to the move chosen by human.
    function playRound(computerHand, humanHand) {

        if (computerHand == 'Rock') {
            if (humanHand.toLowerCase() == 'rock') {
                console.log('Tie.');
                return;
            } else

            if (humanHand.toLowerCase() == 'paper') {
                console.log('You Win!');
                humanScore++;
                return;
            } else

            if (humanHand.toLowerCase() == 'scissors') {
                console.log('You lose.')
                computerScore++;
                return;
            }
        } else

        if (computerHand == 'Paper') {
            if (humanHand.toLowerCase() == 'rock') {
                console.log('You lose.')
                computerScore++;
                return;
            } else

            if (humanHand.toLowerCase() == 'paper') {
                console.log('Tie.');
                return;
            } else

            if (humanHand.toLowerCase() == 'scissors') {
                console.log('You Win!');
                humanScore++;
                return;
            }
        } else

        if (computerHand == 'Scissors') {
            if (humanHand.toLowerCase() == 'rock') {
                console.log('You Win!');
                humanScore++;
                return;
            } else

            if (humanHand.toLowerCase() == 'paper') {
                console.log('You lose.')
                computerScore++;
                return;
            } else

            if (humanHand.toLowerCase() == 'scissors') {
                console.log('Tie.');
                return ;
            }
        }
    }

    //Loop that calls for the round to happen, 5 times.
    for (i=1; i<6; i++) {
        const humanSelection = humanChoice();
        const computerSelection = computerChoice();
        playRound(computerSelection, humanSelection);
    }

    //Comparign scores to determine the winner.
    if (humanScore > computerScore) {
        console.log("You won the game!")
    } else if (computerScore > humanScore) {
        console.log("You lost the game.")
    } else {
        console.log("It was a tie.")
    }
}

//Calling the function for the gamepaly to happen.
//playGame();