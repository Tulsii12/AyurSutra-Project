const products = [
    { id: 3, name: "Triphala Churna", category: "Supplements", price: 280, description: "Traditional herbal powder for digestive health", benefits: ["Digestive support", "Detoxification", "Immunity boost"], image: "assets/triphla.jpg" },
    { id: 7, name: "Shatavari Powder", category: "Supplements", price: 420, description: "Women's health tonic for hormonal balance", benefits: ["Hormonal balance", "Reproductive health", "Immunity support"], image: "assets/shatavari.jpg" },

    // Additional Oils
    { id: 1, name: "Brahmi Oil", category: "Herbal Oils", price: 450, description: "Pure Brahmi oil for mental clarity and hair health", benefits: ["Improves memory", "Reduces stress", "Nourishes hair"], image: "assets/bhrami oil.jpg" },
    { id: 6, name: "Neem Oil", category: "Herbal Oils", price: 380, description: "Pure neem oil for skin conditions and healing", benefits: ["Antibacterial", "Skin healing", "Natural antiseptic"], image: "assets/neem.jpg" },
    { id: 2, name: "Sesame Oil (Til Oil)", category: "Herbal Oils", price: 320, description: "Cold-pressed sesame oil for Abhyanga massage", benefits: ["Deep tissue nourishment", "Improves circulation", "Anti-aging properties"], image: "assets/sesame.jpg" },
    { id: 9, name: "Dhanwantharam Thailam", category: "Herbal Oils", price: 480, description: "Herbal oil used in Vata disorders and postnatal care", benefits: ["Relieves muscle pain", "Strengthens nerves", "Reduces inflammation"], image: "assets/dhanwantharam.jpg" },
    { id: 10, name: "Kottamchukkadi Oil", category: "Herbal Oils", price: 400, description: "Oil used in arthritis and neuromuscular pain treatments", benefits: ["Reduces stiffness", "Improves flexibility", "Relieves pain"], image: "assets/kottamchukkadi.jpg" },
    { id: 11, name: "Nirgundi Oil", category: "Herbal Oils", price: 360, description: "Anti-inflammatory oil used for joint pain and swelling", benefits: ["Pain relief", "Anti-swelling", "Muscle relaxation"], image: "assets/nirgundi.jpg" },
    { id: 12, name: "Bala Thailam", category: "Herbal Oils", price: 390, description: "Tonic oil used in nervous system disorders", benefits: ["Strengthens nerves", "Reduces tremors", "Supports Vata balance"], image: "assets/bala.jpg" },
    { id: 13, name: "Kumkumadi Tailam", category: "Herbal Oils", price: 650, description: "Luxury facial oil for skin brightening and radiance", benefits: ["Brightens skin", "Reduces dark spots", "Anti-aging"], image: "assets/kumkumadi.jpg" },

    // Ayurvedic Tablets
    { id: 4, name: "Ashwagandha Capsules", category: "Medicines", price: 650, description: "Premium Ashwagandha extract for stress relief", benefits: ["Stress reduction", "Energy boost", "Better sleep"], image: "assets/ashwagandha.jpg" },
    { id: 14, name: "Triphala Guggul", category: "Medicines", price: 320, description: "Herbal tablet used for detox and weight management", benefits: ["Improves digestion", "Aids weight loss", "Removes toxins"], image: "assets/triphla guggal.jpg" },
    { id: 15, name: "Yograj Guggul", category: "Medicines", price: 290, description: "Ayurvedic tablet for joint and muscle health", benefits: ["Relieves arthritis", "Reduces inflammation", "Supports joint function"], image: "assets/yograj.jpg" },
    { id: 16, name: "Giloy Tablets", category: "Medicines", price: 200, description: "Immunity boosting herb in tablet form", benefits: ["Boosts immunity", "Fights infection", "Reduces fever"], image: "assets/giloy.jpg" },
    { id: 17, name: "Chitrakadi Vati", category: "Medicines", price: 280, description: "Digestive herbal tablet for gas and indigestion", benefits: ["Improves metabolism", "Relieves bloating", "Stimulates appetite"], image: "assets/chitrakadi.jpg" },
    { id: 18, name: "Haritaki Tablets", category: "Medicines", price: 250, description: "Mild laxative and detoxifier", benefits: ["Relieves constipation", "Supports gut health", "Detoxifies colon"], image: "assets/haritki.jpg" },

    // Tools
    { id: 5, name: "Copper Water Bottle", category: "Bottles & Containers", price: 890, description: "Pure copper bottle for storing Ayurvedic water", benefits: ["Antimicrobial properties", "Improves digestion", "Boosts immunity"], image: "assets/Copper Water Bottle.jpg" },
    { id: 8, name: "Glass Storage Jars Set", category: "Bottles & Containers", price: 560, description: "Set of 3 glass jars for storing herbs and medicines", benefits: ["Airtight storage", "Chemical-free", "Easy to clean"], image: "assets/Glass Storage Jars Set.jpg" },
    { id: 19, name: "Basti Enema Kit", category: "Bottles & Containers", price: 1500, description: "Complete kit for Ayurvedic Basti therapy", benefits: ["Colon detox", "Balances Vata", "Improves elimination"], image: "assets/enema kit.jpg" },
    { id: 20, name: "Shirodhara Pot Set", category: "Bottles & Containers", price: 2500, description: "Stainless steel or copper pot set for Shirodhara treatment", benefits: ["Promotes calmness", "Relieves anxiety", "Improves focus"], image: "assets/shirodhara pot.jpg" }
];


