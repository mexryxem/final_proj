
//wait for databse to load before trying to access it
setTimeout(getResultsPage, 1000);

function getResultsPage(){
    //get query from url search parameters
    const urlSearchParam = new URLSearchParams(window.location.search);
    const query = urlSearchParam.get("query");
    
    //get list of items from database
    let items = Search_Database(query);
    console.log(items);
    //display items to page
    let displayItemsDiv = document.querySelector("#display-results");
    
    //for each item in results
    for(let i = 0; i < items.length; i++){
        //create a section for the item and add to the doc
        let itemRow = document.createElement("div");
        itemRow.classList = "item"; //<----------style html using item class
        displayItemsDiv.appendChild(itemRow);

        //create the text element and add it to the row
        let itemName= items[i]["name"];
        let itemDescription = items[i]["description"];
        
        let p = document.createElement("p");
        p.innerText = itemName + ": " + itemDescription;

        itemRow.appendChild(p);

        //create img element and add to row
        let itemImg = document.createElement("img");
        itemImg.src = items[i]["image"];
        itemRow.appendChild(itemImg);

        //create arrow button and add to row
        let button = document.createElement("button");
        button.id = items[i]["name"];
        itemRow.appendChild(button);
    }
}


//when button clicked go to corresponding item's map page
