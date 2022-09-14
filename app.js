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