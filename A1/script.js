const compDisp = document.getElementById("compchoice")
const uDisp = document.getElementById("userchoice")
const allButtons = document.querySelectorAll("button")
const whoWonDisp = document.getElementById("whowon")
const ScoreDispUser = document.getElementById("numberUser")
const ScoreDispComp = document.getElementById("numberComp")
    //variables we want to access everywhere
let uChoice
let cChoice
let winner
let counterUser = 0
let counterComp = 0


allButtons.forEach(allButton => allButton.addEventListener("click", e => {
    //all the functions are run on a click here


    uChoice = e.target.alt
    uDisp.innerHTML = uChoice
    makeCompChoice()
    whoWon()
    countingWins()

}))


function makeCompChoice() {
    //making computer pick a choice
    const compNum = Math.floor(Math.random() * 3)

    console.log(compNum)

    if (compNum === 0) {
        cChoice = "Rock"
    }
    if (compNum === 1) {
        cChoice = "Paper"
    }
    if (compNum === 2) {
        cChoice = "Scissors"
    }
    compDisp.innerHTML = cChoice

}

function whoWon() {
    // check all possible combinations to determine a winner

    if (uChoice === "Rock" && cChoice === "Paper") {
        winner = "Computer Wins"



    } else if (uChoice === "Paper" && cChoice === "Rock") {
        winner = "You Win"



    } else if (uChoice === "Paper" && cChoice === "Scissors") {
        winner = "Computer Wins"



    } else if (uChoice === "Scissors" && cChoice === "Paper") {
        winner = "You Win"



    } else if (uChoice === "Rock" && cChoice === "Scissors") {
        winner = "You Win"


    } else if (uChoice === "Scissors" && cChoice === "Rock") {
        winner = "Computer Wins"

    } else if (uChoice === cChoice) {
        winner = "Draw"
    }

    whoWonDisp.innerHTML = winner

}

function countingWins() {

    // keeping score
    if (winner === "Computer Wins") {
        counterComp++
    }
    if (winner === "You Win") {
        counterUser++
    }

    // refresh visuals
    ScoreDispComp.innerHTML = counterComp
    ScoreDispUser.innerHTML = counterUser

}