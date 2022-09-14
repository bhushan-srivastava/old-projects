var setTheme = window.localStorage.getItem('theme');
if (setTheme == null) {
    window.localStorage.setItem('theme', 'lightmode.css');
    document.getElementById('html').style.filter = 'invert(0.9)';
}
else if (setTheme == 'lightmode.css') {
    window.localStorage.setItem('theme', 'lightmode.css');
    document.getElementById('html').style.filter = 'invert(0.9)';
}
else if (setTheme == 'darkmode.css') {
    window.localStorage.setItem('theme', 'darkmode.css');
    document.getElementById('html').style.filter = 'invert(0)';
}
function change() {
    var setTheme = window.localStorage.getItem('theme');
    if (setTheme == 'darkmode.css') {
        window.localStorage.setItem('theme', 'lightmode.css');
        document.getElementById('html').style.filter = 'invert(0.9)';
    }
    else if (setTheme == 'lightmode.css') {
        window.localStorage.setItem('theme', 'darkmode.css');
        document.getElementById('html').style.filter = 'invert(0)';
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
        document.getElementById('cursors').style.border = 'solid 2px #111';
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