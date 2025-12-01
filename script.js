<<<<<<< HEAD
// Store chart instances
let chartInstances = {};

// Role switching functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, Chart.js available:', typeof Chart !== 'undefined');
    console.log('Role buttons found:', document.querySelectorAll('.role-btn').length);
    console.log('Dashboards found:', document.querySelectorAll('.dashboard').length);
    
    // Test if elements exist
    if (document.querySelectorAll('.role-btn').length === 0) {
        console.error('No role buttons found!');
        return;
    }
    
    if (document.querySelectorAll('.dashboard').length === 0) {
        console.error('No dashboards found!');
        return;
    }
    
    const roleButtons = document.querySelectorAll('.role-btn');
    const dashboards = document.querySelectorAll('.dashboard');
    
    roleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const role = this.getAttribute('data-role');
            
            // Update active button
            roleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding dashboard
            dashboards.forEach(dashboard => dashboard.classList.remove('active'));
            const targetDashboard = document.getElementById(`${role}-dashboard`);
            targetDashboard.classList.add('active');
            
            // Filter cards based on visibility settings
            if (role !== 'admin') {
                filterCardsForRole(targetDashboard, role);
            }
            
            // Initialize charts for the active dashboard with delay
            setTimeout(() => {
                initializeCharts(role);
            }, 100);
        });
    });
    
    // Test Chart.js functionality
    if (typeof Chart === 'undefined') {
        console.error('Chart.js is not loaded!');
        return;
    }
    
    // Initialize charts for the default dashboard (admin)
    setTimeout(() => {
        console.log('Initializing admin dashboard...');
        initializeCharts('admin');
        
        // Pre-populate other dashboards with cards based on visibility
        populateRoleDashboards();
    }, 1000);
});

function populateRoleDashboards() {
    const visibilitySettings = JSON.parse(localStorage.getItem('cardVisibility')) || {};
    const cardData = JSON.parse(localStorage.getItem('cardData')) || {};
    
    console.log('Populating role dashboards...');
    
    const roles = ['executive-viewer', 'sales-manager', 'sales-analyst', 'sales-executive'];
    
    roles.forEach(role => {
        const dashboard = document.getElementById(`${role}-dashboard`);
        if (!dashboard) return;
        
        // Find where to insert cards (after stats-grid)
        const statsGrid = dashboard.querySelector('.stats-grid');
        
        // Remove any existing dynamic cards
        const existingCards = dashboard.querySelectorAll('[data-card-id]');
        existingCards.forEach(card => card.remove());
        
        // Add cards that are visible to this role
        Object.keys(cardData).forEach(cardId => {
            const settings = visibilitySettings[cardId] || [];
            
            if (settings.includes(role)) {
                const card = cardData[cardId];
                const cardElement = document.createElement('div');
                cardElement.className = card.className;
                cardElement.setAttribute('data-card-id', cardId);
                cardElement.innerHTML = card.html;
                
                // Remove visibility controls
                const visibilityBtn = cardElement.querySelector('.visibility-btn');
                if (visibilityBtn) {
                    visibilityBtn.remove();
                }
                
                const headerControls = cardElement.querySelector('.card-header-controls');
                if (headerControls && headerControls.children.length === 1) {
                    const h1 = headerControls.querySelector('h1');
                    if (h1) {
                        headerControls.parentNode.insertBefore(h1, headerControls);
                        headerControls.remove();
                    }
                }
                
                const indicator = cardElement.querySelector('.visibility-indicator');
                if (indicator) {
                    indicator.remove();
                }
                
                dashboard.appendChild(cardElement);
                console.log(`Added card ${cardId} to ${role} dashboard`);
            }
        });
    });
});

function filterCardsForRole(dashboard, role) {
    const visibilitySettings = JSON.parse(localStorage.getItem('cardVisibility')) || {};
    const cardData = JSON.parse(localStorage.getItem('cardData')) || {};
    
    console.log('Filtering cards for role:', role);
    console.log('Visibility settings:', visibilitySettings);
    
    // Get all cards in the dashboard
    const allCards = dashboard.querySelectorAll('[data-card-id]');
    
    allCards.forEach(card => {
        const cardId = card.getAttribute('data-card-id');
        const settings = visibilitySettings[cardId] || [];
        
        // Show or hide card based on visibility settings
        if (settings.includes(role)) {
            card.style.display = '';
            console.log(`Showing card ${cardId} for role ${role}`);
        } else {
            card.style.display = 'none';
            console.log(`Hiding card ${cardId} for role ${role}`);
        }
    });
    
    // If no cards from admin, try to load from cardData
    if (allCards.length === 0) {
        console.log('No cards found in dashboard, loading from cardData...');
        loadCardsFromData(dashboard, role, cardData, visibilitySettings);
    }
}

