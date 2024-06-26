
import { headers } from "../components/env.js"

export const getAllProductName = async ({search : text, id : idCategory}) => {
    console.log("Waiting...");
    console.log(text, idCategory)
    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${text}&page=1&country=US&sort_by=RELEVANCE&category_id=${idCategory}&product_condition=ALL`;
    const options = {
        method: 'GET',
        headers
    };

    let res = await fetch(url, options);
    let data = await res.json();
    return data;

}

export const getAllCategory = async() => {
    console.log("Waiting...");
    const url = 'https://real-time-amazon-data.p.rapidapi.com/product-category-list?country=US';
    const options = {
        method: 'GET',
        headers
    };

    let res = await fetch(url, options);
    let data = await res.json();
    return data;
}

document.querySelector(".carga").style.display = "block";
export const getRamdonIndex = async(page = 700) => {
    console.log("Waiting...")
    page = Math.random()*(page/20);
    page = parseInt(Math.round(page));
    if (!page) page = 1;

    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=Aesthetic-men&page=${page}&country=US&sort_by=RELEVANCE&category_id=aps&product_condition=NEW`;
    const options = {
        method: "GET",
        headers
    };

    let res = await fetch(url, options);
    let data = await res.json();

    document.querySelector(".carga").style.display = "none";

    return data;
}
