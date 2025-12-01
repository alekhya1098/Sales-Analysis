<<<<<<< HEAD
// Script to add visibility controls to admin dashboard cards
document.addEventListener('DOMContentLoaded', function() {
    const adminDashboard = document.getElementById('admin-dashboard');
    if (!adminDashboard) return;
    
    // Find all revenue-section cards
    const revenueSections = adminDashboard.querySelectorAll('.revenue-section');
    
    revenueSections.forEach((card, index) => {
        addVisibilityControl(card, `revenue-card-${index}`);
    });
    
    // Find all product-section cards (inside products-comparison)
    const productSections = adminDashboard.querySelectorAll('.product-section');
    
    productSections.forEach((card, index) => {
        addVisibilityControl(card, `product-card-${index}`);
    });
    
    // Initialize visibility indicators
    updateVisibilityIndicators();
});

function addVisibilityControl(card, cardId) {
    // Skip if already has data-card-id
    if (card.hasAttribute('data-card-id')) return;
    
    // Set card ID
    card.setAttribute('data-card-id', cardId);
    
    // Find the h1 element
    const h1 = card.querySelector('h1');
    if (!h1) return;
    
    // Get card title
    const cardTitle = h1.textContent.trim();
    
    // Check if card-header-controls already exists
    let headerControls = card.querySelector('.card-header-controls');
    
    if (!headerControls) {
        // Create header controls wrapper
        headerControls = document.createElement('div');
        headerControls.className = 'card-header-controls';
        
        // Move h1 into header controls
        h1.parentNode.insertBefore(headerControls, h1);
        headerControls.appendChild(h1);
        
        // Create visibility button
        const visibilityBtn = document.createElement('button');
        visibilityBtn.className = 'visibility-btn';
        visibilityBtn.innerHTML = '<i class="fas fa-eye"></i> Manage';
        visibilityBtn.onclick = function() {
            openVisibilityModal(cardId, cardTitle);
        };
        
        headerControls.appendChild(visibilityBtn);
    }
}
=======
// Script to add visibility controls to admin dashboard cards
document.addEventListener('DOMContentLoaded', function() {
    const adminDashboard = document.getElementById('admin-dashboard');
    if (!adminDashboard) return;
    
    // Find all revenue-section cards
    const revenueSections = adminDashboard.querySelectorAll('.revenue-section');
    
    revenueSections.forEach((card, index) => {
        addVisibilityControl(card, `revenue-card-${index}`);
    });
    
    // Find all product-section cards (inside products-comparison)
    const productSections = adminDashboard.querySelectorAll('.product-section');
    
    productSections.forEach((card, index) => {
        addVisibilityControl(card, `product-card-${index}`);
    });
    
    // Initialize visibility indicators
    updateVisibilityIndicators();
});

function addVisibilityControl(card, cardId) {
    // Skip if already has data-card-id
    if (card.hasAttribute('data-card-id')) return;
    
    // Set card ID
    card.setAttribute('data-card-id', cardId);
    
    // Find the h1 element
    const h1 = card.querySelector('h1');
    if (!h1) return;
    
    // Get card title
    const cardTitle = h1.textContent.trim();
    
    // Check if card-header-controls already exists
    let headerControls = card.querySelector('.card-header-controls');
    
    if (!headerControls) {
        // Create header controls wrapper
        headerControls = document.createElement('div');
        headerControls.className = 'card-header-controls';
        
        // Move h1 into header controls
        h1.parentNode.insertBefore(headerControls, h1);
        headerControls.appendChild(h1);
        
        // Create visibility button
        const visibilityBtn = document.createElement('button');
        visibilityBtn.className = 'visibility-btn';
        visibilityBtn.innerHTML = '<i class="fas fa-eye"></i> Manage';
        visibilityBtn.onclick = function() {
            openVisibilityModal(cardId, cardTitle);
        };
        
        headerControls.appendChild(visibilityBtn);
    }
}
>>>>>>> 3ab6b0b (Add project files)