function loadCardsFromData(dashboard, role, cardData, visibilitySettings) {
    // Clear existing content except stats-grid
    const statsGrid = dashboard.querySelector('.stats-grid');
    dashboard.innerHTML = '';
    if (statsGrid) {
        dashboard.appendChild(statsGrid);
    }
    
    // Load cards that are visible to this role
    Object.keys(cardData).forEach(cardId => {
        const settings = visibilitySettings[cardId] || [];
        
        if (settings.includes(role)) {
            const card = cardData[cardId];
            const cardElement = document.createElement('div');
            cardElement.className = card.className;
            cardElement.setAttribute('data-card-id', cardId);
            cardElement.innerHTML = card.html;
            
            // Remove visibility controls
            const visibilityBtn = cardElement.querySelector('.visibility-btn');
            if (visibilityBtn) {
                visibilityBtn.remove();
            }
            
            const headerControls = cardElement.querySelector('.card-header-controls');
            if (headerControls && headerControls.children.length === 1) {
                const h1 = headerControls.querySelector('h1');
                if (h1) {
                    headerControls.parentNode.insertBefore(h1, headerControls);
                    headerControls.remove();
                }
            }
            
            const indicator = cardElement.querySelector('.visibility-indicator');
            if (indicator) {
                indicator.remove();
            }
            
            dashboard.appendChild(cardElement);
        }
    });
}

function initializeCharts(role) {
    console.log('Initializing charts for role:', role);
    
    // Destroy existing charts properly
    Object.keys(chartInstances).forEach(key => {
        if (chartInstances[key]) {
            chartInstances[key].destroy();
            delete chartInstances[key];
        }
    });
    
    // Clear any remaining chart instances
    if (window.Chart && Chart.instances) {
        Chart.instances.forEach(instance => {
            if (instance) {
                instance.destroy();
            }
        });
    }
    
    switch(role) {
        case 'admin':
            createAdminCharts();
            break;
        case 'executive-viewer':
            createExecutiveViewerCharts();
            break;
        case 'sales-manager':
            createSalesManagerCharts();
            break;
        case 'sales-analyst':
            createSalesAnalystCharts();
            break;
        case 'sales-executive':
            createSalesExecutiveCharts();
            break;
    }
}

// Admin Dashboard Charts
function createAdminCharts() {
    console.log('Creating Admin charts...');
    
}

// Executive Viewer Dashboard Charts
function createExecutiveViewerCharts() {
}

// Sales Manager Dashboard Charts
function createSalesManagerCharts() {
}

// Sales Analyst Dashboard Charts
function createSalesAnalystCharts() {
}

// Sales Executive Dashboard Charts
function createSalesExecutiveCharts() {
}

// Add some interactivity to control buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('control-btn')) {
        const action = e.target.textContent;
        showNotification(`${action} initiated successfully!`);
    }
});

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #2ecc71;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 1000;
        font-weight: 500;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
=======
// Store chart instances
let chartInstances = {};

// Role switching functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, Chart.js available:', typeof Chart !== 'undefined');
    console.log('Role buttons found:', document.querySelectorAll('.role-btn').length);
    console.log('Dashboards found:', document.querySelectorAll('.dashboard').length);
    
    // Test if elements exist
    if (document.querySelectorAll('.role-btn').length === 0) {
        console.error('No role buttons found!');
        return;
    }
    
    if (document.querySelectorAll('.dashboard').length === 0) {
        console.error('No dashboards found!');
        return;
    }
    
    const roleButtons = document.querySelectorAll('.role-btn');
    const dashboards = document.querySelectorAll('.dashboard');
    
    roleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const role = this.getAttribute('data-role');
            
            // Update active button
            roleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding dashboard
            dashboards.forEach(dashboard => dashboard.classList.remove('active'));
            const targetDashboard = document.getElementById(`${role}-dashboard`);
            targetDashboard.classList.add('active');
            
            // Filter cards based on visibility settings
            if (role !== 'admin') {
                filterCardsForRole(targetDashboard, role);
            }
            
            // Initialize charts for the active dashboard with delay
            setTimeout(() => {
                initializeCharts(role);
            }, 100);
        });
    });
    
    // Test Chart.js functionality
    if (typeof Chart === 'undefined') {
        console.error('Chart.js is not loaded!');
        return;
    }
    
    // Initialize charts for the default dashboard (admin)
    setTimeout(() => {
        console.log('Initializing admin dashboard...');
        initializeCharts('admin');
        
        // Pre-populate other dashboards with cards based on visibility
        populateRoleDashboards();
    }, 1000);
});

