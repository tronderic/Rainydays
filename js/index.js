const baseUrl = "https://rainydays.aadnoywebdev.one/wp-json/wc/store/products?featured=true";
const container = document.querySelector(".popular-items");

async function retrieveProducts(url) {
    const data = await fetch(url);
    const products = await data.json();

    console.log(products[0]);

    products.forEach((product) => {
        container.innerHTML += `
        <div class="product">
          <img src="${product.images[0].src}" alt="Jacket" />
          <h3>${product.name}</h3>
          <p>${product.price_html}</p>
          <a href="product-page.html?id=${product.id}" class="cta">View</a>
        </div>`;
    });
}

retrieveProducts(baseUrl);
