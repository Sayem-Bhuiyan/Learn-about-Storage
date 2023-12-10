const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');

    const product = productField.value;
    const quantity = quantityField.value;

    productField.value = '';
    quantityField.value = '';

    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity)
    
}

const displayProduct = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.classList = "text-2xl font-medium"
    li.innerText = `
        ${product}:    ${quantity}
    `;

    productContainer.appendChild(li)
}

const getStoredShopingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShopingCart();
    cart[product] = quantity;
    
    cartStringified = JSON.stringify(cart);
    console.log(cartStringified)

    localStorage.setItem('cart', cartStringified);
}

const displayProductsFromLocalStorage = () => {
    const savedCart = getStoredShopingCart();
    for (const product in savedCart){
        const quantity = savedCart[product]
        console.log(product, quantity)
        displayProduct(product, quantity)
    }
}
displayProductsFromLocalStorage()