console.log("Hello World!")

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

function humanChoice() {
    let choice = prompt();
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

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

    for (i=1; i<6; i++) {
        const humanSelection = humanChoice();
        const computerSelection = computerChoice();
        playRound(computerSelection, humanSelection);
    }

    if (humanScore > computerScore) {
        console.log("You won the game!")
    } else if (computerScore > humanScore) {
        console.log("You lost the game.")
    } else {
        console.log("It was a tie.")
    }
}

playGame();