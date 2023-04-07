// console.log("working");

// declaring mapping of what beats what, i.e; rock beats scissors therefore rock=scissors
const whatBeatsWhat = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
}

// store key indexes from whatBeatsWhat into variable => computerChoices = {rock,paper,scissors}
const computerChoices = Object.keys(whatBeatsWhat)

function computerPicks() {
    // obtain random result of rock paper and scissors using math random over index length of computerChoices => [0,1,2]
    let randomizeChoice = Math.floor(Math.random() * computerChoices.length)
    // returns random index from computerChoices
    return computerChoices[randomizeChoice]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.getElementById("result").innerHTML = "It is a tie!"
    }

    // check if playerSelection in whatBeatsWhat maps to computerSelection
    // and if so, player has beaten computer.
    else if (whatBeatsWhat[playerSelection] === computerSelection) {
        document.getElementById("result").innerHTML = "You win this game!";
    } else {
        document.getElementById("result").innerHTML = "The computer wins!"

    }
}

// store all buttons into variable
const buttons = document.querySelectorAll('.btn-choice');
// add event listener to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // get player choice from data-choice in buttons
        const playerSelection = button.dataset.choice;
        // run function to get computer choice
        const computerSelection = computerPicks()
        // run playRound function with previous choices
        playRound(playerSelection, computerSelection)
    })
});