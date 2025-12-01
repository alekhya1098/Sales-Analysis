<<<<<<< HEAD
// Product sales data with real analytics metrics - sorted by revenue (highest to lowest)
const products = [
    { id: 26, name: "Anti-Cellulite Body Gel", size: "150ml", category: "body-care", unitPrice: 1889.4, revenue: 117000000, totalSales: 50364, orders: 988, avgOrderValue: 118716.4, growth: 37.9, icon: "fas fa-fire", topRegion: "West" },
    { id: 25, name: "Body Butter", size: "200g", category: "body-care", unitPrice: 1782.2, revenue: 109000000, totalSales: 50358, orders: 999, avgOrderValue: 109583.6, growth: -32.8, icon: "fas fa-cookie-bite", topRegion: "West" },
    { id: 13, name: "Nourishing Face Mask", size: "100g", category: "masks", unitPrice: 1943, revenue: 78281380, totalSales: 34014, orders: 658, avgOrderValue: 118968.7, growth: -10.4, icon: "fas fa-mask", topRegion: "West" },
    { id: 14, name: "Clay Purifying Face Mask", size: "150g", category: "masks", unitPrice: 1889.4, revenue: 75390397, totalSales: 32484, orders: 643, avgOrderValue: 117247.9, growth: -25, icon: "fas fa-mountain", topRegion: "West" },
    { id: 5, name: "Refreshing Facial Toner", size: "250ml", category: "cleansers", unitPrice: 1855.9, revenue: 70804381, totalSales: 28692, orders: 558, avgOrderValue: 126889.6, growth: 0, icon: "fas fa-spray-can", topRegion: "West" },
    { id: 15, name: "Sheet Masks (Pack of 5)", size: "5 pieces", category: "masks", unitPrice: 1755.4, revenue: 67331623, totalSales: 31242, orders: 616, avgOrderValue: 109304.6, growth: -19.2, icon: "fas fa-layer-group", topRegion: "West" },
    { id: 2, name: "Deep Hydration Face Wash", size: "200ml", category: "cleansers", unitPrice: 1782.2, revenue: 57401098, totalSales: 26304, orders: 527, avgOrderValue: 108920.5, growth: -25.2, icon: "fas fa-tint", topRegion: "West" },
    { id: 4, name: "Micellar Cleansing Water", size: "400ml", category: "cleansers", unitPrice: 1956.4, revenue: 56701537, totalSales: 24072, orders: 481, avgOrderValue: 117882.6, growth: 23.3, icon: "fas fa-droplet", topRegion: "West" },
    { id: 1, name: "Gentle Foaming Face Cleanser", size: "150ml", category: "cleansers", unitPrice: 1882.7, revenue: 55952290, totalSales: 24138, orders: 484, avgOrderValue: 115603.9, growth: 50.9, icon: "fas fa-soap", topRegion: "West" },
    { id: 3, name: "Exfoliating Facial Scrub", size: "100g", category: "cleansers", unitPrice: 1802.3, revenue: 51764816, totalSales: 23748, orders: 467, avgOrderValue: 110845.4, growth: 3.3, icon: "fas fa-circle-notch", topRegion: "West" },
    { id: 18, name: "Lip Balm", size: "15g", category: "moisturizers", unitPrice: 1983.2, revenue: 46228955, totalSales: 17754, orders: 347, avgOrderValue: 133224.7, growth: 21.6, icon: "fas fa-kiss", topRegion: "South" },
    { id: 17, name: "Under-Eye Gel Patches (Pack of 10)", size: "10 pairs", category: "masks", unitPrice: 1762.1, revenue: 40594442, totalSales: 17682, orders: 345, avgOrderValue: 117665.1, growth: -18.3, icon: "fas fa-compress", topRegion: "West" },
    { id: 6, name: "Vitamin C Serum", size: "30ml", category: "serums", unitPrice: 1842.5, revenue: 40149147, totalSales: 17892, orders: 353, avgOrderValue: 113737, growth: -10.5, icon: "fas fa-sun", topRegion: "West" },
    { id: 20, name: "Sunscreen Lotion SPF 30", size: "200ml", category: "sun-care", unitPrice: 1953.05, revenue: 39645160, totalSales: 16044, orders: 330, avgOrderValue: 120136.9, growth: 47.6, icon: "fas fa-sun", topRegion: "West" },
    { id: 16, name: "Brightening Eye Cream", size: "20ml", category: "moisturizers", unitPrice: 1956.4, revenue: 37446541, totalSales: 16578, orders: 321, avgOrderValue: 116655.9, growth: -17, icon: "fas fa-eye", topRegion: "West" },
    { id: 19, name: "Lip Scrub", size: "25g", category: "masks", unitPrice: 1822.4, revenue: 34446174, totalSales: 15210, orders: 301, avgOrderValue: 114439.1, growth: -8.8, icon: "fas fa-lips", topRegion: "West" },
    { id: 12, name: "Aloe Vera Gel", size: "200ml", category: "moisturizers", unitPrice: 2324.9, revenue: 24173185, totalSales: 9396, orders: 183, avgOrderValue: 132093.9, growth: -66.4, icon: "fas fa-seedling", topRegion: "West" },
    { id: 11, name: "Oil-Free Day Lotion", size: "100ml", category: "moisturizers", unitPrice: 2278, revenue: 22324427, totalSales: 8832, orders: 171, avgOrderValue: 130552.2, growth: 12.7, icon: "fas fa-leaf", topRegion: "West" },
    { id: 28, name: "Foot Cream", size: "100ml", category: "body-care", unitPrice: 2244.5, revenue: 20823439, totalSales: 8574, orders: 166, avgOrderValue: 125442.4, growth: -31.4, icon: "fas fa-shoe-prints", topRegion: "West" },
    { id: 8, name: "Retinol Anti-Aging Serum", size: "30ml", category: "serums", unitPrice: 1902.8, revenue: 19850680, totalSales: 8394, orders: 167, avgOrderValue: 118866.3, growth: 72, icon: "fas fa-magic", topRegion: "West" },
    { id: 21, name: "Sunscreen Gel SPF 50", size: "100ml", category: "sun-care", unitPrice: 1829.1, revenue: 19246876, totalSales: 8616, orders: 166, avgOrderValue: 115945, growth: -6.3, icon: "fas fa-shield-alt", topRegion: "West" },
    { id: 23, name: "Hand Cream", size: "75ml", category: "body-care", unitPrice: 1768.8, revenue: 18856855, totalSales: 8070, orders: 166, avgOrderValue: 113595.5, growth: 4.4, icon: "fas fa-hand-paper", topRegion: "South" },
    { id: 30, name: "Pore Minimizing Toner", size: "200ml", category: "cleansers", unitPrice: 1802.3, revenue: 18590168, totalSales: 8568, orders: 171, avgOrderValue: 108714.4, growth: 0.4, icon: "fas fa-compress-arrows-alt", topRegion: "West" },
    { id: 27, name: "Whitening Body Cream", size: "200g", category: "body-care", unitPrice: 1869.3, revenue: 18377792, totalSales: 8904, orders: 180, avgOrderValue: 102098.8, growth: -8.1, icon: "fas fa-star", topRegion: "West" },
    { id: 10, name: "Daily Moisturizing Face Cream", size: "100g", category: "moisturizers", unitPrice: 1916.2, revenue: 17660584, totalSales: 7398, orders: 145, avgOrderValue: 121797.1, growth: -0.2, icon: "fas fa-heart", topRegion: "West" },
    { id: 7, name: "Hyaluronic Acid Serum", size: "50ml", category: "serums", unitPrice: 1829.1, revenue: 17058267, totalSales: 8286, orders: 162, avgOrderValue: 105297.9, growth: 6.5, icon: "fas fa-tint", topRegion: "West" },
    { id: 22, name: "After Sun Aloe Lotion", size: "150ml", category: "sun-care", unitPrice: 1139, revenue: 15638202, totalSales: 7878, orders: 157, avgOrderValue: 99606.38, growth: -60.1, icon: "fas fa-leaf", topRegion: "West" },
    { id: 29, name: "Acne Spot Treatment Gel", size: "30ml", category: "masks", unitPrice: 1259.6, revenue: 15311014, totalSales: 8010, orders: 160, avgOrderValue: 95693.84, growth: -29.4, icon: "fas fa-crosshairs", topRegion: "West" },
    { id: 9, name: "Collagen Boost Night Cream", size: "50g", category: "moisturizers", unitPrice: 1239.5, revenue: 14598630, totalSales: 6846, orders: 135, avgOrderValue: 108138, growth: -5.3, icon: "fas fa-moon", topRegion: "South" },
    { id: 24, name: "Body Lotion", size: "250ml", category: "body-care", unitPrice: 1762.1, revenue: 14555053, totalSales: 6798, orders: 137, avgOrderValue: 106241.3, growth: -23.4, icon: "fas fa-pump-soap", topRegion: "West" }
];

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

