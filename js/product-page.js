//fetch id from query string

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = `https://rainydays.aadnoywebdev.one/wp-json/wc/store/products/${id}`;
const spinner = document.querySelector(".loader");

async function product(url) {
    const data = await fetch(url);
    const product = await data.json();

    // add products to page

    const productImage = document.querySelector(".product-image");
    const productDetails = document.querySelector("#product");

    productImage.innerHTML = `<img src="${product.images[0].src}" alt="Jacket" />`;

    productDetails.innerHTML += `<h1>${product.name}</h1>
                                  <p>${product.description}</p>
                                  <p class="price price-margin">${product.price_html}</p>`;
    spinner.style.display = "none";
}

product(url);

// cart

const quantity = document.querySelector("#quantity");

const totalPrice = document.querySelector(".price");

quantity.onchange = function () {
    const value = quantity.value;

    const total = value * 52;

    totalPrice.innerHTML = `$${total}`;
};

// adding id query string to form

let form = document.querySelector("#productId");
form.value += id;
