
import { getAllProductById } from "../detail2";

addEventListener("DOMContentLoaded", async(e) => {
    let params = new URLSearchParams(location.search);
    console.log(params.get("id"));
    
})