let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

function sendGetHTTPRequest(){
    let url = "https://gorest.co.in/public-api/users";
    let options ={
        mathod: "GET"
    };
    loadingEl.classList.remove("d-none");
    requestStatusEl.classList.add("d-none");
    fetch(url, options)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            requestStatusEl.classList.remove("d-none");
            loadingEl.classList.add("d-none");
            let requestStatus = data.code;
            let httpResponse = JSON.stringify(data);
            requestStatusEl.textContent = requestStatus;
            httpResponseEl.textContent = httpResponse;
        });
        
}


sendGetRequestBtnEl.addEventListener("click", sendGetHTTPRequest);
