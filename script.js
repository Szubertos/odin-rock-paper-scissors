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

        console.log(computerHand);
        if (computerHand == 'Rock') {
            if (humanHand.toLowerCase() == 'rock') {
                return;
            } else

            if (humanHand.toLowerCase() == 'paper') {
                humanScore++;
                console.log(humanScore);
                return;
            } else

            if (humanHand.toLowerCase() == 'scissors') {
                computerScore++;
                return;
            }
        } else

        if (computerHand == 'Paper') {
            if (humanHand.toLowerCase() == 'rock') {
                computerScore++;
                return;
            } else

            if (humanHand.toLowerCase() == 'paper') {
                return;
            } else

            if (humanHand.toLowerCase() == 'scissors') {
                console.log(humanScore);
                humanScore++;
                return;
            }
        } else

        if (computerHand == 'Scissors') {
            if (humanHand.toLowerCase() == 'rock') {
                console.log(humanScore);
                humanScore++;
                return;
            } else

            if (humanHand.toLowerCase() == 'paper') {
                computerScore++;
                return;
            } else

            if (humanHand.toLowerCase() == 'scissors') {
                return ;
            }
        }
    }

    for (i=1; i<6; i++) {
        const humanSelection = humanChoice();
        const computerSelection = computerChoice();
        console.log(humanSelection + ' ' + computerSelection);
        playRound(computerSelection, humanSelection);
        console.log('round');
        console.log(humanScore, computerScore);
    }
}

playGame();