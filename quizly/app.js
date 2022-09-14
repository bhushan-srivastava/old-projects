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