document.querySelector("button").addEventListener("click", (event) => {
    //get query
    let query = document.querySelector("#search-input").value;

    //error handling if store doesn't have item
    let error = document.querySelector("#error-message");
    error.classList = "shown";
    setTimeout(()=>{
        error.classList = "hidden";
    }, 2000);
    
    
    //go to results page with query as search param
    //location.href="../results-page/results.html";
    
});

