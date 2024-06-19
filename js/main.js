
import { menuListCategoryIndex } from "./components/menu.js";
import {galleryIndex} from "./components/gallery.js";
import {getAllProductName, getAllCategory, getRamdonIndex} from "./module/app.js";
import { getProductById } from "./module/detail.js";

let input__search = document.querySelector("#input__search");

document.addEventListener("DOMContentLoaded", async e => {
  if (!localStorage.getItem("getAllCategory")) {
      const allCategories = await getAllCategory();
      localStorage.setItem("getAllCategory", JSON.stringify(allCategories));
  }

  const nav__ul = document.querySelector(".nav__ul");
  nav__ul.innerHTML = await menuListCategoryIndex(JSON.parse(localStorage.getItem("getAllCategory")));

  const params = new URLSearchParams(location.search);
  let categoryId = params.get("id");
  
  let res;
  if (!categoryId) {
      res = await getRamdonIndex();
      categoryId = "fashion"; 
  } else {
      res = await getRamdonIndex();
  }
  
  const main__article = document.querySelector(".main__article");
  main__article.innerHTML = galleryIndex(res, categoryId);
});


input__search.addEventListener("change", async e => {
  let params = new URLSearchParams(location.search);
  let datasearch = { search : e.target.value, id: params.get('id')}
  input__search.value = null;

  let res = await getAllProductName(datasearch)
  main__article.innerHTML = galleryIndex(res, params.get('id'));

  let proceso = new Promise(async(resolve, reject)=>{
        for (let i = 0; i < asin.length; i++) {
            if(localStorage.getItem(asin[i].id)) continue;
            let data = await getProductId(asin[i])
            localStorage.setItem(asin[i].id, JSON.stringify(data))
        }
        resolve({message: "Datos buscados correctamente" });
    })
    Promise.all([proceso]).then(res => {console.log(res);})
  });