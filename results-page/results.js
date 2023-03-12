
//wait for databse to load before trying to access it
setTimeout(getResultsPage, 100);

function getResultsPage(){
    //get query from url search parameters
    const urlSearchParam = new URLSearchParams(window.location.search);
    const query = urlSearchParam.get("query");

    //get list of items from database
    let items = Search_Database(query);
    
    //grab all buttons in 'results' div
    let itemButtons = document.querySelectorAll("div.results > button");

    //loop through each result button and add info for each result
    for(let i = 0; i < itemButtons.length; i++){
        let itemButton = itemButtons[i];
        let nameDiv = itemButton.querySelector("#items");
        nameDiv.innerHTML = items[i]["name"];

        //go to correct maps page when clicked
        itemButton.addEventListener("click", ()=>{
            location.href = "../maps-page/map.html?itemName=" + items[i]["name"];
        });
    }
}

let backButton = document.querySelector(".backToSearch");
//go back to home page when button clicked
backButton.addEventListener("click", ()=>{
    location.href = "../homepage/homepage.html";
});

