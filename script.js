    const btnRock = document.getElementById("rockButton");
    const btnPaper = document.getElementById("paperButton");
    const btnScissors = document.getElementById("scissorsButton");
    const humanChoiceLabel = document.getElementById("humanRPS");
    const computerChoiceLabel = document.getElementById("computerRPS");
    const humanScoreLabel = document.getElementById("humanScore");
    const computerScoreLabel = document.getElementById("computerScore");
    const winnerAnnoucement = document.getElementById("winnerAnnoucement");

//Computer chooses number from 0-2, and is then assigned Rock, Paper or Scissors.
function computerChoice() {
    let choice = Math.floor(Math.random()*3);
    if (choice == 0) {
        computerChoiceLabel.textContent = 'Rock';
        return 'Rock';
    } else if (choice == 1) {
        computerChoiceLabel.textContent = 'Paper';
        return 'Paper';
    }   else {
        computerChoiceLabel.textContent = 'Scissors';
        return 'Scissors';
    }
}

//Main gameplay function.
function playGame() {
    //Variables for tracking the score.
    let humanScore = 0;
    let computerScore = 0;

    if (humanScore == 3 || computerScore == 3) {
        console.log("skoncz juz")
        return;
    }

    btnRock.addEventListener("click", function(event){
        if (humanScore == 3 || computerScore == 3) {
        console.log("skoncz juz")
        return;
    }
        event.preventDefault();
        humanChoice = 'Rock';
        humanChoiceLabel.textContent = 'Rock';
        playRound(computerChoice(), humanChoice);
        humanScoreLabel.textContent = humanScore;
        computerScoreLabel.textContent = computerScore;
        if (humanScore == 3) {
            winnerAnnoucement.textContent="You Win!";
            return;
        } else if (computerScore == 3) {
            winnerAnnoucement.textContent="You lose.";
            return;
        }
    })

    btnPaper.addEventListener("click", function(event){
        if (humanScore == 3 || computerScore == 3) {
        console.log("skoncz juz")
        return;
    }
        event.preventDefault();
        humanChoice = 'Paper';
        humanChoiceLabel.textContent = 'Paper';
        playRound(computerChoice(), humanChoice);
        humanScoreLabel.textContent = humanScore;
        computerScoreLabel.textContent = computerScore;
        if (humanScore == 3) {
            winnerAnnoucement.textContent="You Win!";
            return;
        } else if (computerScore == 3) {
            winnerAnnoucement.textContent="You lose.";
            return;
        }
    })

    btnScissors.addEventListener("click", function(event){
        if (humanScore == 3 || computerScore == 3) {
        console.log("skoncz juz")
        return;
}
        event.preventDefault();
        humanChoice = 'Scissors';
        humanChoiceLabel.textContent = 'Scissors';
        playRound(computerChoice(), humanChoice);
        humanScoreLabel.textContent = humanScore;
        computerScoreLabel.textContent = computerScore;
        if (humanScore == 3) {
            winnerAnnoucement.textContent="You Win!";
            return;
        } else if (computerScore == 3) {
            winnerAnnoucement.textContent="You lose.";
            return;
        }
    })

    //Code for a singular round. It first recognizes move chosen by the computer, later compares it to the move chosen by human.
    function playRound(computerHand, humanHand) {

        if (computerHand == 'Rock') {

            console.log("compRock");
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
}

//Calling the function for the gamepaly to happen.
playGame();