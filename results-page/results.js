
//wait for databse to load before trying to access it
setTimeout(getResultsPage, 100);

function getResultsPage(){
    //get query from url search parameters
    const urlSearchParam = new URLSearchParams(window.location.search);
    const query = urlSearchParam.get("query");
    console.log(query);

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

    let MapDiv = document.querySelector(".mapBox");
    let map = document.createElement("img");

    switch(query){
        case "Shoe":
            map.src = "../Maps/Shoes Map.png";
            break;
        case "Men's Shirt":
            map.src = "../Maps/Men's Shirt Map.png";
            break;
        case "Men's Pants":
            map.src = "../Maps/Men's Pants Map.png";
            break;
        case "Women's Shirt":
            map.src = "../Maps/Women's Shirt Map.png";
            break;
        case "Women's Pants":
            map.src = "../Maps/Women's Pants Map.png";
            break;
        case "Kid's Shirt":
            map.src = "../Maps/Kid's Shirt Map.png";
            break;
        case "Kid's Pants":
            map.src = "../Maps/Kid's Pants Map.png";
            break;
    }

    // map.src = "../Maps/Shoes Map.png";
    MapDiv.appendChild(map);
}

let backButton = document.querySelector(".backToSearch");
//go back to home page when button clicked
backButton.addEventListener("click", ()=>{
    location.href = "../homepage/homepage.html";
});

