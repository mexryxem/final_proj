
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
}