// Current filter state
let currentFilter = 'all';
let currentSearch = '';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Products loaded:', products.length);
    console.log('First product:', products[0]);
    renderProducts(products);
    setupEventListeners();
    
    // Add beautiful enhancements
    addRippleEffect();
    addScrollAnimations();
    addLoadingStates();
    addTransitions();
});

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update filter and render
            currentFilter = this.getAttribute('data-category');
            filterAndRenderProducts();
        });
    });
    
    // Search input
    searchInput.addEventListener('input', function() {
        currentSearch = this.value.toLowerCase();
        filterAndRenderProducts();
    });
}

// Filter and render products based on current filter and search
function filterAndRenderProducts() {
    let filteredProducts = products;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === currentFilter
        );
    }
    
    // Apply search filter
    if (currentSearch) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(currentSearch) ||
            product.category.toLowerCase().includes(currentSearch) ||
            product.topRegion.toLowerCase().includes(currentSearch)
        );
    }
    
    renderProducts(filteredProducts);
}

// Render products to the grid
function renderProducts(productsToRender) {
    console.log('Rendering products:', productsToRender.length);
    console.log('Products grid element:', productsGrid);
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="growth-badge ${product.growth >= 0 ? 'positive' : 'negative'}">
                <i class="fas fa-arrow-${product.growth >= 0 ? 'up' : 'down'}"></i>
                ${Math.abs(product.growth).toFixed(1)}%
            </div>
            <div class="product-image">
                <i class="${product.icon}"></i>
                <div class="product-category">${getCategoryName(product.category)}</div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-size">${product.size} • Unit Price: $${product.unitPrice.toLocaleString()}</div>
                
                <div class="sales-metrics">
                    <div class="metric">
                        <span class="metric-label">Total Revenue</span>
                        <span class="metric-value">$${product.revenue.toLocaleString()}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Units Sold</span>
                        <span class="metric-value">${product.totalSales.toLocaleString()}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Orders</span>
                        <span class="metric-value">${product.orders.toLocaleString()}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Avg Order Value</span>
                        <span class="metric-value">$${product.avgOrderValue}</span>
                    </div>
                </div>
                
                <div class="region-info">
                    <i class="fas fa-globe"></i>
                    <span>Top Region: ${product.topRegion}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Get category display name
function getCategoryName(category) {
    const categoryNames = {
        'cleansers': 'Cleansers',
        'serums': 'Serums',
        'moisturizers': 'Moisturizers',
        'masks': 'Treatments',
        'sun-care': 'Sun Care',
        'body-care': 'Body Care'
    };
    return categoryNames[category] || 'Product';
}

// Product action functions
function viewAnalytics(productId) {
    const product = products.find(p => p.id === productId);
    showNotification(`Opening detailed analytics for ${product.name}`, 'info');
    // Here you would typically open a detailed analytics modal or navigate to a detailed page
}

function exportData(productId) {
    const product = products.find(p => p.id === productId);
    showNotification(`Exporting sales data for ${product.name}`, 'success');
    // Here you would typically trigger a CSV/Excel download
}

// Enhanced notification system with beautiful animations
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const icon = type === 'success' ? '✓' : 'ℹ';
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="
                display: flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                font-weight: bold;
            ">${icon}</span>
            <span>${message}</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, ${type === 'success' ? '#27ae60, #2ecc71' : '#3498db, #9b59b6'});
        color: white;
        padding: 16px 24px;
        border-radius: 15px;
        box-shadow: 0 8px 32px rgba(52, 152, 219, 0.4);
        z-index: 1000;
        font-weight: 500;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        max-width: 350px;
        animation: slideInRight 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transform: translateX(100%);
    `;
    
    // Add animation styles
    if (!document.querySelector('#notification-animations')) {
        const style = document.createElement('style');
        style.id = 'notification-animations';
        style.textContent = `
            @keyframes slideInRight {
                from { 
                    transform: translateX(100%); 
                    opacity: 0; 
                }
                to { 
                    transform: translateX(0); 
                    opacity: 1; 
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 10);
    
    // Animate out
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.5s ease reverse';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

function addRippleEffect() {
    const buttons = document.querySelectorAll('.btn, .filter-btn, .control-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation keyframes
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe product cards
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
}

function addLoadingStates() {
    // Add loading animation to search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            
            // Add loading indicator
            const loadingIndicator = document.createElement('div');
            loadingIndicator.className = 'loading';
            loadingIndicator.style.cssText = `
                position: absolute;
                right: 15px;
                top: 50%;
                transform: translateY(-50%);
            `;
            
            const searchBox = this.parentElement;
            const existingLoader = searchBox.querySelector('.loading');
            if (existingLoader) existingLoader.remove();
            
            if (this.value.length > 0) {
                searchBox.appendChild(loadingIndicator);
                
                searchTimeout = setTimeout(() => {
                    loadingIndicator.remove();
                }, 500);
            }
        });
    }
}

