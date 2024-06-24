let key = Object.keys(localStorage);
localStorage.removeItem("getAllCategory");

export const shoppingProduct = () => {
    let plantilla = ''; 

    if (Object.keys(localStorage).length === 0) {
        return /*html*/ `
            <h1>Empty Car 🛒. . .</h1>
            <style>h1 {color: var(--color-1); font-size: 40px; text-align: center; margin-top: 100px;}</style>`;
    }
    
    Object.keys(localStorage).forEach((key) => {
        const res = JSON.parse(localStorage.getItem(key));
        
        plantilla += /*html*/`
            <div class="clothes__product">
                <div class="product__card">
                    <div class="card__img">
                    <img src="${res.data.product_photo}"> 
                    <img src="../storage/img/heartGreen.svg">
                    </div>
                    <div class="card__info">
                        <div class="info__name">
                            <p>${res.data.product_title.slice(0, 50)}...</p>
                            <a href="${res.data.product_url}">Go to Amazon</a>
                        </div>
                        <span>$${parseFloat(res.data.product_price.replace("$", "")).toFixed(2)}</span>
                    </div>
                </div>  
            </div>`;
    });
    
    console.log(plantilla);
    return plantilla; 
};

let article__clothes_shop = document.querySelector("#article__clothes_shop");

article__clothes_shop.innerHTML = shoppingProduct();
