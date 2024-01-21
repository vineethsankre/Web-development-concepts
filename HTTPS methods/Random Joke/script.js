let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");

function getRandomJoke() {
    let options = {
        method: "GET"
    };
    spinnerEl.classList.remove("d-none");
    jokeTextEl.classList.add("d-none");
    let jokesUrl = "https://apis.ccbp.in/jokes/random";
    fetch(jokesUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let joke = jsonData.value;
            spinnerEl.classList.add("d-none");
            jokeTextEl.classList.remove("d-none");
            jokeTextEl.textContent = joke;
        });
}


jokeBtnEl.addEventListener("click", getRandomJoke);