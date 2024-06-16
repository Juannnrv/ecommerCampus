

export const shoppingProduct = async({data : dataUpdate} = res) => {
    return /*html*/`
    <div class="clothes__product">
       <div class="product__card">
            <div class="card__img">
                <img src="${dataUpdate.product_photo}"> 
            </div>
            <div class="card__info">
                <div class="info__name">
                    <p>Modern light clothes</p>
                        <small>Dress modern</small>
                </div>
                <span>$212.99</span>
            </div>
            <div class="card__select">
                <img src="../storage/img/Punticos.svg">
                <div class="card__quantity">
                    <img src="../storage/img/minuswhite.svg">
                    <span>4</span>
                    <img src="../storage/img/pluswhite.svg">
                </div>
            </div>
        </div>  
    </div>`
}