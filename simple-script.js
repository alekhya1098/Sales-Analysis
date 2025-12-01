<<<<<<< HEAD
// Simple script for testing
console.log('Simple script loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    console.log('Chart.js available:', typeof Chart !== 'undefined');
    
    const roleButtons = document.querySelectorAll('.role-btn');
    const dashboards = document.querySelectorAll('.dashboard');
    
    console.log('Role buttons:', roleButtons.length);
    console.log('Dashboards:', dashboards.length);
    
    // Role switching
    roleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const role = this.getAttribute('data-role');
            console.log('Clicked role:', role);
            
            // Update active button
            roleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding dashboard
            dashboards.forEach(dashboard => dashboard.classList.remove('active'));
            const targetDashboard = document.getElementById(role + '-dashboard');
            if (targetDashboard) {
                targetDashboard.classList.add('active');
                console.log('Showing dashboard:', role);
                
                // Create simple chart for admin
                if (role === 'admin') {
                    createSimpleChart();
                }
            }
        });
    });
    
    // Initialize admin chart
    setTimeout(() => {
        createSimpleChart();
    }, 500);
});

function createSimpleChart() {
    console.log('Creating simple chart...');
    
    const canvas = document.getElementById('adminRevenueChart');
    console.log('Canvas found:', !!canvas);
    
    if (canvas && typeof Chart !== 'undefined') {
        try {
            new Chart(canvas.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Revenue',
                        data: [420, 380, 450, 520, 480, 560],
                        backgroundColor: '#e74c3c'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
            console.log('Simple chart created!');
        } catch (error) {
            console.error('Chart error:', error);
        }
    } else {
        console.error('Canvas not found or Chart.js not available');
    }
=======
// Simple script for testing
console.log('Simple script loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    console.log('Chart.js available:', typeof Chart !== 'undefined');
    
    const roleButtons = document.querySelectorAll('.role-btn');
    const dashboards = document.querySelectorAll('.dashboard');
    
    console.log('Role buttons:', roleButtons.length);
    console.log('Dashboards:', dashboards.length);
    
    // Role switching
    roleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const role = this.getAttribute('data-role');
            console.log('Clicked role:', role);
            
            // Update active button
            roleButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding dashboard
            dashboards.forEach(dashboard => dashboard.classList.remove('active'));
            const targetDashboard = document.getElementById(role + '-dashboard');
            if (targetDashboard) {
                targetDashboard.classList.add('active');
                console.log('Showing dashboard:', role);
                
                // Create simple chart for admin
                if (role === 'admin') {
                    createSimpleChart();
                }
            }
        });
    });
    
    // Initialize admin chart
    setTimeout(() => {
        createSimpleChart();
    }, 500);
});

function createSimpleChart() {
    console.log('Creating simple chart...');
    
    const canvas = document.getElementById('adminRevenueChart');
    console.log('Canvas found:', !!canvas);
    
    if (canvas && typeof Chart !== 'undefined') {
        try {
            new Chart(canvas.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Revenue',
                        data: [420, 380, 450, 520, 480, 560],
                        backgroundColor: '#e74c3c'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
            console.log('Simple chart created!');
        } catch (error) {
            console.error('Chart error:', error);
        }
    } else {
        console.error('Canvas not found or Chart.js not available');
    }
>>>>>>> 3ab6b0b (Add project files)
}