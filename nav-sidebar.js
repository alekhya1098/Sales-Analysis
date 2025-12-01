<<<<<<< HEAD
// Navigation Sidebar Script for Role Pages

// Populate user info
document.addEventListener('DOMContentLoaded', function() {
    const username = sessionStorage.getItem('username') || 'User';
    const role = sessionStorage.getItem('role') || '';
    
    const navUsername = document.getElementById('navUsername');
    const navUserRole = document.getElementById('navUserRole');
    
    if (navUsername) {
        navUsername.textContent = username.charAt(0).toUpperCase() + username.slice(1);
    }
    
    if (navUserRole) {
        const roleNames = {
            'admin': 'Administrator',
            'executive-viewer': 'Executive Viewer',
            'sales-manager': 'Sales Manager',
            'sales-analyst': 'Sales Analyst',
            'sales-executive': 'Sales Executive'
        };
        navUserRole.textContent = roleNames[role] || role.replace('-', ' ');
    }
});

// Navigation toggle
function toggleNav() {
    const sidebar = document.querySelector('.right-nav-sidebar');
    const overlay = document.querySelector('.nav-overlay');
    const body = document.body;
    
    if (sidebar) sidebar.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
    body.classList.toggle('nav-open');
}

// Logout
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        sessionStorage.clear();
        window.location.href = 'login.html';
    }
}

// Close on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const sidebar = document.querySelector('.right-nav-sidebar');
        if (sidebar && sidebar.classList.contains('active')) {
            toggleNav();
        }
    }
});
=======
// Navigation Sidebar Script for Role Pages

// Populate user info
document.addEventListener('DOMContentLoaded', function() {
    const username = sessionStorage.getItem('username') || 'User';
    const role = sessionStorage.getItem('role') || '';
    
    const navUsername = document.getElementById('navUsername');
    const navUserRole = document.getElementById('navUserRole');
    
    if (navUsername) {
        navUsername.textContent = username.charAt(0).toUpperCase() + username.slice(1);
    }
    
    if (navUserRole) {
        const roleNames = {
            'admin': 'Administrator',
            'executive-viewer': 'Executive Viewer',
            'sales-manager': 'Sales Manager',
            'sales-analyst': 'Sales Analyst',
            'sales-executive': 'Sales Executive'
        };
        navUserRole.textContent = roleNames[role] || role.replace('-', ' ');
    }
});

// Navigation toggle
function toggleNav() {
    const sidebar = document.querySelector('.right-nav-sidebar');
    const overlay = document.querySelector('.nav-overlay');
    const body = document.body;
    
    if (sidebar) sidebar.classList.toggle('active');
    if (overlay) overlay.classList.toggle('active');
    body.classList.toggle('nav-open');
}

// Logout
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        sessionStorage.clear();
        window.location.href = 'login.html';
    }
}

// Close on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const sidebar = document.querySelector('.right-nav-sidebar');
        if (sidebar && sidebar.classList.contains('active')) {
            toggleNav();
        }
    }
});
>>>>>>> 3ab6b0b (Add project files)
