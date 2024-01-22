let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");


function getFact(event){
    if (event.key === "Enter"){
        let userInputValue = userInputEl.value;
        if (userInputValue === ""){
            alert("Enter a number");
            return;
        }
        let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputValue;
        let options = {
            method:"GET"
        };
        spinnerEl.classList.remove("d-none");
        factEl.classList.add("d-none");
        fetch(url, options)
            .then(function(response){
                return response.json();
            })
            .then(function(jsonData){
                spinnerEl.classList.add("d-none");
                factEl.classList.remove("d-none");
                let {fact} = jsonData;
                factEl.textContent = fact;
                
            });
    }
}

userInputEl.addEventListener("keyup", getFact);