//questions 
var questions = [
    {
        title: "A very useful tool used during development and debugging for printting content to the debugger is:",
        choices: ['1.JavaScript','2.Terminal/bash','3.for loops','4.console.log'],
        answer:"4.console.log",
    },
    {
       title: "Commonly used data types DO NOT include:",
        title: ["1.String","2.Boolean","3.Alerts","4.Numbers"],
        answer:"3.Alerts",
    },
    {
        title: "The condiition of an if / else statement is enclised within",
        choices: ["1.quotes","2.curly brackets","3.paranthesis","4.square brackets"],
        answer:"3.paranthesis",
    },
    {
        title: "Arrays in javascript can be used to store _____.?",
        choices: ["1.Numbers and Strings","2.Other Arrays","3.boolean","4.All of the Above"],
        answer:"4.Allof the above",
    },
    {
        title: "String values must be enclosed within ___ when being assigned to variables.",
        choices: ["1.commas","2.Curly Brackets","3.Quotes","4.Paranthesis"],
        answer:"Quotes",
    },
];


var  currentTime= document.querySelector("#currentTime");
var timer  = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDIv");
var wrapper = document.querySelector("#wrapper");


var questionList = 0;
var score = 0;

var secondsLeft =75;
var timerInterval = 0;
var penalty= 10;
var ulCreate =document.createElement("ul");
   
//timer 

timer.addEventListener("click", function(){
    if (timerInterval === 0){
    timerInterval = setInterval(function(){
        secondsLeft --;
        currentTime.textContent = "Time:" + secondsLeft;

        if (secondsLeft <= 0){
            clearInterval(timerInterval);
            allDone();
            currentTime.textContent=  "game over";
        }

    },1000);
    }
    render(questionList);
});

//questions

function render(questionList){
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML ="";
    for(var i =0; i < questions.length; i++){
        var userQuestion = questions[questionList].title;
        var userChoices = questions[questionList].choices;
        questionsDiv.textContent = userQuestion;
    }
    userChoices.forEach(function(newItem){
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click",(compare));
        });
}








