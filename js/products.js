const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const category = params.get("category");

console.log(category);

const baseUrl = "https://rainydays.aadnoywebdev.one/wp-json/wc/store/products?per_page=15";
const menUrl = "https://rainydays.aadnoywebdev.one/wp-json/wc/store/products";
const womanUrl = "https://rainydays.aadnoywebdev.one/product-category/women/";
const container = document.querySelector(".products");
const spinner = document.querySelector(".loader");

async function retrieveProducts(url) {
    const data = await fetch(url);
    const products = await data.json();
    spinner.style.display = "none";

    function addProducts(products) {
        container.innerHTML = "";
        products.forEach(function (product) {
            container.innerHTML += `
        <div class="product">
          <img src="${product.images[0].src}" alt="Jacket" />
          <h3>${product.name}</h3>
          <p>${product.price_html}</p>
          <a href="product-page.html?id=${product.id}" class="cta">View</a>
        </div>`;
        });
    }

    addProducts(products);

    // filter products by category

    if (category) {
        function checkCategory(product) {
            return product.categories[0].name === category;
        }

        function filterCategory() {
            const filteredCategory = products.filter(checkCategory);
            addProducts(filteredCategory);
            console.log(filteredCategory);
        }
    }

    filterCategory();
}

retrieveProducts(baseUrl);

/* if (category === "men") {
    retrieveProducts(menUrl);
}
if (category === "women") {
    retrieveProducts(womanUrl);
} else {
    retrieveProducts(baseUrl);
}

console.log(menUrl); */
