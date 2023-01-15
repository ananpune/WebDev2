//const and prompts we will be needing
var pName1 = prompt("p1 please enter your initials");
console.log(pName1);
var pName2 = prompt("p2 please enter your initials");
console.log(pName2);
const allButtons = document.querySelectorAll("button")
const p1Name = document.getElementById('playerName1');
const p2Name = document.getElementById('playerName2');
const reset = document.getElementById('reset');
const b0 = document.getElementById('b0');
const b1 = document.getElementById('b1');;
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');
const turn = document.getElementById('playerTurn');
let choiceClick;

//loading names and turns

window.addEventListener('DOMContentLoaded', () => {
    p1Name.innerHTML = pName1;
    p2Name.innerHTML = pName2;
    turn.innerHTML = pName1;

});
//button click event listener 
allButtons.forEach(allButton => allButton.addEventListener("click", e => {
    choiceClick = e.target.id;
    fillSquare();
    turnSwitch();
    winnerWinner();

}));

//check winner function
function winnerWinner() {
    //below are p1 winning combos
    if (b0.innerHTML === pName1) {
        if (b1.innerHTML === pName1) {
            if (b2.innerHTML === pName1) {
                alert("P1 Wins");
                location.reload();
            }
        }
        if (b4.innerHTML === pName1) {
            if (b8.innerHTML === pName1) {
                alert("P1 Wins");
                location.reload();

            }
        }
        if (b3.innerHTML === pName1) {
            if (b6.innerHTML === pName1) {
                alert("P1 Wins");
                location.reload();
            }
        }
    }
    if (b2.innerHTML === pName1) {
        if (b5.innerHTML === pName1) {
            if (b8.innerHTML === pName1) {
                alert("P1 Wins");
                location.reload();
            }
        }
        if (b4.innerHTML === pName1) {
            if (b6.innerHTML === pName1) {
                alert("P1 Wins");
                location.reload();
            }
        }
    }
    if (b1.innerHTML === pName1) {
        if (b4.innerHTML === pName1) {
            if (b7.innerHTML === pName1) {
                alert("P1 Wins");
                location.reload();
            }
        }
    }
    if (b3.innerHTML === pName1) {
        if (b4.innerHTML === pName1) {
            if (b5.innerHTML === pName1) {
                alert("P1 Wins");
                location.reload();
            }
        }
    }
    if (b6.innerHTML === pName1) {
        if (b7.innerHTML === pName1) {
            if (b8.innerHTML === pName1) {
                alert("P1 Wins");
                location.reload();
            }
        }
    }
    //below are p2 winning combos
    if (b6.innerHTML === pName2) {
        if (b7.innerHTML === pName2) {
            if (b8.innerHTML === pName2) {
                alert("P2 Wins");
                location.reload();
            }
        }
    }
    if (b3.innerHTML === pName2) {
        if (b4.innerHTML === pName2) {
            if (b5.innerHTML === pName2) {
                alert("P2 Wins");
                location.reload();
            }
        }
    }
    if (b1.innerHTML === pName2) {
        if (b4.innerHTML === pName2) {
            if (b7.innerHTML === pName2) {
                alert("P2 Wins");
                location.reload();
            }
        }
    }
    if (b2.innerHTML === pName2) {
        if (b5.innerHTML === pName2) {
            if (b8.innerHTML === pName2) {
                alert("P2 Wins");
                location.reload();
            }
        }
        if (b4.innerHTML === pName2) {
            if (b6.innerHTML === pName2) {
                alert("P2 Wins");
                location.reload();
            }
        }
    }
    if (b0.innerHTML === pName2) {
        if (b1.innerHTML === pName2) {
            if (b2.innerHTML === pName2) {
                alert("P2 Wins");
                location.reload();
            }
        }
        if (b4.innerHTML === pName2) {
            if (b8.innerHTML === pName2) {
                alert("P2 Wins");
                location.reload();
            }
        }
        if (b3.innerHTML === pName2) {
            if (b6.innerHTML === pName2) {
                alert("P2 Wins");
                location.reload();
            }
        }
    }

}

//change turn function
function turnSwitch() {
    if (turn.innerHTML === pName1) {
        turn.innerHTML = pName2;
    } else {
        turn.innerHTML = pName1;
    }

};

//fill square with initials
function fillSquare() {
    if (turn.innerHTML === pName1) {
        if (choiceClick === 'b0') {
            b0.innerHTML = pName1;
        }
        if (choiceClick === 'b1') {
            b1.innerHTML = pName1;
        }
        if (choiceClick === 'b2') {
            b2.innerHTML = pName1;
        }
        if (choiceClick === 'b3') {
            b3.innerHTML = pName1;
        }
        if (choiceClick === 'b4') {
            b4.innerHTML = pName1;
        }
        if (choiceClick === 'b5') {
            b5.innerHTML = pName1;
        }
        if (choiceClick === 'b6') {
            b6.innerHTML = pName1;
        }
        if (choiceClick === 'b7') {
            b7.innerHTML = pName1;
        }
        if (choiceClick === 'b8') {
            b8.innerHTML = pName1;
        }
    }
    if (turn.innerHTML === pName2) {
        if (choiceClick === 'b0') {
            b0.innerHTML = pName2;
        }
        if (choiceClick === 'b1') {
            b1.innerHTML = pName2;
        }
        if (choiceClick === 'b2') {
            b2.innerHTML = pName2;
        }
        if (choiceClick === 'b3') {
            b3.innerHTML = pName2;
        }
        if (choiceClick === 'b4') {
            b4.innerHTML = pName2;
        }
        if (choiceClick === 'b5') {
            b5.innerHTML = pName2;
        }
        if (choiceClick === 'b6') {
            b6.innerHTML = pName2;
        }
        if (choiceClick === 'b7') {
            b7.innerHTML = pName2;
        }
        if (choiceClick === 'b8') {
            b8.innerHTML = pName2;

        }
    }

};