
//Initialisation of user and computer scores.
let humanScore = 0; let computerScore = 0

//The function that runs the number of games
function loopedRound() {
    let numOfGame = (prompt("How many game?"))

    //If the user clicks cancel
    if (numOfGame === null) {
        alert("See you :)")
    }
    else {
        for (let i = 0; i < numOfGame; i++) {
            userPlay()
        }
        whoWon()
        humanScore = computerScore = 0
    }

}

//Checks the differences of the scores
function whoWon() {

    humanScore > computerScore ? alert(`You won by ${humanScore} : ${computerScore}`) :
        computerScore > humanScore ? alert(`You lost by ${computerScore} : ${humanScore}`) :
            alert("There is no winner")

}

//The computer play function itself. It's set at random
function computerPlay() {
    let hands = ['Rock', 'Paper', 'Scissors'];
    let randomPick = Math.floor(Math.random() * 3);
    return hands[randomPick]
}

//The function that prompt the user of their hand
function userPlay() {
    let user = prompt("What is your hand? (Rock = 1, Paper = 2, Scissors = 3)");
    return playRound(user, computerPlay())

}

//The main RPS function. It checks for the winner of each round.
function playRound(user, computer) {

    const hands = {
        1: 'Rock',
        2: 'Paper',
        3: 'Scissors'
    }

    let userlowercased = hands[user].toLowerCase();
    let computerLowerCased = computer.toLowerCase();

    if (userlowercased == computerLowerCased) {
        alert("Its a tie")
        return
    }

    if (userlowercased == "rock" && computerLowerCased == "scissors") {
        alert(`You Win! ${hands[user]} beats ${computer}`)
        humanScore += 1
        return
    }
    if (userlowercased == "paper" && computerLowerCased == "rock") {
        alert(`You Win! ${hands[user]} beats ${computer}`)
        humanScore += 1
        return
    }
    if (userlowercased == "scissors" && computerLowerCased == "paper") {
        alert(`You Win! ${hands[user]} beats ${computer}`)
        humanScore += 1
        return
    }

    else {
        alert(`You Lose! ${computer} beats ${hands[user]}`)
        computerScore += 1
        return
    }

}

document.addEventListener('keydown', function (event) {
    if (event.key == "Enter") {
        loopedRound()
    }
})