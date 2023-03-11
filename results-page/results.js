
//wait for databse to load before trying to access it
setTimeout(getResultsPage, 1000);

function getResultsPage(){
    //get query from url search parameters
    const urlSearchParam = new URLSearchParams(window.location.search);
    const query = urlSearchParam.get("query");

    //get list of items from database
    let items = Search_Database(query);

    //display items to page
    let displayItemsDiv = document.querySelector("#display-results");
    
    //for each item in results
    for(let i = 0; i < items.length; i++){
        //create a section for the item and add to the doc
        let itemRow = document.createElement("div");
        itemRow.classList = "itemRow"; //<----------style html using item class
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
        button.classList = "itemButton"
        itemRow.appendChild(button);
    }

//when button clicked go to corresponding item's map page

//get list of all buttons
let buttons = document.querySelectorAll("button.itemButton");

//console.log(buttons);
for(let i=0; i< buttons.length; i++){
    //add event listner for each button
    buttons[i].addEventListener("click", (event)=>{
        //go to maps page and save the selected item's name through url search parameter
        location.href = "../maps-page/map.html?itemName=" + buttons[i].id;
    })
}
}



