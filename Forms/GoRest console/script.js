let consoleFormEl = document.getElementById("consoleForm");

let requestUrlEl = document.getElementById("requestUrl");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");

let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");

let responseStatusEl = document.getElementById("responseStatus");
let responseBodyEl = document.getElementById("responseBody");

let formData = {
    requestUrl : "https://gorest.co.in/public-api/users",
    requestMethod : "POST",
    requestBody : "" 
};

requestUrlEl.addEventListener("change", function(event){
    formData.requestUrl = event.target.value;
})

requestMethodEl.addEventListener("change", function(event){
    formData.requestMethod = event.target.value;
})

requestBodyEl.addEventListener("change", function(event){
    formData.requestBody = event.target.value;
})

function validateRequestUrl(formData){
    let {requestUrl} = formData;
    if (requestUrl === ""){
        requestUrlErrMsgEl.textContent = "Required*";
    } else{
        requestUrlErrMsgEl.textContent = "";
    }
};
function sendRequest(formData){
    let {requestUrl, requestMethod, requestBody} = formData;
    let options = {
        method: requestMethod,
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
            Authorization : "Bearer b325f5620e1ab4792563a93e837b3842235ec5699948a7c5395d371db086da8a"
        },
        body: requestBody
    };
    fetch(requestUrl, options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            let statusCode = jsonData.code;
            let responseBody = jsonData;
            responseStatusEl.value = statusCode;
            responseBodyEl.value = responseBody;

        });  
}

consoleFormEl.addEventListener("submit", function(event){
    event.preventDefault();
    validateRequestUrl(formData);
    sendRequest(formData);
})