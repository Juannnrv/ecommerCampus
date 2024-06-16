import { shoppingProduct } from "./module/checkout";
import { getProductById } from "./module/detail";

let article__clothes_shop = document.querySelector("#article__clothes_shop");



addEventListener("DOMContentLoaded", async(e) => {
    let params = new URLSearchParams(location.search);
    let id = params.get("id");
    
    let info = JSON.parse(localStorage.getItem(id));

    article__clothes_shop.innerHTML = await shoppingProduct(info);
})
