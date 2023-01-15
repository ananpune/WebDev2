//variables we will be using later on
const submitButton = document.getElementById("submit");
const helpButton = document.getElementById("help");
const restartButton = document.getElementById("restart");
var questionBox = document.getElementById("questional");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");



//adding a event listener to our restart button to just reload the page
restartButton.addEventListener("click", e => {
    location.reload();
});
//event listener for the help button which alerts the user with instructions for the game
helpButton.addEventListener("click", e => {
    //instructions
    alert("Read each question carefully and select an answer, if you are correct the question will change, if not it will remain the same, if you are correct it will say you are correct and prompt you to continue! There are 4 total questions, if you get all 4 right, the quiz will restart")
});

//Event listener for submit button

submitButton.addEventListener("click", e => {

    //checks if the questionBox matches the first question
    if (questionBox.innerHTML === "Which artist is best known for distorted imagery?") {
        //checks if radio button answer1 is checked and alerts good job
        if (answer1.checked) {
            alert("YES! Good Job!");
            //changes the question by changing labels and the questonBox

            questionBox.innerHTML = ("What is the tallest tower on Earth?");
            document.getElementById("labela").innerHTML = ("CN Tower");
            document.getElementById("labelb").innerHTML = ("Burj Khalifa");
            document.getElementById("labelc").innerHTML = ("Empire State Building");

        } else {
            //if wrong keep the person on the page



        }

    }
    //checks if the questionBox holds the second question and alerts YES if they selected answer2 radio button
    if (questionBox.innerHTML === "What is the tallest tower on Earth?") {
        if (document.getElementById("answer2").checked) {
            alert("YES!");

            //changes to the next question

            questionBox.innerHTML = ("Who has won the most Olympic Swimming Medals for USA");
            document.getElementById("labela").innerHTML = ("Aaron Donald");
            document.getElementById("labelb").innerHTML = ("Reggie Miller");
            document.getElementById("labelc").innerHTML = ("Michael Phelps");
        } else {

            //keep user stuck here if they get it wrong
        }

    }
    //checks if the questionBox holds the last question and prompt YES if the answer3 radio box is checked
    if (questionBox.innerHTML === ("Who has won the most Olympic Swimming Medals for USA")) {
        if (answer3.checked) {
            alert("YES!");
            //change question
            questionBox.innerHTML = ("Which NBA player has the most Championships won?");
            document.getElementById("labela").innerHTML = ("Michael Jordan");
            document.getElementById("labelb").innerHTML = ("LeBron James");
            document.getElementById("labelc").innerHTML = ("Bill Russell");

        } else {
            //keep user stuck if they get it wrong

        }
        //finally last question gets checked and if you select radio box number 3 then alert user that they won and reload the quiz
    } else if (questionBox.innerHTML === ("Which NBA player has the most Championships won?")) {
        if (answer3.checked) {
            alert("YES! YOU WIN");
            location.reload();
        }
        //else keep them stuck


    }

})