function populateRoleDashboards() {
    const visibilitySettings = JSON.parse(localStorage.getItem('cardVisibility')) || {};
    const cardData = JSON.parse(localStorage.getItem('cardData')) || {};
    
    console.log('Populating role dashboards...');
    
    const roles = ['executive-viewer', 'sales-manager', 'sales-analyst', 'sales-executive'];
    
    roles.forEach(role => {
        const dashboard = document.getElementById(`${role}-dashboard`);
        if (!dashboard) return;
        
        // Find where to insert cards (after stats-grid)
        const statsGrid = dashboard.querySelector('.stats-grid');
        
        // Remove any existing dynamic cards
        const existingCards = dashboard.querySelectorAll('[data-card-id]');
        existingCards.forEach(card => card.remove());
        
        // Add cards that are visible to this role
        Object.keys(cardData).forEach(cardId => {
            const settings = visibilitySettings[cardId] || [];
            
            if (settings.includes(role)) {
                const card = cardData[cardId];
                const cardElement = document.createElement('div');
                cardElement.className = card.className;
                cardElement.setAttribute('data-card-id', cardId);
                cardElement.innerHTML = card.html;
                
                // Remove visibility controls
                const visibilityBtn = cardElement.querySelector('.visibility-btn');
                if (visibilityBtn) {
                    visibilityBtn.remove();
                }
                
                const headerControls = cardElement.querySelector('.card-header-controls');
                if (headerControls && headerControls.children.length === 1) {
                    const h1 = headerControls.querySelector('h1');
                    if (h1) {
                        headerControls.parentNode.insertBefore(h1, headerControls);
                        headerControls.remove();
                    }
                }
                
                const indicator = cardElement.querySelector('.visibility-indicator');
                if (indicator) {
                    indicator.remove();
                }
                
                dashboard.appendChild(cardElement);
                console.log(`Added card ${cardId} to ${role} dashboard`);
            }
        });
    });
});

function filterCardsForRole(dashboard, role) {
    const visibilitySettings = JSON.parse(localStorage.getItem('cardVisibility')) || {};
    const cardData = JSON.parse(localStorage.getItem('cardData')) || {};
    
    console.log('Filtering cards for role:', role);
    console.log('Visibility settings:', visibilitySettings);
    
    // Get all cards in the dashboard
    const allCards = dashboard.querySelectorAll('[data-card-id]');
    
    allCards.forEach(card => {
        const cardId = card.getAttribute('data-card-id');
        const settings = visibilitySettings[cardId] || [];
        
        // Show or hide card based on visibility settings
        if (settings.includes(role)) {
            card.style.display = '';
            console.log(`Showing card ${cardId} for role ${role}`);
        } else {
            card.style.display = 'none';
            console.log(`Hiding card ${cardId} for role ${role}`);
        }
    });
    
    // If no cards from admin, try to load from cardData
    if (allCards.length === 0) {
        console.log('No cards found in dashboard, loading from cardData...');
        loadCardsFromData(dashboard, role, cardData, visibilitySettings);
    }
}

function loadCardsFromData(dashboard, role, cardData, visibilitySettings) {
    // Clear existing content except stats-grid
    const statsGrid = dashboard.querySelector('.stats-grid');
    dashboard.innerHTML = '';
    if (statsGrid) {
        dashboard.appendChild(statsGrid);
    }
    
    // Load cards that are visible to this role
    Object.keys(cardData).forEach(cardId => {
        const settings = visibilitySettings[cardId] || [];
        
        if (settings.includes(role)) {
            const card = cardData[cardId];
            const cardElement = document.createElement('div');
            cardElement.className = card.className;
            cardElement.setAttribute('data-card-id', cardId);
            cardElement.innerHTML = card.html;
            
            // Remove visibility controls
            const visibilityBtn = cardElement.querySelector('.visibility-btn');
            if (visibilityBtn) {
                visibilityBtn.remove();
            }
            
            const headerControls = cardElement.querySelector('.card-header-controls');
            if (headerControls && headerControls.children.length === 1) {
                const h1 = headerControls.querySelector('h1');
                if (h1) {
                    headerControls.parentNode.insertBefore(h1, headerControls);
                    headerControls.remove();
                }
            }
            
            const indicator = cardElement.querySelector('.visibility-indicator');
            if (indicator) {
                indicator.remove();
            }
            
            dashboard.appendChild(cardElement);
        }
    });
}

function initializeCharts(role) {
    console.log('Initializing charts for role:', role);
    
    // Destroy existing charts properly
    Object.keys(chartInstances).forEach(key => {
        if (chartInstances[key]) {
            chartInstances[key].destroy();
            delete chartInstances[key];
        }
    });
    
    // Clear any remaining chart instances
    if (window.Chart && Chart.instances) {
        Chart.instances.forEach(instance => {
            if (instance) {
                instance.destroy();
            }
        });
    }
    
    switch(role) {
        case 'admin':
            createAdminCharts();
            break;
        case 'executive-viewer':
            createExecutiveViewerCharts();
            break;
        case 'sales-manager':
            createSalesManagerCharts();
            break;
        case 'sales-analyst':
            createSalesAnalystCharts();
            break;
        case 'sales-executive':
            createSalesExecutiveCharts();
            break;
    }
}

// Admin Dashboard Charts
function createAdminCharts() {
    console.log('Creating Admin charts...');
    
}

// Executive Viewer Dashboard Charts
function createExecutiveViewerCharts() {
}

// Sales Manager Dashboard Charts
function createSalesManagerCharts() {
}

// Sales Analyst Dashboard Charts
function createSalesAnalystCharts() {
}

// Sales Executive Dashboard Charts
function createSalesExecutiveCharts() {
}

// Add some interactivity to control buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('control-btn')) {
        const action = e.target.textContent;
        showNotification(`${action} initiated successfully!`);
    }
});

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #2ecc71;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 1000;
        font-weight: 500;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
>>>>>>> 3ab6b0b (Add project files)
}