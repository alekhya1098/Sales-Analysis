<<<<<<< HEAD
// Authentication check script
(function() {
    // Check if user is logged in
    const loggedIn = sessionStorage.getItem('loggedIn');
    const username = sessionStorage.getItem('username');
    const role = sessionStorage.getItem('role');
    
    // If not logged in, redirect to login page
    if (loggedIn !== 'true' || !username || !role) {
        window.location.href = 'login.html';
        return;
    }

    // Redirect to login page when back button is clicked
    window.history.pushState(null, null, window.location.href);
    window.addEventListener('popstate', function(event) {
        // Clear session and redirect to login
        sessionStorage.clear();
        window.location.replace('login.html');
    });
    
    // Check if user is accessing the correct page for their role
    const currentPage = window.location.pathname.split('/').pop();
    const rolePages = {
        'admin': ['index.html', 'products.html', 'us_revenue_map.html'],
        'executive-viewer': ['executive-viewer.html'],
        'sales-manager': ['sales-manager.html'],
        'sales-analyst': ['sales-analyst.html'],
        'sales-executive': ['customers.html']
    };
    
    // If user tries to access admin page but is not admin, redirect to their dashboard
    if (currentPage === 'index.html' && role !== 'admin') {
        const userPages = {
            'executive-viewer': 'executive-viewer.html',
            'sales-manager': 'sales-manager.html',
            'sales-analyst': 'sales-analyst.html',
            'sales-executive': 'customers.html'
        };
        window.location.replace(userPages[role] || 'login.html');
        return;
    }
    
    // Add logout functionality
    function addLogoutButton() {
        // Check if account menu already exists
        if (document.querySelector('.account-menu')) return;
        
        // Don't add account button - all pages now have navigation sidebar
        return;
        
        // Create account menu container (independent of header)
        const accountMenu = document.createElement('div');
        accountMenu.className = 'account-menu';
        accountMenu.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
        `;
        
        accountMenu.innerHTML = `
            <div class="account-icon" style="
                width: 50px;
                height: 50px;
                background: white;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                transition: all 0.3s ease;
            ">
                <i class="fas fa-user-circle" style="font-size: 2rem; color: #667eea;"></i>
            </div>
            <div class="account-dropdown" style="
                position: absolute;
                top: 60px;
                right: 0;
                background: white;
                border-radius: 15px;
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
                min-width: 220px;
                opacity: 0;
                visibility: hidden;
                transform: translateY(-10px);
                transition: all 0.3s ease;
            ">
                <div style="padding: 20px; border-bottom: 2px solid #f0f0f0;">
                    <div style="text-align: center;">
                        <div style="font-weight: 700; color: #2c3e50; font-size: 1.2rem; margin-bottom: 5px;">${username}</div>
                        <div style="font-size: 0.9rem; color: #7f8c8d; text-transform: capitalize;">${role.replace('-', ' ')}</div>
                    </div>
                </div>
                <div style="padding: 10px;">
                    <button class="logout-btn" style="
                        width: 100%;
                        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
                        color: white;
                        border: none;
                        padding: 12px 20px;
                        border-radius: 10px;
                        cursor: pointer;
                        font-weight: 600;
                        transition: all 0.3s ease;
                        font-size: 1rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                    ">
                        <i class="fas fa-sign-out-alt"></i> Logout
                    </button>
                </div>
            </div>
        `;
        
        // Append directly to body instead of header
        document.body.appendChild(accountMenu);
        
        // Toggle dropdown on icon click
        const accountIcon = accountMenu.querySelector('.account-icon');
        const dropdown = accountMenu.querySelector('.account-dropdown');
        
        accountIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            const isVisible = dropdown.style.visibility === 'visible';
            
            if (isVisible) {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                dropdown.style.transform = 'translateY(-10px)';
            } else {
                dropdown.style.opacity = '1';
                dropdown.style.visibility = 'visible';
                dropdown.style.transform = 'translateY(0)';
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!accountMenu.contains(e.target)) {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                dropdown.style.transform = 'translateY(-10px)';
            }
        });
        
        // Add hover effect to account icon
        accountIcon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
        });
        
        accountIcon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        });
        
        // Add hover effect to logout button
        const logoutBtn = accountMenu.querySelector('.logout-btn');
        logoutBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(231, 76, 60, 0.5)';
        });
        
        logoutBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
        
        // Add logout functionality
        logoutBtn.addEventListener('click', function() {
            sessionStorage.clear();
            window.location.href = 'login.html';
        });
    }
    
    // Add logout button when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addLogoutButton);
    } else {
        addLogoutButton();
    }
})();

=======
// Authentication check script
(function() {
    // Check if user is logged in
    const loggedIn = sessionStorage.getItem('loggedIn');
    const username = sessionStorage.getItem('username');
    const role = sessionStorage.getItem('role');
    
    // If not logged in, redirect to login page
    if (loggedIn !== 'true' || !username || !role) {
        window.location.replace('login.html');
        return;
    }
    
    // Check if non-admin user is trying to access admin page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if ((currentPage === 'index.html' || currentPage === '') && role !== 'admin') {
        // Redirect non-admin users to their dashboard
        const userDashboards = {
            'executive-viewer': 'executive-viewer.html',
            'sales-manager': 'sales-manager.html',
            'sales-analyst': 'sales-analyst.html',
            'sales-executive': 'customers.html'
        };
        window.location.replace(userDashboards[role] || 'login.html');
        return;
    }
    
    // Redirect to login page when back button is clicked
    window.history.pushState(null, null, window.location.href);
    window.addEventListener('popstate', function(event) {
        // Clear session and redirect to login
        sessionStorage.clear();
        window.location.replace('login.html');
    });
    
    // Add logout functionality (disabled - using navigation sidebar)
    function addLogoutButton() {
        // Account button disabled - all pages use navigation sidebar
        return;
    }
    
    // Add logout button when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addLogoutButton);
    } else {
        addLogoutButton();
    }
})();
>>>>>>> 3ab6b0b (Add project files)
