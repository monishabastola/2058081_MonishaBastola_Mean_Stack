function add(productName, price) {
    console.log(productName, price);
    var list = JSON.parse(sessionStorage.getItem('items') || "[]");
    var cartSize = parseInt(JSON.parse(sessionStorage.getItem('cartSize') || "0"));
    cartSize += 1;
    list.push({
        name: productName,
        price: price
    });
    sessionStorage.setItem("items", JSON.stringify(list));
    sessionStorage.setItem("cartSize", JSON.stringify(cartSize));
    var data = document.getElementById("cartSize");
    if (data != null) {
        data.innerHTML = "<label>Cart Size: " + cartSize + "</label>";
    }
}
