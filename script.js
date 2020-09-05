const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYear = '1 Jan 2021';

function countdown () {
    const newYearDate = new Date(newYear);

    const currentDate = new Date();
    const diff = newYearDate - currentDate;

    const totalSeconds = Math.floor(diff / 1000);
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds/3600) % 24;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const seconds = totalSeconds % 60;


    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10? '0'+time : time;
}


countdown();

setInterval(() => {
    countdown();
}, 1000);