// Retrieve the cart data from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Populate the cart table
const cartTableBody = document.querySelector('#cart-items tbody');
const cartTotal = document.getElementById('cart-total');

// Function to render cart items directly without any notifications
function renderCart() {
    cartTableBody.innerHTML = ''; // Clear the table for fresh rendering

    let total = 0;

    // Check if the cart is empty and handle accordingly
    if (cart.length === 0) {
        const emptyRow = document.createElement('tr');
        const emptyCell = document.createElement('td');
        emptyCell.setAttribute('colspan', 5); // Spanning across all columns
        emptyCell.textContent = 'Your cart is empty.'; // Message for an empty cart
        emptyCell.style.textAlign = 'center'; // Center-align the message
        emptyRow.appendChild(emptyCell);
        cartTableBody.appendChild(emptyRow);

        cartTotal.textContent = 'Total: $0.00'; // Set the total to $0.00
        return; // Exit early since there are no items
    }

    // If the cart has items, render them
    cart.forEach(item => {
        const row = document.createElement('tr');

        // Product Name
        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        // Product Image
        const imageCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = item.image || 'placeholder.jpg'; // Fallback for missing image
        img.alt = item.name || 'Product Image';
        img.style.width = '100px'; // Adjust the image size
        imageCell.appendChild(img);
        row.appendChild(imageCell);

        // Product Price
        const priceCell = document.createElement('td');
        priceCell.textContent = `$${item.price.toFixed(2)}`;
        row.appendChild(priceCell);

        // Product Quantity
        const quantityCell = document.createElement('td');
        quantityCell.textContent = item.quantity;
        row.appendChild(quantityCell);

        // Total Price for Each Item
        const totalCell = document.createElement('td');
        const itemTotal = item.price * item.quantity;
        totalCell.textContent = `$${itemTotal.toFixed(2)}`;
        row.appendChild(totalCell);

        // Add the row to the table body
        cartTableBody.appendChild(row);

        // Update the cart total
        total += itemTotal;
    });

    // Update the total price at the bottom
    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Automatically render the cart when the page loads (no user interaction required)
document.addEventListener('DOMContentLoaded', renderCart);
