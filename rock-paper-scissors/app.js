var setTheme = window.localStorage.getItem('theme');
if (setTheme == null) {
    document.getElementById("myStyleSheet").href = 'lightmode.css';
    window.localStorage.setItem('theme', 'lightmode.css');
}
else if (setTheme == 'lightmode.css') {
    document.getElementById("myStyleSheet").href = 'lightmode.css';
    window.localStorage.setItem('theme', 'lightmode.css');
}
else if (setTheme == 'darkmode.css') {
    document.getElementById("myStyleSheet").href = 'darkmode.css';
    window.localStorage.setItem('theme', 'darkmode.css');
}
function change() {
    var setTheme = window.localStorage.getItem('theme');
    if (setTheme == 'darkmode.css') {
        document.getElementById("myStyleSheet").href = 'lightmode.css';
        window.localStorage.setItem('theme', 'lightmode.css');
    }
    else if (setTheme == 'lightmode.css') {
        document.getElementById("myStyleSheet").href = 'darkmode.css';
        window.localStorage.setItem('theme', 'darkmode.css');
    }
}

var arr = ["rock", "paper", "scissors"];
var result;
var userScore = 0;
var computerScore = 0;
function userInputFunction() {

    var userInput = document.getElementsByName('option');

    for (var j = 0; j < userInput.length; j++) {
        if (userInput[j].checked) {
            document.getElementById('currentUserInputImage').setAttribute('src', userInput[j].id + '.png');
            document.getElementById('currentUserInputImage').setAttribute('alt', userInput[j].id + ' picture');

            var computerInput = arr[Math.floor(Math.random() * arr.length)];

            document.getElementById('currentComputerInputImage').setAttribute('src', computerInput + '.png');
            document.getElementById('currentComputerInputImage').setAttribute('alt', computerInput + ' picture');

            if ((userInput[j].id == "rock" && computerInput == "paper") || (userInput[j].id == "paper" && computerInput == "rock")) {
                result = "paper";
            }
            else if ((userInput[j].id == "rock" && computerInput == "scissors") || (userInput[j].id == "scissors" && computerInput == "rock")) {
                result = "rock";
            }
            else {
                result = "scissors";
            }
            if (result == userInput[j].id && result != computerInput) {
                userScore++;
            }
            else if (result == computerInput && result != userInput[j].id) {
                computerScore++;
            }
            document.getElementById('score').innerHTML = 'Score: <br> User: ' + userScore + ' Computer: ' + computerScore;
            break;
        }
    }
}