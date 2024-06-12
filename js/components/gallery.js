
export const galleryIndex = (res) => {
    let {products} = res.data;
    let plantilla = "";
    products.forEach((value, index) => {
        plantilla +=  /*html*/`
        <section>
            <div class="section__front_page">
                <a href="views/detail.html">
                    <img src="${value.product_photo}">
                </a>
                <img src="./storage/img/heartbig.svg">
            </div>
            <h5>${value.product_title}</h5>
            <small>Headwear</small>
            <div class="section__price">
                <span>$59.000</span>
                <div class="price__score">
                    <img src="./storage/img/star.svg">
                    <p>5.0</p>
                </div>
            </div>
        </section>
        `;
    });
    return plantilla;
}