<<<<<<< HEAD
# Sales Analysis Dashboard - Login Credentials

## Access the System
Open `login.html` in your browser to access the login page.

## User Credentials

### 1. Admin
- **Username:** `admin`
- **Password:** `admin123`
- **Access:** Full admin dashboard with all controls and visibility management
- **Redirects to:** index.html

### 2. Executive Viewer
- **Username:** `viewer`
- **Password:** `viewer123`
- **Access:** Executive-level analytics and high-level metrics
- **Redirects to:** executive-viewer.html

### 3. Sales Manager
- **Username:** `manager`
- **Password:** `manager123`
- **Access:** Team performance and sales management analytics
- **Redirects to:** sales-manager.html

### 4. Sales Analyst
- **Username:** `analyst`
- **Password:** `analyst123`
- **Access:** Detailed analytics, metrics, and data analysis tools
- **Redirects to:** sales-analyst.html

### 5. Sales Executive
- **Username:** `executive`
- **Password:** `sales123`
- **Access:** Individual sales performance and personal metrics
- **Redirects to:** customers.html

## Features

- **Role-based Authentication:** Each user is redirected to their specific dashboard
- **Session Management:** Login state is maintained using sessionStorage
- **Auto-redirect:** If already logged in, users are automatically redirected to their dashboard
- **Logout Functionality:** Logout button appears in the header of all dashboard pages
- **Password Toggle:** Click the eye icon to show/hide password
- **Error Handling:** Invalid credentials show an error message

## Security Notes

⚠️ **Important:** These are demo credentials for development/testing purposes only. 
In a production environment, you should:
- Use a proper backend authentication system
- Hash passwords securely
- Implement HTTPS
- Add CSRF protection
- Use JWT or session tokens
- Implement rate limiting
- Add two-factor authentication

## How to Use

1. Open `login.html`
2. Select your role from the dropdown
3. Enter the username and password
4. Click "Login"
5. You'll be redirected to your role-specific dashboard
6. Click "Logout" button in the header to sign out

## Customization

To add more users or change credentials, edit the `users` object in `login.html`:

```javascript
const users = {
    'username': { 
        password: 'password123', 
        role: 'role-name', 
        redirect: 'dashboard-page.html' 
    }
};
```
=======
# Sales Analysis Dashboard - Login Credentials

## Access the System
Open `login.html` in your browser to access the login page.

## User Credentials

### 1. Admin
- **Username:** `admin`
- **Password:** `admin123`
- **Access:** Full admin dashboard with all controls and visibility management
- **Redirects to:** index.html

### 2. Executive Viewer
- **Username:** `viewer`
- **Password:** `viewer123`
- **Access:** Executive-level analytics and high-level metrics
- **Redirects to:** executive-viewer.html

### 3. Sales Manager
- **Username:** `manager`
- **Password:** `manager123`
- **Access:** Team performance and sales management analytics
- **Redirects to:** sales-manager.html

### 4. Sales Analyst
- **Username:** `analyst`
- **Password:** `analyst123`
- **Access:** Detailed analytics, metrics, and data analysis tools
- **Redirects to:** sales-analyst.html

### 5. Sales Executive
- **Username:** `executive`
- **Password:** `sales123`
- **Access:** Individual sales performance and personal metrics
- **Redirects to:** customers.html

## Features

- **Role-based Authentication:** Each user is redirected to their specific dashboard
- **Session Management:** Login state is maintained using sessionStorage
- **Auto-redirect:** If already logged in, users are automatically redirected to their dashboard
- **Logout Functionality:** Logout button appears in the header of all dashboard pages
- **Password Toggle:** Click the eye icon to show/hide password
- **Error Handling:** Invalid credentials show an error message

## Security Notes

⚠️ **Important:** These are demo credentials for development/testing purposes only. 
In a production environment, you should:
- Use a proper backend authentication system
- Hash passwords securely
- Implement HTTPS
- Add CSRF protection
- Use JWT or session tokens
- Implement rate limiting
- Add two-factor authentication

## How to Use

1. Open `login.html`
2. Select your role from the dropdown
3. Enter the username and password
4. Click "Login"
5. You'll be redirected to your role-specific dashboard
6. Click "Logout" button in the header to sign out

## Customization

To add more users or change credentials, edit the `users` object in `login.html`:

```javascript
const users = {
    'username': { 
        password: 'password123', 
        role: 'role-name', 
        redirect: 'dashboard-page.html' 
    }
};
```
>>>>>>> 3ab6b0b (Add project files)
