let searchInputEl = document.getElementById("searchInput");
let resultCountriesEl = document.getElementById("resultCountries");
let spinnerEl = document.getElementById("spinner");

let searchInputVal = "";
let countriesList = [];

function createAndAppendCountry(country){
    // Creating and appending countryEl to the resultCountriesEl
    let countryEl = document.createElement("div");
    countryEl.classList.add("country-card", "col-11", "col-md-5", "mr-auto", "ml-auto", "d-flex", "flex-row");
    resultCountriesEl.appendChild(countryEl);
    
    // Creating and appending countryFlagEl to the countryEl
    let countryFlagEl = document.createElement("img");
    countryFlagEl.src = country.flag;
    countryFlagEl.classList.add("country-flag", "mt-auto", "mb-auto");
    countryEl.appendChild("countryFlagEl");
    
    // Creating and appending countryInfoEl to the countryEl
    let countryInfoEl = document.createElement("div");
    countryInfoEl.classList.add("d-flex", "flex-column", "ml-4");
    countryEl.appendChild("countryInfoEl");
    
    // Creating and appending countryNameEl to the countryInfoEl
    let countryNameEl = document.createElement("p");
    countryNameEl.textContent = country.name;
    countryNameEl.classList.add("country-name");
    countryInfoEl.appendChild("countryNameEl");
    
    // Creating and appending countryPopulationEl to the countryInfoEl
    let countryPopulationEl = document.createElement("p");
    countryPopulationEl.textContent = country.population;
    countryPopulationEl.classList.add("country-population");
    countryInfoEl.appendChild("countryPopulationEl");
}

function displayResults(){
    for (let country of countriesList){
        let countryName = country.name;
        
        if (countryName.includes(searchInputVal)){
            createAndAppendCountry(country);
        }
    }
}

function getCountries(){
    let url = "https://apis.ccbp.in/countries-data";
    let options = {
        method:"GET"
    };
    resultCountriesEl.textContent = "";
    resultCountriesEl.classList.add("d-none");
    spinnerEl.classList.remove("d-none");
    fetch(url, options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            countriesList = jsonData;
            resultCountriesEl.classList.remove("d-none");
            spinnerEl.classList.add("d-none");
            displayResults();
        });
        
}

function onChangeSearchInput(event){
    searchInputVal = event.target.value;
    getCountries();
    
}

getCountries();
searchInputEl.addEventListener("keyup", onChangeSearchInput);