function addTransitions() {
    // Add smooth transitions to all interactive elements
    const interactiveElements = document.querySelectorAll('button, input, .product-card, .stat-card');
    
    interactiveElements.forEach(element => {
        element.style.transition = 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)';
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.product-card, .stat-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}



// Add beautiful loading animation for page transitions
function addPageTransition() {
    const loader = document.createElement('div');
    loader.innerHTML = `
        <div style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        ">
            <div class="loading" style="
                width: 40px;
                height: 40px;
                border-width: 4px;
            "></div>
            <span style="
                color: #6b5b95;
                font-weight: 500;
                font-size: 16px;
            ">Loading Products page...</span>
        </div>
    `;
    
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(255, 247, 247, 0.95) 0%, rgba(240, 244, 255, 0.95) 50%, rgba(247, 240, 255, 0.95) 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';
        setTimeout(() => loader.remove(), 500);
    }, 1000);
}

// Initialize beautiful page transition on load
if (document.readyState === 'loading') {
    addPageTransition();
=======
// Product sales data with real analytics metrics - sorted by revenue (highest to lowest)
const products = [
    { id: 26, name: "Anti-Cellulite Body Gel", size: "150ml", category: "body-care", unitPrice: 1889.4, revenue: 117000000, totalSales: 50364, orders: 988, avgOrderValue: 118716.4, growth: 37.9, icon: "fas fa-fire", topRegion: "West" },
    { id: 25, name: "Body Butter", size: "200g", category: "body-care", unitPrice: 1782.2, revenue: 109000000, totalSales: 50358, orders: 999, avgOrderValue: 109583.6, growth: -32.8, icon: "fas fa-cookie-bite", topRegion: "West" },
    { id: 13, name: "Nourishing Face Mask", size: "100g", category: "masks", unitPrice: 1943, revenue: 78281380, totalSales: 34014, orders: 658, avgOrderValue: 118968.7, growth: -10.4, icon: "fas fa-mask", topRegion: "West" },
    { id: 14, name: "Clay Purifying Face Mask", size: "150g", category: "masks", unitPrice: 1889.4, revenue: 75390397, totalSales: 32484, orders: 643, avgOrderValue: 117247.9, growth: -25, icon: "fas fa-mountain", topRegion: "West" },
    { id: 5, name: "Refreshing Facial Toner", size: "250ml", category: "cleansers", unitPrice: 1855.9, revenue: 70804381, totalSales: 28692, orders: 558, avgOrderValue: 126889.6, growth: 0, icon: "fas fa-spray-can", topRegion: "West" },
    { id: 15, name: "Sheet Masks (Pack of 5)", size: "5 pieces", category: "masks", unitPrice: 1755.4, revenue: 67331623, totalSales: 31242, orders: 616, avgOrderValue: 109304.6, growth: -19.2, icon: "fas fa-layer-group", topRegion: "West" },
    { id: 2, name: "Deep Hydration Face Wash", size: "200ml", category: "cleansers", unitPrice: 1782.2, revenue: 57401098, totalSales: 26304, orders: 527, avgOrderValue: 108920.5, growth: -25.2, icon: "fas fa-tint", topRegion: "West" },
    { id: 4, name: "Micellar Cleansing Water", size: "400ml", category: "cleansers", unitPrice: 1956.4, revenue: 56701537, totalSales: 24072, orders: 481, avgOrderValue: 117882.6, growth: 23.3, icon: "fas fa-droplet", topRegion: "West" },
    { id: 1, name: "Gentle Foaming Face Cleanser", size: "150ml", category: "cleansers", unitPrice: 1882.7, revenue: 55952290, totalSales: 24138, orders: 484, avgOrderValue: 115603.9, growth: 50.9, icon: "fas fa-soap", topRegion: "West" },
    { id: 3, name: "Exfoliating Facial Scrub", size: "100g", category: "cleansers", unitPrice: 1802.3, revenue: 51764816, totalSales: 23748, orders: 467, avgOrderValue: 110845.4, growth: 3.3, icon: "fas fa-circle-notch", topRegion: "West" },
    { id: 18, name: "Lip Balm", size: "15g", category: "moisturizers", unitPrice: 1983.2, revenue: 46228955, totalSales: 17754, orders: 347, avgOrderValue: 133224.7, growth: 21.6, icon: "fas fa-kiss", topRegion: "South" },
    { id: 17, name: "Under-Eye Gel Patches (Pack of 10)", size: "10 pairs", category: "masks", unitPrice: 1762.1, revenue: 40594442, totalSales: 17682, orders: 345, avgOrderValue: 117665.1, growth: -18.3, icon: "fas fa-compress", topRegion: "West" },
    { id: 6, name: "Vitamin C Serum", size: "30ml", category: "serums", unitPrice: 1842.5, revenue: 40149147, totalSales: 17892, orders: 353, avgOrderValue: 113737, growth: -10.5, icon: "fas fa-sun", topRegion: "West" },
    { id: 20, name: "Sunscreen Lotion SPF 30", size: "200ml", category: "sun-care", unitPrice: 1953.05, revenue: 39645160, totalSales: 16044, orders: 330, avgOrderValue: 120136.9, growth: 47.6, icon: "fas fa-sun", topRegion: "West" },
    { id: 16, name: "Brightening Eye Cream", size: "20ml", category: "moisturizers", unitPrice: 1956.4, revenue: 37446541, totalSales: 16578, orders: 321, avgOrderValue: 116655.9, growth: -17, icon: "fas fa-eye", topRegion: "West" },
    { id: 19, name: "Lip Scrub", size: "25g", category: "masks", unitPrice: 1822.4, revenue: 34446174, totalSales: 15210, orders: 301, avgOrderValue: 114439.1, growth: -8.8, icon: "fas fa-lips", topRegion: "West" },
    { id: 12, name: "Aloe Vera Gel", size: "200ml", category: "moisturizers", unitPrice: 2324.9, revenue: 24173185, totalSales: 9396, orders: 183, avgOrderValue: 132093.9, growth: -66.4, icon: "fas fa-seedling", topRegion: "West" },
    { id: 11, name: "Oil-Free Day Lotion", size: "100ml", category: "moisturizers", unitPrice: 2278, revenue: 22324427, totalSales: 8832, orders: 171, avgOrderValue: 130552.2, growth: 12.7, icon: "fas fa-leaf", topRegion: "West" },
    { id: 28, name: "Foot Cream", size: "100ml", category: "body-care", unitPrice: 2244.5, revenue: 20823439, totalSales: 8574, orders: 166, avgOrderValue: 125442.4, growth: -31.4, icon: "fas fa-shoe-prints", topRegion: "West" },
    { id: 8, name: "Retinol Anti-Aging Serum", size: "30ml", category: "serums", unitPrice: 1902.8, revenue: 19850680, totalSales: 8394, orders: 167, avgOrderValue: 118866.3, growth: 72, icon: "fas fa-magic", topRegion: "West" },
    { id: 21, name: "Sunscreen Gel SPF 50", size: "100ml", category: "sun-care", unitPrice: 1829.1, revenue: 19246876, totalSales: 8616, orders: 166, avgOrderValue: 115945, growth: -6.3, icon: "fas fa-shield-alt", topRegion: "West" },
    { id: 23, name: "Hand Cream", size: "75ml", category: "body-care", unitPrice: 1768.8, revenue: 18856855, totalSales: 8070, orders: 166, avgOrderValue: 113595.5, growth: 4.4, icon: "fas fa-hand-paper", topRegion: "South" },
    { id: 30, name: "Pore Minimizing Toner", size: "200ml", category: "cleansers", unitPrice: 1802.3, revenue: 18590168, totalSales: 8568, orders: 171, avgOrderValue: 108714.4, growth: 0.4, icon: "fas fa-compress-arrows-alt", topRegion: "West" },
    { id: 27, name: "Whitening Body Cream", size: "200g", category: "body-care", unitPrice: 1869.3, revenue: 18377792, totalSales: 8904, orders: 180, avgOrderValue: 102098.8, growth: -8.1, icon: "fas fa-star", topRegion: "West" },
    { id: 10, name: "Daily Moisturizing Face Cream", size: "100g", category: "moisturizers", unitPrice: 1916.2, revenue: 17660584, totalSales: 7398, orders: 145, avgOrderValue: 121797.1, growth: -0.2, icon: "fas fa-heart", topRegion: "West" },
    { id: 7, name: "Hyaluronic Acid Serum", size: "50ml", category: "serums", unitPrice: 1829.1, revenue: 17058267, totalSales: 8286, orders: 162, avgOrderValue: 105297.9, growth: 6.5, icon: "fas fa-tint", topRegion: "West" },
    { id: 22, name: "After Sun Aloe Lotion", size: "150ml", category: "sun-care", unitPrice: 1139, revenue: 15638202, totalSales: 7878, orders: 157, avgOrderValue: 99606.38, growth: -60.1, icon: "fas fa-leaf", topRegion: "West" },
    { id: 29, name: "Acne Spot Treatment Gel", size: "30ml", category: "masks", unitPrice: 1259.6, revenue: 15311014, totalSales: 8010, orders: 160, avgOrderValue: 95693.84, growth: -29.4, icon: "fas fa-crosshairs", topRegion: "West" },
    { id: 9, name: "Collagen Boost Night Cream", size: "50g", category: "moisturizers", unitPrice: 1239.5, revenue: 14598630, totalSales: 6846, orders: 135, avgOrderValue: 108138, growth: -5.3, icon: "fas fa-moon", topRegion: "South" },
    { id: 24, name: "Body Lotion", size: "250ml", category: "body-care", unitPrice: 1762.1, revenue: 14555053, totalSales: 6798, orders: 137, avgOrderValue: 106241.3, growth: -23.4, icon: "fas fa-pump-soap", topRegion: "West" }
];

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

// Current filter state
let currentFilter = 'all';
let currentSearch = '';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Products loaded:', products.length);
    console.log('First product:', products[0]);
    renderProducts(products);
    setupEventListeners();
    
    // Add beautiful enhancements
    addRippleEffect();
    addScrollAnimations();
    addLoadingStates();
    addTransitions();
});

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update filter and render
            currentFilter = this.getAttribute('data-category');
            filterAndRenderProducts();
        });
    });
    
    // Search input
    searchInput.addEventListener('input', function() {
        currentSearch = this.value.toLowerCase();
        filterAndRenderProducts();
    });
}

