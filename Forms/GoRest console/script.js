let consoleFormEl = document.getElementById("consoleForm");
let requestUrlEl = document.getElementById("requestUrl");
let responseStatusEl = document.getElementById("responseStatus");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");
let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let responseBodyEl = document.getElementById("responseBody");

requestMethodEl.addEventListener("change", function () {
    requestUrlErrMsgEl.textContent = "";
});

function submitForm(event) {
    event.preventDefault();
    requestUrlErrMsgEl.textContent = "";

    if (requestUrlEl.value.trim() === "") {
        requestUrlErrMsgEl.textContent = "Required*";
        return;
    }

    let data = {
        id: 1,
        name: "",
        email: "",
        gender: "",
        status: "",
    };

    let options = {
        method: requestMethodEl.value,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer b10dc007b1abd36777f363fa7ac1f6e856e106003dd79ce24e3d766247e5b227",
        },
        body: data,
    };

    fetch(requestUrlEl.value, options)
        .then((response) => {
            responseStatusEl.value = response.status;
            if (response.ok) {
                return response.json().then((responseData) => {
                    responseBodyEl.value = JSON.stringify(responseData, null, 2);
                });
            } else {
                return response.text().then((errorMessage) => {
                    responseBodyEl.value = errorMessage;
                });
            }
        })
        .catch((error) => {
            responseBodyEl.value = "Error: " + error.message;
        });
}

consoleFormEl.addEventListener("submit", submitForm);
