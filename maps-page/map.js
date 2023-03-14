
setTimeout(getItem, 100);
let theItem;
function getItem(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  let search = queryString.slice(10);
  search = decodeURI(search);

  // console.log(search);

  theItem = searchItem(search);
  // console.log(theItem);

  let type = theItem["type"];
  console.log(type);
  
  let itemDiv = document.querySelector(".item");
  
  let nameDiv = document.createElement("p");
  nameDiv.innerHTML= theItem["name"];
  itemDiv.appendChild(nameDiv);

  let img = document.createElement("img");
  img.src = theItem["image"];
  img.classList="itemImg";
  itemDiv.appendChild(img);

  let locationDiv = document.createElement("p");
  let loc = '';
  if(theItem["location"][1] === 1){
    loc = "Location A"
  }
  if(theItem["location"][1] === 2){
    loc = "Location B"
  }
  if(theItem["location"][1] === 3){
    loc = "Location C"
  }
  if(theItem["location"][1] === 4){
    loc = "Location D"
  }
  if(theItem["location"][1] === 5){
    loc = "Location E"
  }
  locationDiv.innerHTML = loc;
  itemDiv.appendChild(locationDiv);


  let MapDiv = document.querySelector(".mapBox2");
  let map = document.createElement("img");

  switch(type){
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
