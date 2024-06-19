import { galleryCategory } from "./components/gallery.js";
import { descriptionProductDetail, sizeProductDetail, titleProductDetail, valueProductDetail } from "./components/section.js";
import { getProductById } from "./module/detail.js";

let main__section_gallery = document.querySelector("#main__section_gallery");
let main__section_tittle = document.querySelector("#main__section_tittle");
let main__section_description = document.querySelector("#main__section_description");
let main__section_custom = document.querySelector("#main__section_custom");

addEventListener("DOMContentLoaded", async (e) => {
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if (!localStorage.getItem(id)) localStorage.setItem(id, JSON.stringify(await getProductById({ id })));

    let info = JSON.parse(localStorage.getItem(id));
    main__section_gallery.innerHTML = await galleryCategory(info);
    main__section_tittle.innerHTML = await titleProductDetail(info);
    main__section_description.innerHTML = await descriptionProductDetail(info);
    main__section_custom.innerHTML = await sizeProductDetail(info);
    footer__ul_cost.innerHTML = await valueProductDetail(info);

    let footer = document.querySelector(".footer");
    footer.addEventListener("click", e => {
        let products = JSON.parse(localStorage.getItem(id));
        products.data["product_quantity"] = parseInt(num.textContent);
        sessionStorage.setItem(id, JSON.stringify(products));
    });

    if (!info.data.product_variations.size && !info.data.product_variations.color) {
        main__section_custom.innerHTML = "";
    } 
    else if (!info.data.product_variations.size) {
        main__section_custom.innerHTML = /*html*/`
            <article class="product__custom">
                <div class="product__size"></div>
                <div class="product__color">
                    <h5>Color</h5>
                    <div class="product__color_img">
                        <img src="../storage/img/1.svg">
                        <img src="../storage/img/2.svg">
                        <img src="../storage/img/3.svg">
                    </div>
                </div>
            </article>`;
    }
    else if (!info.data.product_variations.color) {
        main__section_custom.innerHTML = /*html*/`
            <article class="product__custom">
                <div class="product__size">
                    <h5>Choose Size</h5>
                    <div class="product__size_img">
                        <img id="s" src="../storage/img/s.svg">
                        <img id="m" src="../storage/img/m.svg">
                        <img id="l" src="../storage/img/l.svg">
                        <img id="xl" src="../storage/img/xl.svg">
                    </div>
                </div>
                <div class="product__color"></div>
            </article>`;

            let s = document.querySelector("#s");
            let m = document.querySelector("#m");
            let l = document.querySelector("#l");
            let xl = document.querySelector("#xl");

            s.addEventListener("click", (e) => {
                s.src = "../storage/img/snuevo.svg";
                m.src = "../storage/img/m.svg";
                l.src = "../storage/img/l.svg";
                xl.src = "../storage/img/xl.svg";
            });

            m.addEventListener("click", (e) => {
                m.src = "../storage/img/mnuevo.svg";
                s.src = "../storage/img/s.svg";
                l.src = "../storage/img/l.svg";
                xl.src = "../storage/img/xl.svg";
            });

            l.addEventListener("click", (e) => {
                l.src = "../storage/img/lnuevo.svg";
                s.src = "../storage/img/s.svg";
                m.src = "../storage/img/m.svg";
                xl.src = "../storage/img/xl.svg";
            });

            xl.addEventListener("click", (e) => {
                xl.src = "../storage/img/xlnuevo.svg";
                s.src = "../storage/img/s.svg";
                m.src = "../storage/img/m.svg";
                l.src = "../storage/img/l.svg";
            });
    }


    let menos = document.querySelector("#menos");
    let num = document.querySelector("#num");
    let mas = document.querySelector("#mas");
    let precio = document.querySelector("#precio");

    menos.addEventListener("click", (e) => {
        if (num.textContent > 1) num.textContent = parseInt(num.textContent) - 1;
        let productPrice = info.data.product_price ? parseFloat(info.data.product_price.replace("$", "")) : 0;
        let productPriceOriginal = info.data.product_original_price ? parseFloat(info.data.product_original_price.replace("$", "")) : 0;
        let totalPrice = productPrice * parseInt(num.textContent);
        let totalPriceOriginal = productPriceOriginal * parseInt(num.textContent);
        
        let originalPriceDisplay = !isNaN(totalPriceOriginal) && totalPriceOriginal > 0 ? `$${totalPriceOriginal.toFixed(2)}` : '';
        
        precio.innerHTML = /*html*/`
            <span id="precio">Add to Car | $${totalPrice.toFixed(2)} <sub>${originalPriceDisplay}</sub></span>`;

        let products = JSON.parse(localStorage.getItem(id));
        if (products) {
            products.data["product_price_detail"] = parseFloat(totalPrice.toFixed(2));
            sessionStorage.setItem(id, JSON.stringify(products));
        }
    });

    mas.addEventListener("click", (e) => {
        num.textContent = parseInt(num.textContent) + 1;
        let productPrice = info.data.product_price ? parseFloat(info.data.product_price.replace("$", "")) : 0;
        let productPriceOriginal = info.data.product_original_price ? parseFloat(info.data.product_original_price.replace("$", "")) : 0;
        let totalPrice = productPrice * parseInt(num.textContent);
        let totalPriceOriginal = productPriceOriginal * parseInt(num.textContent);
    
        let originalPriceDisplay = !isNaN(totalPriceOriginal) && totalPriceOriginal > 0 ? `$${totalPriceOriginal.toFixed(2)}` : '';
        
        precio.innerHTML = /*html*/`
            <span id="precio">Add to Car | $${totalPrice.toFixed(2)} <sub>${originalPriceDisplay}</sub></span>`;
    
        let products = JSON.parse(localStorage.getItem(id));
        if (products) {
            products.data["product_price_detail"] = parseFloat(totalPrice.toFixed(2));
            localStorage.setItem(id, JSON.stringify(products));
        }
    });

    let strong_description = document.querySelector("#text");
    let parrafo = document.querySelector("#parrafo");

    if (strong_description) {
        strong_description.addEventListener("click", () => {
            parrafo.textContent = info.data.product_description || "";
        });
    }
});
