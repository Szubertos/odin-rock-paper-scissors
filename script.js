console.log("Hello World!")

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    console.log(choice);
    if (choice == 0) {
        return 'Rock';
    } else if (choice == 1) {
        return 'Paper';
    }   else {
        return 'Scissors';
    }
}

console.log(getComputerChoice())

function getHumanChoice() {
    let choice = prompt();
    return choice;
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;