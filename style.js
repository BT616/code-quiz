//questions 
var questions = [
    {
        title: "A very useful tool used during development and debugging for printting content to the debugger is:",
        choices: [".JavaScript",".Terminal/bash",".for loops",".console.log"],
        answer:"4.console.log",
    },
    {
       title: "Commonly used data types DO NOT include:",
        choices: [".String",".Boolean",".Alerts",".Numbers"],
        answer:"3.Alerts",
    },
    {
        title: "The condiition of an if / else statement is enclised within",
        choices: [".quotes",".curly brackets",".paranthesis",".square brackets"],
        answer:"3.paranthesis",
    },
    {
        title: "Arrays in javascript can be used to store _____.?",
        choices: [".Numbers and Strings",".Other Arrays",".boolean",".All of the Above"],
        answer:"4.Allof the above",
    },
    {
        title: "String values must be enclosed within ___ when being assigned to variables.",
        choices: [".commas",".Curly Brackets",".Quotes",".Paranthesis"],
        answer:"3.Quotes",
    },
];


var  currentTime= document.querySelector("#currentTime");
var timer  = document.querySelector("#startTime");
var questionsEl = document.querySelector("#questions");
var wrapper = document.querySelector("#wrapper");


var questionList = 0;
var score = 0;

var secondsLeft =75;
var timerInterval = 0;
var penalty= 10;
var ulCreate =document.createElement("ol");
   
//timer 


timer.addEventListener("click", function(){
    if (timerInterval === 0){
    timerInterval = setInterval(function(){
        secondsLeft --;
        currentTime.textContent = "Time:" + secondsLeft;

        if (secondsLeft <= 0){
            clearInterval(timerInterval);
           
            currentTime.textContent=  "game over";
        }

    },1000);
    }
    render(questionList);
});

//questions

function render(questionList){
    questionsEl.innerHTML ="";
    ulCreate.innerHTML="";
    for (var i=0; i < questions.length; i++){

        var userQuestion = questions[questionList].title;
        var userChoices= questions[questionList].choices;
        questionsEl.textContent= userQuestion;
    }
userChoices.forEach(function (newItem) {
var listItem = document.createElement("li");
listItem.textContent=newItem;
questionsEl.appendChild(ulCreate);
ulCreate.appendChild(listItem);
listItem.addEventListener("click",(compare));

})

}

function compare(event){

}


questionList++


//highscore

