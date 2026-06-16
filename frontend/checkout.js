document
.getElementById("checkoutForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    let orders =
    JSON.parse(
        localStorage.getItem("orders")
    ) || [];

    orders.push(...cart);

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );

    localStorage.removeItem("cart");

    alert("Order Placed Successfully");

    window.location.href =
    "orders.html";
});