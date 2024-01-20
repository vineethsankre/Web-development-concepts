let hoursInput = document.getElementById("hoursInput");
let minutesInput = document.getElementById("minutesInput");
let convertBtn = document.getElementById("convertBtn");
let timeInSecondsElement = document.getElementById("timeInSeconds");
let errorMsgElement = document.getElementById("errorMsg");

function convertToSeconds(hours, minutes) {
    let seconds = (parseInt(hours) * 3600) + (parseInt(minutes) * 60);
    timeInSecondsElement.classList.add("d-block");
    timeInSecondsElement.textContent = seconds + "s";
    errorMsgElement.textContent = "";
}

convertBtn.addEventListener("click", function() {
    let hours = hoursInput.value;
    let minutes = minutesInput.value;
    if (hours === "") {
        errorMsgElement.textContent = "Please enter a valid number of hours.";
    } else if (minutes === "") {
        errorMsgElement.textContent = "Please enter a valid number of minutes.";
    } else {
        convertToSeconds(hours, minutes);
    }
});