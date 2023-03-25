submit = () =>{
    //get query
    let query = document.querySelector("#search-input").value;
    console.log("query: ", query);

    //error handling if store doesn't have item
    if(!Is_type(query)){
        let error = document.querySelector("#error-message");
        error.classList = "shown";
        setTimeout(()=>{
            error.classList = "hidden";
        }, 2000);
    } else {
        //go to results page with query as search param
        location.href="../results-page/results.html?query="+query;

    }
}

document.querySelector("button").addEventListener("click", (event) => {   
    submit();
});

document.querySelector("input").addEventListener("keypress", (event)=>{
    if (event.key === "Enter") {
        submit();
    }
});
