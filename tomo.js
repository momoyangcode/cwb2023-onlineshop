let currentCategory = "";
let currentProducts;
const productsDiv = document.getElementById("product-list");
// productsDiv.innerHtml = "";

function CategoryChangeToTV() {
  console.log("Aaah, someone changed my category to TV");
  currentCategory = "TVs";
  reset();
  pushTVs();
  insertProductsIntoProductDiv();
}

function CategoryChangeToPhones() {
  console.log("Aaah, someone changed my category to Phones");

  currentCategory = "Phones";
  reset();
  pushPhones();
  insertProductsIntoProductDiv();
}

function insertProductsIntoProductDiv() {
  console.log(
    "OK, current category is " +
      currentCategory +
      " so I am loading products from that category"
  );

  for (const product of currentProducts) {
    // generate html into a text variable
    // find the products div by using querySelector
    // now, for each product, put the little html text as a new element inside of productsDiv

    const productHtml = `<p>${product.name}</p>`;
    productsDiv.innerHTML += productHtml;
  }
}

function pushPhones() {
  currentProducts.push({ name: "Iphone 14" });
  currentProducts.push({ name: "Samsung Galaxy" });
  currentProducts.push({ name: "The MomoPhone" });
}

function pushTVs() {
  currentProducts.push({ name: "LG 24235" });
  currentProducts.push({ name: "Samsung 46306" });
  currentProducts.push({ name: "Philips e3554" });
}

function reset() {
  currentProducts = [];
  productsDiv.innerHTML = "";
}

const catePhones = document.querySelector(".phones");
const cateTVs = document.querySelector(".televisions");

cateTVs.addEventListener("click", CategoryChangeToTV);
catePhones.addEventListener("click", CategoryChangeToPhones);
