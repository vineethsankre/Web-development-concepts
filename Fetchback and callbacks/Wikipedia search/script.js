let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function createAndAppendSearchResult(result) {
    //Create Result Item 
    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResultsEl.appendChild(resultItemEl);

    //Create Title Element 
    let {
        link,
        title,
        description
    } = result;
    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    searchResultsEl.appendChild(titleEl);

    //Create Break Element 
    let titleBreakEl = document.createElement("br");
    searchResultsEl.appendChild(titleBreakEl);

    //Create URL Element 
    let urlEl = document.createElement("a");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    urlEl.classList.add("result-url");
    searchResultsEl.appendChild(urlEl);

    //Create Break Element 
    let linkBreakEl = document.createElement("br");
    searchResultsEl.appendChild(linkBreakEl);

    //Create Description Element
    let descriptionEl = document.createElement("p");
    descriptionEl.textContent = description;
    descriptionEl.classList.add("link-description");
    searchResultsEl.appendChild(descriptionEl);
}

function displayResults(searchResults) {
    for (let result of searchResults) {
        createAndAppendSearchResult(result);
    }
    spinnerEl.classList.toggle("d-none");

}

function wikipediaSearch(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.toggle("d-none");
        searchResultsEl.textContent = "";
        let searchInputValue = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputValue;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
            });

    }
}
searchInputEl.addEventListener("keydown", wikipediaSearch);