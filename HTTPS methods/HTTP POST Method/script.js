let requestBodyEl = document.getElementById("requestBody");
let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");
function sendPostRequest(){
    let data = requestBodyEl.value;
    loadingEl.classList.remove("d-none");
    let options = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer b10dc007b1abd36777f363fa7ac1f6e856e106003dd79ce24e3d766247e5b227"
        },
        body: JSON.stringify(data)
    };
    let url = "https://gorest.co.in/public-api/users";
    fetch(url, options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            loadingEl.classList.add("d-none");
            let requestStatus = jsonData.code;
            let responseBody = JSON.stringify(jsonData);
            requestStatusEl.textContent = requestStatus;
            httpResponseEl.textContent = responseBody;
        });
    
}

sendPostRequestBtnEl.addEventListener("click", sendPostRequest);