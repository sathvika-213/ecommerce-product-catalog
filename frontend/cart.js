const cartContainer =
document.getElementById("cart-container");

const totalElement =
document.getElementById("total");

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach((product,index)=>{

    total += Number(product.price);

    const div =
    document.createElement("div");

    div.className = "product-card";

    div.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>₹${product.price}</p>

        <button onclick="removeItem(${index})">
            Remove
        </button>
    `;

    cartContainer.appendChild(div);
});

totalElement.innerText =
"Total Amount: ₹" + total;

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    location.reload();
}