const productList = document.getElementById('product-list');
const cartItemCount = document.getElementById('cart-item-count');
const cartTotal = document.getElementById('cart-total');
const cartItemsList = document.getElementById('cart-items-list');
const productSectionTitle = document.getElementById('product-section-title');
const productCountSpan = document.getElementById('product-count');
const checkoutBtn = document.getElementById('checkout-btn');
const productGridSection = document.getElementById('product-grid-section');
const checkoutSection = document.getElementById('checkout-section');
const checkoutForm = document.getElementById('checkout-form');
const checkoutSummary = document.getElementById('checkout-summary');
const cancelCheckoutBtn = document.getElementById('cancel-checkout-btn');

// Modal Elements
const customModal = document.getElementById('custom-modal');
const modalMessage = document.getElementById('modal-message');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalOkBtn = document.getElementById('modal-ok-btn');

let cart = {};

// Custom alert function using a modal
function showAlert(message) {
    modalMessage.textContent = message;
    customModal.style.display = 'block';
}

// Close modal function
function closeModal() {
    customModal.style.display = 'none';
}

modalCloseBtn.addEventListener('click', closeModal);
modalOkBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === customModal) {
        closeModal();
    }
});

// Function to render products based on category
function renderProducts(category) {
    productList.innerHTML = '';
    const filteredProducts = category === 'All' ? products : products.filter(p => p.category === category);

    productSectionTitle.textContent = category;
    productCountSpan.textContent = `${filteredProducts.length} products available`;

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'bg-white rounded-lg shadow-md product-card p-4';

        // Construct the benefits list HTML
        const benefitsHtml = product.benefits.map(benefit => `<li class="flex items-center"><i class="fas fa-check-circle text-green-500 mr-2"></i>${benefit}</li>`).join('');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded-lg mb-4">
            <h4 class="text-xl font-bold mb-2">${product.name}</h4>
            <p class="text-gray-600 mb-2 font-semibold">₹${product.price}</p>
            <p class="text-gray-500 text-sm mb-4">${product.description}</p>
            <div class="bg-gray-50 p-3 rounded-lg">
                <h5 class="text-sm font-bold text-gray-700 mb-2">Benefits:</h5>
                <ul class="text-xs text-gray-600 space-y-1">
                    ${benefitsHtml}
                </ul>
            </div>
            <div class="flex items-center justify-between mt-4">
                <div class="flex items-center space-x-2">
                    <button class="quantity-btn p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200" data-action="decrease" data-id="${product.id}">
                        <i class="fas fa-minus text-gray-600 text-xs"></i>
                    </button>
                    <span class="quantity-display font-bold text-lg" data-id="${product.id}">1</span>
                    <button class="quantity-btn p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200" data-action="increase" data-id="${product.id}">
                        <i class="fas fa-plus text-gray-600 text-xs"></i>
                    </button>
                </div>
                <button class="add-to-cart-btn bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors duration-200" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

// Function to update the cart
function updateCart() {
    let totalItems = 0;
    let totalPrice = 0;

    // Clear the cart items list
    cartItemsList.innerHTML = '';

    // Check if the cart is empty
    const cartKeys = Object.keys(cart);
    if (cartKeys.length === 0) {
        cartItemsList.innerHTML = '<p class="text-gray-500 text-sm">Your cart is empty.</p>';
    }

    cartKeys.forEach(productId => {
        const product = products.find(p => p.id === parseInt(productId));
        const quantity = cart[productId];
        totalItems += quantity;
        totalPrice += product.price * quantity;

        // Create and append cart item element
        const cartItem = document.createElement('div');
        cartItem.className = 'flex items-center justify-between border-b pb-2';
        cartItem.innerHTML = `
            <div>
                <span class="font-bold">${product.name}</span>
                <span class="text-sm text-gray-500">x${quantity}</span>
            </div>
            <button class="delete-item-btn p-1 text-red-500 hover:text-red-700 transition-colors duration-200" data-id="${product.id}">
                <i class="fas fa-times-circle"></i>
            </button>
        `;
        cartItemsList.appendChild(cartItem);
    });

    cartItemCount.textContent = totalItems;
    cartTotal.textContent = `₹${totalPrice}`;
}

// Event listener for category links
document.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.dataset.category;

        // Remove active class from all links
        document.querySelectorAll('.category-link').forEach(l => {
            l.classList.remove('bg-green-100', 'text-green-700', 'font-medium');
            l.classList.add('hover:bg-gray-100');
        });

        // Add active class to the clicked link
        e.target.classList.add('bg-green-100', 'text-green-700', 'font-medium');
        e.target.classList.remove('hover:bg-gray-100');

        renderProducts(category);
    });
});

