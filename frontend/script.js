const container = document.getElementById("product-container");

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

function loadProducts() {

    fetch("http://localhost:5000/api/products")
    .then(res => res.json())
    .then(products => {
        displayProducts(products);
    })
    .catch(error => {
        console.log(error);
    });
}

function searchProducts() {

    const value =
    document.getElementById("searchInput").value;

    fetch(
        `http://localhost:5000/api/products/search?name=${value}`
    )
    .then(res => res.json())
    .then(products => {
        displayProducts(products);
    })
    .catch(error => {
        console.log(error);
    });
}

function displayProducts(products) {

    container.innerHTML = "";

    products.forEach(product => {

        const card =
        document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
                class="product-image"
            >

            <h2>${product.name}</h2>

            <p>${product.description}</p>

            <p class="price">
                ₹${product.price}
            </p>

            <p>
                Category: ${product.category}
            </p>

            <p>
                Stock: ${product.stock}
            </p>

            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>

            <button onclick="buyNow(${product.id})">
                Buy Now
            </button>
        `;

        container.appendChild(card);
    });
}

function addToCart(productId) {

    fetch("http://localhost:5000/api/products")
    .then(res => res.json())
    .then(products => {

        const product =
        products.find(
            p => p.id == productId
        );

        cart.push(product);

        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );

        updateCartCount();

        alert(
            product.name +
            " added to cart!"
        );
    });
}

function buyNow(productId) {

    fetch("http://localhost:5000/api/products")
    .then(res => res.json())
    .then(products => {

        const product =
        products.find(
            p => p.id == productId
        );

        localStorage.setItem(
            "cart",
            JSON.stringify([product])
        );

        window.location.href =
        "checkout.html";
    });
}

function updateCartCount() {

    document.getElementById("cartCount")
    .innerText =
    `🛒 Cart: ${cart.length} Items`;
}

loadProducts();