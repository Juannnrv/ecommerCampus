

export const getAllItemsToBuy = async () => {
    let products = [];
    let keys = Object.keys(sessionStorage);
    let exclude = keys[0]
    
    keys.filter(item => item !== exclude).forEach(index => {
        products.push(JSON.parse(sessionStorage.getItem(index)));
    });
    
    return products;
};