// Event delegation for product quantity and add to cart buttons
productList.addEventListener('click', (e) => {
    // Handle quantity buttons
    if (e.target.closest('.quantity-btn')) {
        const button = e.target.closest('.quantity-btn');
        const action = button.dataset.action;
        const id = button.dataset.id;
        const quantityDisplay = document.querySelector(`.quantity-display[data-id="${id}"]`);

        let currentQuantity = parseInt(quantityDisplay.textContent);

        if (action === 'increase') {
            currentQuantity++;
        } else if (action === 'decrease' && currentQuantity > 1) {
            currentQuantity--;
        }

        quantityDisplay.textContent = currentQuantity;
    }

    // Handle add to cart button
    if (e.target.closest('.add-to-cart-btn')) {
        const button = e.target.closest('.add-to-cart-btn');
        const id = button.dataset.id;
        const quantityDisplay = document.querySelector(`.quantity-display[data-id="${id}"]`);
        const quantity = parseInt(quantityDisplay.textContent);

        if (cart[id]) {
            cart[id] += quantity;
        } else {
            cart[id] = quantity;
        }

        // Animate the button
        button.classList.add('animate-add-to-cart');
        setTimeout(() => {
            button.classList.remove('animate-add-to-cart');
        }, 500);

        updateCart();
    }
});

// Event delegation for deleting items from the cart
cartItemsList.addEventListener('click', (e) => {
    if (e.target.closest('.delete-item-btn')) {
        const button = e.target.closest('.delete-item-btn');
        const id = button.dataset.id;

        // Remove item from cart object
        delete cart[id];

        // Update the cart display
        updateCart();
    }
});

// Event listener for the checkout button
checkoutBtn.addEventListener('click', () => {
    if (Object.keys(cart).length === 0) {
        showAlert('Your cart is empty. Please add items before checking out.');
        return;
    }

    // Hide the product grid and show the checkout section
    productGridSection.classList.add('hidden');
    checkoutSection.classList.remove('hidden');

    // Create checkout summary
    let summaryHtml = '<h4 class="text-lg font-bold mb-2">Order Summary</h4>';
    let summaryTotal = 0;
    Object.keys(cart).forEach(productId => {
        const product = products.find(p => p.id === parseInt(productId));
        const quantity = cart[productId];
        const itemTotal = product.price * quantity;
        summaryTotal += itemTotal;
        summaryHtml += `<div class="flex justify-between items-center text-sm mb-1"><span class="text-gray-600">${product.name} x${quantity}</span><span>₹${itemTotal}</span></div>`;
    });
    summaryHtml += `<div class="flex justify-between items-center font-bold mt-4"><span class="text-xl">Total:</span><span class="text-green-600 text-xl">₹${summaryTotal}</span></div>`;
    checkoutSummary.innerHTML = summaryHtml;
});

// Event listener for the cancel checkout button
cancelCheckoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Hide the checkout section and show the product grid
    checkoutSection.classList.add('hidden');
    productGridSection.classList.remove('hidden');
});

// Event listener for form submission
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real app, this is where you'd process payment and send data to a server.

    showAlert('Thank you for your order! Your purchase has been confirmed.');

    // Reset the cart and switch back to the main product page
    cart = {};
    updateCart();

    // Hide the checkout section and show the product grid after a slight delay for user to see the alert
    setTimeout(() => {
        checkoutSection.classList.add('hidden');
        productGridSection.classList.remove('hidden');
    }, 500);

    // Clear the form fields
    checkoutForm.reset();
});

// Initial rendering of all products
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('All');
});
