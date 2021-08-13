function add(productName:string, price:Number){
    console.log(productName, price);
    let list: (any)[] = JSON.parse(sessionStorage.getItem('items') || "[]");
    let cartSize: number = parseInt(JSON.parse(sessionStorage.getItem('cartSize') || "0"));
    cartSize += 1;
    list.push({
        name:productName,
        price:price
    });
    sessionStorage.setItem("items", JSON.stringify(list));
    sessionStorage.setItem("cartSize", JSON.stringify(cartSize));
    let data:any = document.getElementById("cartSize");
    if(data != null){
        data.innerHTML = `<label>Cart Size: ${cartSize}</label>`;
    }

}
