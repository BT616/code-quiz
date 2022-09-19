//questions 
var questions = [
    {
        title: "A very useful tool used during development and debugging for printting content to the debugger is:",
        choices: [".JavaScript", ".Terminal/bash", ".for loops", ".console.log"],
        answer: ".console.log",
    },
    {
        title: "Commonly used data types DO NOT include:",
        choices: [".String", ".Boolean", ".Alerts", ".Numbers"],
        answer: ".Alerts",
    },
    {
        title: "The condiition of an if / else statement is enclised within",
        choices: [".quotes", ".curly brackets", ".paranthesis", ".square brackets"],
        answer: ".paranthesis",
    },
    {
        title: "Arrays in javascript can be used to store _____.?",
        choices: [".Numbers and Strings", ".Other Arrays", ".boolean", ".All of the Above"],
        answer: ".Allof the above",
    },
    {
        title: "String values must be enclosed within ___ when being assigned to variables.",
        choices: [".commas", ".Curly Brackets", ".Quotes", ".Paranthesis"],
        answer: ".Quotes",
    },
];


var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsEl = document.querySelector("#questions");
var wrapper = document.querySelector("#wrapper");


var questionList = 0;
var score = 0;
var secondsLeft = 60;
var timerInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ol");

//timer 


timer.addEventListener("click", function () {
    if (timerInterval === 0) {
        timerInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time:" + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(timerInterval);
                currentTime.textContent = "game over";


            }

        }, 1000);
    }
    render();
});

//questions

function render() {
    questionsEl.innerHTML = "";
    ulCreate.innerHTML = "";


    var userQuestion = questions[questionList].title;
    var userChoices = questions[questionList].choices;
    questionsEl.textContent = userQuestion;

    //answers 
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("button");
        listItem.textContent = newItem;


        questionsEl.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", function (e) { compare(newItem) });
       

    })



}


function compare(userInput) {
    
    var correctAnswer = questions[questionList].answer;
    var createDiv=document.createElement("div");
    if (userInput === correctAnswer) {
       
        createDiv.textContent="correct";
        createDiv.setAttribute("id","createDiv");
        ulCreate.appendChild(createDiv);

    } else {
        if (secondsLeft >= penalty) {
            secondsLeft -= penalty
           


        } else {
            secondsLeft = 0
        }
    }
    //push questions
    questionList++
    if (questionList < questions.length) {
        render()
    }
    else {

        endgame()
    }
}

//end gamefunction shows the submit initials box at the end of the quiz
function endgame() {
    clearInterval(timerInterval);
    console.log("endgame")
    questionsEl.innerHTML = "";
    ulCreate.innerHTML = "";

    var endGameScreen= document.createElement("h1");
    endGameScreen.setAttribute("id","endGameScreen");
    endGameScreen.textContent= "Game Over: Enter Your Initials";
   questionsEl.appendChild(endGameScreen);

    // intial box 
    var submitInitials = document.createElement("input");
    submitInitials.setAttribute("id", "initials");
    submitInitials.setAttribute("type", "text");
    submitInitials.textContent = "";
    questionsEl.appendChild(submitInitials);

    //initial button for intial box
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";
    questionsEl.appendChild(createSubmit);



    // creates the submit storage and replaces the page with the highschore html
    createSubmit.addEventListener("click", function () {
        var userInitials = submitInitials.value;

        if (userInitials === null) {
            alert("Must Enter Initials");
        } else {
            var finalScore = {
                initials: userInitials,
                highScore: secondsLeft,
            };

           

            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);

            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            window.location.replace("highScores.html");
        }
    });


}


//highscore


//
