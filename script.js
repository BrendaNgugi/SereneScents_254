document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});

// Track cart items
let cart = [];

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.closest('.product').querySelector('p:first-of-type').textContent;
        const price = parseFloat(button.closest('.product').querySelector('p:nth-of-type(2)').textContent.replace('$', ''));

        // Add item to the cart array
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        // Update the cart display
        updateCart();
    });
});

// Update the cart and save it to localStorage
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.reduce((count, item) => count + item.quantity, 0);

    // Save the cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Toggle cart visibility (future functionality)
document.getElementById('cart-button').addEventListener('click', () => {
    alert('Cart clicked! Cart details can be shown here in the future.');
});
function addToCart(name, price, image) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1, image });
    }
    updateCart();
}