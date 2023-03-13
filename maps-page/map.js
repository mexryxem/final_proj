
setTimeout(getItem, 100);
let theItem;
function getItem(){
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  let search = queryString.slice(10);
  search = decodeURI(search);

  console.log(search);

  theItem = searchItem(search);
  console.log(theItem);

  
  let itemDiv = document.querySelector(".item");
  
  let nameDiv = document.createElement("p");
  nameDiv.innerHTML= theItem["name"];
  itemDiv.appendChild(nameDiv);

  let img = document.createElement("img");
  img.src = theItem["image"];
  img.classList="itemImg";
  itemDiv.appendChild(img);

  let locationDiv = document.createElement("p");
  locationDiv.innerHTML = theItem["location"];
  itemDiv.appendChild(locationDiv);


}
