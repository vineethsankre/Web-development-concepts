let defuserEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");
let countdown = 10;

let intervalId = setInterval(function() {
    countdown = countdown - 1;
    timerEl.textContent = countdown;
    if (countdown === 0) {
        timerEl.textContent = "BOOOM!!";
        timerEl.style.color = "#ffce00";
        timerEl.style.fontFamily = "'Bungee Spice', sans-serif";
        timerEl.style.fontSize = "80px";
        clearInterval(intervalId);
    }
}, 1000);

defuserEl.addEventListener("keydown", function(event) {
    let bombDefuserText = defuserEl.value;
    if (event.key === "Enter" && bombDefuserText === "defuse" && countdown !== 0) {
        timerEl.style.color = "#00FF00";
        timerEl.style.fontSize = "40px";
        timerEl.style.fontFamily = "'Sofia Sans Condensed', sans-serif";
        timerEl.textContent = "Congrats, Bomb has been defused successfully";
        clearInterval(intervalId);
    }
});