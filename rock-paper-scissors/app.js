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


const ball = document.getElementById('cursors');
let aimX = 0;
let aimY = 0;
let currentX = 0;
let currentY = 0;
let speed = 0.3;
function animate() {
    currentX += (aimX - currentX) * speed;
    currentY += (aimY - currentY) * speed;
    ball.style.left = currentX + "px";
    ball.style.top = currentY + "px";
    requestAnimationFrame(animate);
}
animate();
document.addEventListener("mousemove", function (event) {
    aimX = event.pageX;
    aimY = event.pageY;
});
function mouseOverFunction() {
    if (window.innerHeight > 446 && window.innerWidth > 1009) {
        document.getElementById('cursors').style.display = 'inherit';
        document.getElementById('cursors').style.width = '32px';
        document.getElementById('cursors').style.height = '32px';
        document.getElementById('cursors').style.border = 'solid 2px white';
        document.getElementById('cursors').style.backgroundColor = 'rgba(255, 255, 255, 0)';
    }
    else {
        document.getElementById('cursors').style.display = 'none';
    }
}
function mouseOutFunction() {
    if (window.innerHeight > 446 && window.innerWidth > 1009) {
        document.getElementById('cursors').style.display = 'inherit';
        document.getElementById('cursors').style.width = '10px';
        document.getElementById('cursors').style.height = '10px';
        document.getElementById('cursors').style.border = 'none';
        document.getElementById('cursors').style.backgroundColor = '#111';
    }
    else {
        document.getElementById('cursors').style.display = 'none';
    }
}
document.onload = function () { document.getElementById('cursors').style.display = 'none'; };