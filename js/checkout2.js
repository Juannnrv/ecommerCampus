import { built__car, shoppingProduct } from "./components/carrito.js";
import { getAllItemsToBuy } from "./module/checkout.js";

let article__clothes_shop = document.querySelector("#article__clothes_shop");
let built_info = document.querySelector("#built_info");

addEventListener("DOMContentLoaded", async (e) => {
    let info = await getAllItemsToBuy();
    // console.log(info);
    let params = new URLSearchParams(location.search);
    let id = params.get('id');
    
    article__clothes_shop.innerHTML = await shoppingProduct(info); 
    built_info.innerHTML = await built__car(info);
    
    let back = document.querySelector("#back");
    back.addEventListener("click", (e) => {
        window.location.href = "detail.html";
    })
    
    const updateCar = () => {
        const updateQuantity = () => {
            let totalQuantity = 0; 
            Object.keys(sessionStorage).forEach((key) => {
                let res = JSON.parse(sessionStorage.getItem(key)); 
                totalQuantity += res.data.product_quantity; 
            });
            // console.log(totalQuantity); 
            return totalQuantity; 
        }
        
        const updatePrice = () => {
            let totalPrice = 0; 
            Object.keys(sessionStorage).forEach((key) => {
                let res = JSON.parse(sessionStorage.getItem(key)); 
                totalPrice += res.data.product_price_detail; 
            });
            // console.log(totalPrice); 
            return totalPrice.toFixed(2); 
        }
        
        built_info.innerHTML = /*html*/`
        <div class="built__total">
        <p id="items">Total (${updateQuantity()} items)</p>
        <span id="price">$${updatePrice()}</span>
        </div>
        <div class="built__fee">
        <p>Shipping Fee</p>
        <span>$0.00</span>
        </div>
        <hr>
        <div class="built__subtotal">
        <p>Sub Total</p>
        <span id="total">$${updatePrice()}</span>
        </div>`;
    };
    
    updateCar();

    
    document.querySelectorAll(".menos").forEach((menosBtn) => {
        menosBtn.addEventListener("click", (e) => {
            let num = e.target.closest('.card__quantity').querySelector('.num'); 
            let id = e.target.getAttribute('data-id'); 
            let quantity = parseInt(num.textContent);
    
            if (quantity > 1) {
                quantity -= 1;
                num.textContent = quantity;
    
                let products = JSON.parse(sessionStorage.getItem(id));
                products.data.product_quantity = quantity;
    
                let productPrice = products.data.product_price ? parseFloat(products.data.product_price.replace("$", "")) : 0;
                let totalPrice = (productPrice * quantity).toFixed(2);
    
                built_info.innerHTML = /*html*/`
                    <div class="built__total">
                        <p id="items">Total (${quantity} items)</p>
                        <span id="price">$${totalPrice}</span>
                    </div>
                    <div class="built__fee">
                        <p>Shipping Fee</p>
                        <span>$0.00</span>
                    </div>
                    <hr>
                    <div class="built__subtotal">
                        <p>Sub Total</p>
                        <span id="total">$${totalPrice}</span>
                    </div>`;
    
                products.data.product_price_detail = parseFloat(totalPrice);
                sessionStorage.setItem(id, JSON.stringify(products));
                updateCar();
            } else if (quantity <= 1) {
                let dataId = e.target.getAttribute('data-id'); 
                built_info.innerHTML = /*html*/`
                    <div class="built__total">
                        <p id="items">Total (0 items)</p>
                        <span id="price">$0</span>
                    </div>
                    <div class="built__fee">
                        <p>Shipping Fee</p>
                        <span>$0.00</span>
                    </div>
                    <hr>
                    <div class="built__subtotal">
                        <p>Sub Total</p>
                        <span id="total">$0</span>
                    </div>`;
                sessionStorage.removeItem(dataId);
                
                setTimeout(() => {
                    location.reload();
                }, 1000);
                updateCar();
            }
        });
    });
    
    document.querySelectorAll(".mas").forEach((masBtn) => {
        masBtn.addEventListener("click", (e) => {
            let num = e.target.closest('.card__quantity').querySelector('.num'); 
            let id = e.target.getAttribute('data-id'); 
            let quantity = parseInt(num.textContent);
            quantity += 1;
            num.textContent = quantity;
    
            let products = JSON.parse(sessionStorage.getItem(id));
            products.data.product_quantity = quantity;
    
            let productPrice = products.data.product_price ? parseFloat(products.data.product_price.replace("$", "")) : 0;
            let totalPrice = parseFloat((productPrice * quantity).toFixed(2));
    
            built_info.innerHTML = /*html*/`
                <div class="built__total">
                    <p id="items">Total (${quantity} items)</p>
                    <span id="price">$${totalPrice}</span>
                </div>
                <div class="built__fee">
                    <p>Shipping Fee</p>
                    <span>$0.00</span>
                </div>
                <hr>
                <div class="built__subtotal">
                    <p>Sub Total</p>
                    <span id="total">$${totalPrice}</span>
                </div>`;
    
            products.data.product_price_detail = parseFloat(totalPrice);
            sessionStorage.setItem(id, JSON.stringify(products));
            updateCar();
        });
    });
    
});
