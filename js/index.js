const baseUrl = "https://rainydays.aadnoywebdev.one/wp-json/wc/store/products?featured=true";
const container = document.querySelector(".popular-items");
const spinner = document.querySelector(".loader");

async function retrieveProducts(url) {
    const data = await fetch(url);
    const products = await data.json();
    const gender = document.querySelector(".gender");
    gender.innerHTML = `<a href="products.html?category=Men" class="men"><h2>Men's</h2></a>
                        <a href="products.html?category=Women" class="women"><h2>Women's</h2></a>`;
    spinner.style.display = "none";

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
