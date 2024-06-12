
import {galleryIndex} from "./components/gallery.js";
import {getAllProductName} from "./module/app.js";

let products = document.querySelector(".main__article");

products.innerHTML = null;

let input__search = document.querySelector("#input__search");
let main__article = document.querySelector(".main__article");

input__search.addEventListener("change", async e => {
        let data = { search: e.target.value}
        input__search.value = null;
        main__article.innerHTML += galleryIndex();

})