// Filter and render products based on current filter and search
function filterAndRenderProducts() {
    let filteredProducts = products;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === currentFilter
        );
    }
    
    // Apply search filter
    if (currentSearch) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(currentSearch) ||
            product.category.toLowerCase().includes(currentSearch) ||
            product.topRegion.toLowerCase().includes(currentSearch)
        );
    }
    
    renderProducts(filteredProducts);
}

// Render products to the grid
function renderProducts(productsToRender) {
    console.log('Rendering products:', productsToRender.length);
    console.log('Products grid element:', productsGrid);
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="growth-badge ${product.growth >= 0 ? 'positive' : 'negative'}">
                <i class="fas fa-arrow-${product.growth >= 0 ? 'up' : 'down'}"></i>
                ${Math.abs(product.growth).toFixed(1)}%
            </div>
            <div class="product-image">
                <i class="${product.icon}"></i>
                <div class="product-category">${getCategoryName(product.category)}</div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <div class="product-size">${product.size} • Unit Price: $${product.unitPrice.toLocaleString()}</div>
                
                <div class="sales-metrics">
                    <div class="metric">
                        <span class="metric-label">Total Revenue</span>
                        <span class="metric-value">$${product.revenue.toLocaleString()}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Units Sold</span>
                        <span class="metric-value">${product.totalSales.toLocaleString()}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Orders</span>
                        <span class="metric-value">${product.orders.toLocaleString()}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Avg Order Value</span>
                        <span class="metric-value">$${product.avgOrderValue}</span>
                    </div>
                </div>
                
                <div class="region-info">
                    <i class="fas fa-globe"></i>
                    <span>Top Region: ${product.topRegion}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Generate star rating HTML
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// Get category display name
function getCategoryName(category) {
    const categoryNames = {
        'cleansers': 'Cleansers',
        'serums': 'Serums',
        'moisturizers': 'Moisturizers',
        'masks': 'Treatments',
        'sun-care': 'Sun Care',
        'body-care': 'Body Care'
    };
    return categoryNames[category] || 'Product';
}

// Product action functions
function viewAnalytics(productId) {
    const product = products.find(p => p.id === productId);
    showNotification(`Opening detailed analytics for ${product.name}`, 'info');
    // Here you would typically open a detailed analytics modal or navigate to a detailed page
}

function exportData(productId) {
    const product = products.find(p => p.id === productId);
    showNotification(`Exporting sales data for ${product.name}`, 'success');
    // Here you would typically trigger a CSV/Excel download
}

// Enhanced notification system with beautiful animations
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const icon = type === 'success' ? '✓' : 'ℹ';
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="
                display: flex;
                align-items: center;
                justify-content: center;
                width: 24px;
                height: 24px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                font-weight: bold;
            ">${icon}</span>
            <span>${message}</span>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, ${type === 'success' ? '#27ae60, #2ecc71' : '#3498db, #9b59b6'});
        color: white;
        padding: 16px 24px;
        border-radius: 15px;
        box-shadow: 0 8px 32px rgba(52, 152, 219, 0.4);
        z-index: 1000;
        font-weight: 500;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.3);
        max-width: 350px;
        animation: slideInRight 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transform: translateX(100%);
    `;
    
    // Add animation styles
    if (!document.querySelector('#notification-animations')) {
        const style = document.createElement('style');
        style.id = 'notification-animations';
        style.textContent = `
            @keyframes slideInRight {
                from { 
                    transform: translateX(100%); 
                    opacity: 0; 
                }
                to { 
                    transform: translateX(0); 
                    opacity: 1; 
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 10);
    
    // Animate out
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.5s ease reverse';
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

function addRippleEffect() {
    const buttons = document.querySelectorAll('.btn, .filter-btn, .control-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add ripple animation keyframes
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe product cards
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
}

function addLoadingStates() {
    // Add loading animation to search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            
            // Add loading indicator
            const loadingIndicator = document.createElement('div');
            loadingIndicator.className = 'loading';
            loadingIndicator.style.cssText = `
                position: absolute;
                right: 15px;
                top: 50%;
                transform: translateY(-50%);
            `;
            
            const searchBox = this.parentElement;
            const existingLoader = searchBox.querySelector('.loading');
            if (existingLoader) existingLoader.remove();
            
            if (this.value.length > 0) {
                searchBox.appendChild(loadingIndicator);
                
                searchTimeout = setTimeout(() => {
                    loadingIndicator.remove();
                }, 500);
            }
        });
    }
}

function addTransitions() {
    // Add smooth transitions to all interactive elements
    const interactiveElements = document.querySelectorAll('button, input, .product-card, .stat-card');
    
    interactiveElements.forEach(element => {
        element.style.transition = 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)';
    });
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.product-card, .stat-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}



// Add beautiful loading animation for page transitions
function addPageTransition() {
    const loader = document.createElement('div');
    loader.innerHTML = `
        <div style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        ">
            <div class="loading" style="
                width: 40px;
                height: 40px;
                border-width: 4px;
            "></div>
            <span style="
                color: #6b5b95;
                font-weight: 500;
                font-size: 16px;
            ">Loading Products page...</span>
        </div>
    `;
    
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, rgba(255, 247, 247, 0.95) 0%, rgba(240, 244, 255, 0.95) 50%, rgba(247, 240, 255, 0.95) 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';
        setTimeout(() => loader.remove(), 500);
    }, 1000);
}

// Initialize beautiful page transition on load
if (document.readyState === 'loading') {
    addPageTransition();
>>>>>>> 3ab6b0b (Add project files)
}