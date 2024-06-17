
export const titleProductDetail = async ({data : dataUpdate} = res  ) => {
    return /*html*/`
    <article class="article__detail">
        <div class="detail__head">
            <h1>${dataUpdate.product_title}</h1>
            <div class="product__select">
                <img id="menos" src="../storage/img/minus.svg">
                <span id="num" >1</span>
                <img id="mas" src="../storage/img/plus.svg">
            </div>
        </div>
        <div class="detail__score">
            ${new Array(parseInt(dataUpdate.product_star_rating)).fill(`<img src="../storage/img/star.svg">`).join('')}
            <span>${dataUpdate.product_star_rating}</span>
            <p><a href="${dataUpdate.product_url}">(${dataUpdate.product_num_ratings} reviews)</a></p>
        </div>
    </article>`;
}

export const descriptionProductDetail = async ({data : dataUpdate} = res) => {
    if (dataUpdate.product_description !== null){
        let descripcion = async() => {
        let text = dataUpdate.product_description;
        let description = text.toString();

        if (description.length > 150) {
            description = description.slice(0, 150)+'  <strong id="text">Read More. . .</strong>';
        }

        return description;
    }

    return /*html*/`
    <article class="product__information">
        <p id ="parrafo">${await descripcion()}</p>
    </article>
    `;}
    else {
        return "";
    }
    
}

export const sizeProductDetail = async({data : dataUpdate} = res) => {

    return /*html*/`
    <article class="product__custom">
        <div class="product__size">
            <h5>Choose Size</h5>
            <div>
                <img id="s" src="../storage/img/s.svg">
                <img id="m" src="../storage/img/m.svg">
                <img id="l" src="../storage/img/l.svg">
                <img id="xl" src="../storage/img/xl.svg">
            </div>
        </div>
        <div class="product__color">
            <h5>Color</h5>
            <div>
                <img src="../storage/img/1.svg">
                <img src="../storage/img/2.svg">
                <img src="../storage/img/3.svg">
            </div>
        </div>
    </article> `;   
}

export const valueProductDetail = async ({data : dataUpdate} = res) => {

    const originalPrice = async() => {
        if (dataUpdate.product_original_price === null) {
            return '';
        }
        else {
            return dataUpdate.product_original_price;
        }
    }

    return /*html*/`
    <li>
        <a href="./checkout.html?id=${dataUpdate.asin}">
            <img src="../storage/img/shoppingcar.svg">
            <span id="precio" >Add to Car | ${dataUpdate.product_price} <sub>${await originalPrice()}</sub></span>
        </a>
    </li>
    `;
}

