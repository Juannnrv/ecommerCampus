import { shoppingProduct } from "./components/carrito.js";
import { getAllItemsToBuy } from "./module/checkout.js";


let article__clothes_shop = document.querySelector("#article__clothes_shop");


addEventListener("DOMContentLoaded", async(e) => {
    let info = await getAllItemsToBuy();

    article__clothes_shop.innerHTML = await shoppingProduct(info);
})
