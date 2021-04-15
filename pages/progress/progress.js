let p  = document.getElementById('planet-progress');
let value = 30;

setInterval(() => {
    if (value === 800) {
        p.value = 100;
        value = 100;
    } else {
        p.value = ++value;
    }
}, 10);