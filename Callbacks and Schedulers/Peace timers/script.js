let twentySecBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecBtnEl = document.getElementById("fortySecondsBtn");
let oneMinBtnEl = document.getElementById("oneMinuteBtn");
let timerTextEl = document.getElementById("timerText");

let secondsLeft = 0;
let timerCompletedText = "Your moment is complete";
let timerId;

function clearPreviousTimers() {
    clearInterval(timerId);
}
twentySecBtnEl.onclick = function() {
    secondsLeft = 20;
    clearPreviousTimers();
    setTimerAndShow();
};
thirtySecBtnEl.onclick = function() {
    secondsLeft = 30;
    clearPreviousTimers();
    setTimerAndShow();
};
fortySecBtnEl.onclick = function() {
    secondsLeft = 40;
    clearPreviousTimers();
    setTimerAndShow();
};
oneMinBtnEl.onclick = function() {
    secondsLeft = 60;
    clearPreviousTimers();
    setTimerAndShow();
};

function setTimerAndShow() {
    timerTextEl.textContent = secondsLeft + " seconds left";
    timerId = setInterval(startTimer, 1000);
}

function startTimer() {
    if (secondsLeft > 1) {
        secondsLeft = secondsLeft - 1;
        timerTextEl.textContent = secondsLeft + " seconds left";
    } else {
        clearPreviousTimers();
        timerTextEl.textContent = timerCompletedText;
    }
}