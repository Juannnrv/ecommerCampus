

import { galleryCategory } from "./components/gallery.js";
import { descriptionProductDetail, sizeProductDetail, titleProductDetail, valueProductDetail } from "./components/section.js";
import { getProductById } from "./module/detail.js";


let main__section_gallery = document.querySelector("#main__section_gallery");
let main__section_tittle = document.querySelector("#main__section_tittle");
let main__section_description= document.querySelector("#main__section_description");
let main__section_custom = document.querySelector("#main__section_custom")
  

addEventListener("DOMContentLoaded", async(e)=>{
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    if(!localStorage.getItem(id)) localStorage.setItem(id, JSON.stringify(await getProductById({id})));
    
    let info = JSON.parse(localStorage.getItem(id));
    main__section_gallery.innerHTML = await galleryCategory(info);
    main__section_tittle.innerHTML = await titleProductDetail(info);
    main__section_description.innerHTML = await descriptionProductDetail(info);
    main__section_custom.innerHTML = await sizeProductDetail(info);
    footer__ul_cost.innerHTML = await valueProductDetail(info);
    
    // let {data} = res;
    // let {
        //     category_path,
        //     about_product,
        //     product_details,
        //     product_information,
        //     product_photos,
        //     product_variations,
        //     rating_distribution,
        //     review_aspects,
        //     ...dataUpdate
        // } = data;
        // console.log(dataUpdate);

        let footer = document.querySelector(".footer")
        footer.addEventListener("click", e => {
            let products = JSON.parse(localStorage.getItem(id))
            products["addedToCar"] = true;
            sessionStorage.setItem(id, JSON.stringify(products));
        })
        
        let s = document.querySelector("#s")
        let m = document.querySelector("#m")
        let l = document.querySelector("#l")
        let xl = document.querySelector("#xl")
        
        s.addEventListener("click", (e) => {
            s.src="../storage/img/snuevo.svg"
            m.src="../storage/img/m.svg"
            l.src="../storage/img/l.svg"
            xl.src="../storage/img/xl.svg"
        })
        m.addEventListener("click", (e) => {
            m.src="../storage/img/mnuevo.svg"
            s.src="../storage/img/s.svg"
            l.src="../storage/img/l.svg"
            xl.src="../storage/img/xl.svg"
        })
        l.addEventListener("click", (e) => {
            l.src="../storage/img/lnuevo.svg"
            s.src="../storage/img/s.svg"
            m.src="../storage/img/m.svg"
            xl.src="../storage/img/xl.svg"
        })
        xl.addEventListener("click", (e) => {
            xl.src="../storage/img/xlnuevo.svg"
            s.src="../storage/img/s.svg"
            m.src="../storage/img/m.svg"
            l.src="../storage/img/l.svg"
        })
        
        let menos = document.querySelector("#menos");
        let num = document.querySelector("#num");
        let mas = document.querySelector("#mas");
        let precio = document.querySelector("#precio")

        menos.addEventListener("click", (e) => {
            if(num.textContent > 1) num.textContent = parseInt(num.textContent) - 1;
            let productPrice = info.data.product_price ? parseFloat(info.data.product_price.replace("$", "")) : 0;
            let productPriceOriginal = info.data.product_original_price ? parseFloat(info.data.product_original_price.replace("$", "")) : 0;
            let totalPrice = productPrice * parseInt(num.textContent);
        let totalPriceOriginal = productPriceOriginal * parseInt(num.textContent);
        console.log(totalPriceOriginal);
        
        let originalPriceDisplay = !isNaN(totalPriceOriginal) && totalPriceOriginal > 0 ? `$${totalPriceOriginal.toFixed(2)}` : '';
        
        precio.innerHTML = /*html*/`
        <span id="precio" >Add to Cart | $${totalPrice.toFixed(2)} <sub>${originalPriceDisplay}</sub></span>`;
    });
    
    mas.addEventListener("click", (e) => {
        num.textContent = parseInt(num.textContent) + 1;
        let productPrice = info.data.product_price ? parseFloat(info.data.product_price.replace("$", "")) : 0;
        let productPriceOriginal = info.data.product_original_price ? parseFloat(info.data.product_original_price.replace("$", "")) : 0;
        let totalPrice = productPrice * parseInt(num.textContent);
        let totalPriceOriginal = productPriceOriginal * parseInt(num.textContent);
        console.log(totalPriceOriginal);
        
        
        let originalPriceDisplay = !isNaN(totalPriceOriginal) && totalPriceOriginal > 0 ? `$${totalPriceOriginal.toFixed(2)}` : '';
        
        precio.innerHTML = /*html*/`
        <span id="precio" >Add to Cart | $${totalPrice.toFixed(2)} <sub>${originalPriceDisplay}</sub></span>`;
    });
    
    let strong_description = document.querySelector("#text");
    let parrafo = document.querySelector("#parrafo"); 

    strong_description ? strong_description.addEventListener("click", () => parrafo.textContent = info.data.product_description || "") : parrafo;
    }

)

