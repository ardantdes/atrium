document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.product button');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const cartIcon = document.querySelector('#cart .cart-icon img');
    let totalPrice = 0;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const product = button.parentElement;
            const productName = product.querySelector('h3').textContent;
            const productPrice = parseFloat(product.getAttribute('data-price'));

            // Add product to cart
            const cartItem = document.createElement('li');
            cartItem.textContent = `€${productName} - €${productPrice.toFixed(2)}`;
            cartItems.appendChild(cartItem);

            // Update total price
            totalPrice += productPrice;
            totalPriceElement.textContent = totalPrice.toFixed(2);
        });
    });
});
// Function to open the modal
function openModal(src) {
    document.getElementById('modalImage').src = src;
    document.getElementById('imageModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Function to handle click outside modal to close it
window.onclick = function(event) {
    if (event.target === document.getElementById('imageModal')) {
        closeModal();
    }
};
