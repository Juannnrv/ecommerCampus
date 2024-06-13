
import { headers } from "../components/env.js"

export const getAllProductById = async ( {id : idCategory} ) => {
    console.log("Waiting...");
    console.log( idCategory )
    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${text}&page=1&country=US&sort_by=RELEVANCE&category_id=${idCategory}&product_condition=ALL`;
    const options = {
        method: 'GET',
        headers
    };

    let res = await fetch(url, options);
    let data = await res.json();
    return data;

}