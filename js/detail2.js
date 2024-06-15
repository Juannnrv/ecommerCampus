
import { galleryCategory } from "./components/gallery.js";
import { descriptionProductDetail, titleProductDetail } from "./components/section.js";
import { getProductById } from "./module/detail.js";

let main__section_gallery = document.querySelector("#main__section_gallery");
let main__section_tittle = document.querySelector("#main__section_tittle");
let main__section_description= document.querySelector("#main__section_description");
  

addEventListener("DOMContentLoaded", async(e)=>{
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    console.log(params.get('id'));
    if(!localStorage.getItem(id)) localStorage.setItem(id, JSON.stringify(await getProductById({id})));

    let info = JSON.parse(localStorage.getItem(id));
    main__section_gallery.innerHTML = await galleryCategory(info);
    main__section_tittle.innerHTML = await titleProductDetail(info);
    main__section_description.innerHTML = await descriptionProductDetail(info);

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
    
    let strong_description = document.querySelector("#text");
    let parrafo = document.querySelector("#parrafo"); 
    
    strong_description.addEventListener("click", (e) => {
        let completed =  info.data.product_description;
        parrafo.textContent = completed;
    });


})

