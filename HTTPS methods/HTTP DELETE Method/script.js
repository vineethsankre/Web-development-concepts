let userInputEl = document.getElementById("userInput");
let sendDeleteRequestBtnEl = document.getElementById("sendDeleteRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

function sendDeleteRequest() {
    let userId = userInputEl.value;
    let url = "https://gorest.co.in/public-api/users";
    loadingEl.classList.remove("d-none");
    let options = {
        method: "DELETE",
    };

    loadingEl.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            loadingEl.classList.add("d-none");
            requestStatusEl.classList.remove("d-none");

            let requestStatus = jsonData.code;
            let responseBody = JSON.stringify(jsonData);
            requestStatusEl.textContent = requestStatus;
            httpResponseEl.textContent = responseBody;
        });
}

sendDeleteRequestBtnEl.addEventListener("click", sendDeleteRequest);