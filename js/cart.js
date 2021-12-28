const url = "product-page.html";

async function fetchData() {
    try {
        const response = await fetch(url);
        const json = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(json, "text/html");
        const quantity = doc.querySelector("#quantity");
        const value = quantity.options[quantity.selectedIndex].value;
        console.log(value);
    } catch (error) {
        console.log(error);
    }
}
fetchData();

/* const price = document.querySelector(".price");
const quantity = document.querySelector("#quantity");
const size = document.querySelector(".size-form");

const newPrice = price.firstChild.data;
const newQuantity = quantity.value;
const newSize = size.elements.size.value; */
