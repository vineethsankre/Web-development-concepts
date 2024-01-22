let userInputEl = document.getElementById("userInput");
let requestBodyEl = document.getElementById("requestBody");
let sendPutRequestBtnEl = document.getElementById("sendPutRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

function sendPutRequest() {
    let requestBody = requestBodyEl.value;
    let userId = userInputEl.value;
    let url = "https://gorest.co.in/public-api/users";
    loadingEl.classList.remove("d-none");
    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer token"
        },
        body: requestBody
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

sendPutRequestBtnEl.addEventListener("click", sendPutRequest);
