
import { headers } from "../components/env.js";

document.querySelector(".carga").style.display = "block";
export const getProductById = async({id:idCategory})=>{
    console.log("Waiting...");
    const url = `https://real-time-amazon-data.p.rapidapi.com/product-details?asin=${idCategory}&country=US`;
    const options = {
        method: 'GET',
        headers
    };
    let res = await fetch(url, options);
    let data = res.json();

    document.querySelector(".carga").style.display = "none";

    return data;
}