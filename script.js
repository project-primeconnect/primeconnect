
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}

// Function to update cart count in header
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart'));
  document.querySelector('.cart-count').textContent = cart.length;
}

// Call this when page loads
document.addEventListener('DOMContentLoaded', function() {
  updateCartCount();
});

// Function to add item to cart
function addToCart(name, price) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
  // Ensure price is properly converted to number
  const numericPrice = typeof price === 'string' ? 
                      parseFloat(price.replace(/[^0-9.]/g, '')) : 
                      Number(price);
  
  cart.push({ 
      name, 
      price: numericPrice 
  });
  
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`${name} added to cart!`);
}

// Initialize cart if it doesn't exist
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}
