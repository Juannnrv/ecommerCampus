
export const shoppingProduct = () => {
    let plantilla = ''; 

    Object.keys(sessionStorage).forEach((key) => {
        const res = JSON.parse(sessionStorage.getItem(key)); 

        plantilla += /*html*/`
        <div class="clothes__product">
            <div class="product__card">
                <div class="card__img">
                    <img src="${res.data.product_photo}"> 
                </div>
                <div class="card__info">
                    <div class="info__name">
                        <p>${res.data.product_title.slice(0, 50)}...</p>
                        <small>Category</small>
                    </div>
                    <span>$${parseFloat(res.data.product_price.replace("$", "")).toFixed(2)}</span>
                </div>
                <div class="card__select">
                    <img src="../storage/img/Punticos.svg">
                    <div class="card__quantity">
                        <img class="menos" src="../storage/img/minuswhite.svg" data-id="${res.data.asin}">
                        <span class="num" data-id="${res.data.asin}">${res.data.product_quantity}</span>
                        <img class="mas" src="../storage/img/pluswhite.svg" data-id="${res.data.asin}">
                    </div>
                </div>
            </div>  
        </div>`;
    });
    
    return plantilla; 
};

export const built__car = async(res) => {
    if (!res || !res.data) {
        return /*html*/`
        <div class="built__total">
            <p id="items">Total (0 items)</p>
            <span id="price">$0.00</span>
        </div>
        <div class="built__fee">
            <p>Shipping Fee</p>
            <span>$0.00</span>
        </div>
        <hr>
        <div class="built__subtotal">
            <p>Sub Total</p>
            <span id="total">$0.00</span>
        </div>`;
    }

    return /*html*/`
    <div class="built__total">
        <p id="items">Total (${res.data.product_quantity || 0} items)</p>
        <span id="price">${parseFloat(res.data.product_price.replace("$", "") || 0)}</span>
    </div>
    <div class="built__fee">
        <p>Shipping Fee</p>
        <span>$0.00</span>
    </div>
    <hr>
    <div class="built__subtotal">
        <p>Sub Total</p>
        <span id="total">${res.data.product_price || '$0.00'}</span>
    </div>`;
}