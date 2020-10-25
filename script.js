//fetching data
fetch("http://27am.eu/wp-json/wp/v2/product")
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    dataReceived(data);
  });
function dataReceived(products) {
  // looping through products
  products.forEach(showProduct);
}
//executing once fot each product
function showProduct(myProduct) {
  console.log(myProduct);
  //finding the template
  const template = document.querySelector("#productTemplate").content;
  //cloning the tempalte
  const copy = template.cloneNode(true);
  copy.querySelector("img").src = myProduct.image.guid;
  copy.querySelector(".price p").textContent = "$ " + myProduct.price;
  copy.querySelector(".profile-people p").textContent =
    "+ " + myProduct.numberofpeople;

  //appending the template
  document.querySelector(".cards").appendChild(copy);
}
