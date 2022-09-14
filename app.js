/*const scrollContainer = document.getElementsByClassName('main')[0];
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft = scrollContainer.scrollLeft + 20 * evt.deltaY;
});*/
var setTheme = window.localStorage.getItem('theme');
if (setTheme == null) {
    window.localStorage.setItem('theme', 'lightmode.css');
    document.getElementById("myStyleSheet").href = 'lightmode.css';
}
else if (setTheme == 'lightmode.css') {
    window.localStorage.setItem('theme', 'lightmode.css');
    document.getElementById("myStyleSheet").href = 'lightmode.css';
}
else if (setTheme == 'darkmode.css') {
    window.localStorage.setItem('theme', 'darkmode.css');
    document.getElementById("myStyleSheet").href = 'darkmode.css';
}
function change() {
    var setTheme = window.localStorage.getItem('theme');
    if (setTheme == 'darkmode.css') {
        window.localStorage.setItem('theme', 'lightmode.css');
        document.getElementById("myStyleSheet").href = 'lightmode.css';
    }
    else if (setTheme == 'lightmode.css') {
        window.localStorage.setItem('theme', 'darkmode.css');
        document.getElementById("myStyleSheet").href = 'darkmode.css';
    }
}

const scrollContainer = document.getElementsByClassName('main')[0];

window.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    if (evt.deltaY > 0) {
        slideRight();
    }
    else if (evt.deltaY < 0) {
        slideLeft();
    }
});

window.addEventListener("keydown", (e) => {
    e.preventDefault();
    var x = e.key;
    if (x == "ArrowDown" || x == "ArrowRight" || x == "PageDown" || x == " ") {
        slideRight();
    }
    else if (x == "ArrowUp" || x == "ArrowLeft" || x == "PageUp") {
        slideLeft();
    }
    else if (x == "Home") {
        homeFunction();
    }
    else if (x == "End") {
        endFunction();
    }
});

window.addEventListener('touchstart', (event1) => {
    event1.preventDefault();
    var touchobj = event1.changedTouches[0]
    if (touchobj.pageX > (window.innerWidth * (3 / 4))) {
        slideRight();
    }
    else if (touchobj.pageX < (window.innerWidth * (1 / 4))) {
        slideLeft();
    }
});

function homeFunction() {
    scrollContainer.scrollBy({
        top: 0,
        left: -50000/*,
        behavior: 'smooth'*/
    })
}
function slideRight() {
    scrollContainer.scrollBy({
        top: 0,
        left: window.innerWidth * 1/*,
        behavior: 'smooth'*/
    })
}
function slideLeft() {
    scrollContainer.scrollBy({
        top: 0,
        left: window.innerWidth * (-1)/*,
        behavior: 'smooth'*/
    })

}
function endFunction() {
    scrollContainer.scrollBy({
        top: 0,
        left: 50000/*,
        behavior: 'smooth'*/
    })

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