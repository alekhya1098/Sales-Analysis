<<<<<<< HEAD
# 🚀 How to Run the Sales Analysis Dashboard

## Quick Start

### Option 1: Open Directly in Browser (Simplest)
1. Navigate to your project folder
2. Double-click on `login.html`
3. Your default browser will open the login page
4. Use the credentials from `LOGIN_CREDENTIALS.md` to login

### Option 2: Using Live Server (Recommended for Development)

#### If you're using VS Code:
1. Install the "Live Server" extension by Ritwick Dey
2. Right-click on `login.html`
3. Select "Open with Live Server"
4. Your browser will open at `http://127.0.0.1:5500/login.html`

#### If you're using another editor:
1. Install a local web server (see options below)
2. Start the server in your project directory
3. Navigate to `http://localhost:PORT/login.html`

### Option 3: Using Python (If you have Python installed)

#### Python 3:
```bash
# Navigate to your project folder
cd "C:\Users\dawatalekhya\Desktop\Sales Analysis"

# Start a simple HTTP server
python -m http.server 8000

# Open your browser and go to:
# http://localhost:8000/login.html
```

#### Python 2:
```bash
python -m SimpleHTTPServer 8000
```

### Option 4: Using Node.js (If you have Node.js installed)

```bash
# Install http-server globally (one time only)
npm install -g http-server

# Navigate to your project folder
cd "C:\Users\dawatalekhya\Desktop\Sales Analysis"

# Start the server
http-server -p 8000

# Open your browser and go to:
# http://localhost:8000/login.html
```

## 📋 Login Credentials

After opening the login page, use these credentials:

| Role | Username | Password |
|------|----------|----------|
| **Admin** | `admin` | `admin123` |
| **Executive Viewer** | `viewer` | `viewer123` |
| **Sales Manager** | `manager` | `manager123` |
| **Sales Analyst** | `analyst` | `analyst123` |
| **Sales Executive** | `executive` | `sales123` |

## 🎯 What Each Role Can Access

### Admin
- Full admin dashboard with all analytics
- Visibility management (can control what other roles see)
- Product Analytics page
- All navigation links

### Executive Viewer
- Executive-level dashboard (executive-viewer.html)
- High-level metrics and KPIs
- Cards shared by admin

### Sales Manager
- Sales management dashboard (sales-manager.html)
- Team performance metrics
- Cards shared by admin

### Sales Analyst
- Analytics dashboard (sales-analyst.html)
- Detailed metrics and analysis
- Cards shared by admin

### Sales Executive
- Individual sales dashboard (customers.html)
- Personal performance metrics
- Cards shared by admin

## 🔧 Troubleshooting

### Issue: "Access Denied" when trying to access a page
**Solution:** Make sure you're logged in with the correct role. Only admins can access `products.html`.

### Issue: Charts or images not loading
**Solution:** 
- Make sure all image files (PNG files) are in the same directory as the HTML files
- Check that the file names match exactly (case-sensitive)

### Issue: Login not working
**Solution:**
- Clear your browser's sessionStorage (F12 → Application → Session Storage → Clear)
- Make sure you selected the correct role from the dropdown
- Check that username and password match exactly (case-sensitive)

### Issue: Logout button not appearing
**Solution:**
- Refresh the page (F5)
- Make sure you're logged in
- Check browser console for errors (F12)

### Issue: Cards not showing in role dashboards
**Solution:**
- Login as admin first
- Click "Manage" on cards you want to share
- Check the appropriate role checkboxes
- Click "Save Settings"
- Then login as that role to see the cards

## 📁 Project Structure

```
Sales Analysis/
├── login.html              # Login page (START HERE)
├── index.html              # Admin dashboard
├── executive-viewer.html   # Executive Viewer dashboard
├── sales-manager.html      # Sales Manager dashboard
├── sales-analyst.html      # Sales Analyst dashboard
├── customers.html          # Sales Executive dashboard
├── products.html           # Product Analytics (Admin only)
├── us_revenue_map.html     # Geographical revenue map
├── styles.css              # Main stylesheet
├── script.js               # Main JavaScript
├── auth-check.js           # Authentication script
├── add-visibility-controls.js  # Visibility management
├── products.js             # Product analytics script
├── *.png                   # Chart images
└── *.py                    # Python scripts for generating charts
```

## 🎨 Features

- ✅ Role-based authentication
- ✅ Session management
- ✅ Dynamic card visibility control
- ✅ Interactive dashboards
- ✅ Responsive design
- ✅ Account dropdown menu
- ✅ Logout functionality

## 💡 Tips

1. **Always start from login.html** - This is your entry point
2. **Use Chrome or Edge** - Best compatibility
3. **Clear cache** if you see old data (Ctrl + Shift + Delete)
4. **Use incognito mode** for testing different roles simultaneously
5. **Check browser console** (F12) if something doesn't work

## 🔒 Security Note

This is a demo/development setup with client-side authentication. For production:
- Implement server-side authentication
- Use HTTPS
- Hash passwords
- Add CSRF protection
- Implement proper session management
- Use JWT tokens

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console (F12) for errors
2. Verify all files are in the correct location
3. Make sure you're using a modern browser
4. Try clearing browser cache and sessionStorage

---

**Enjoy your Sales Analysis Dashboard! 📊**
=======
# 🚀 How to Run the Sales Analysis Dashboard

## Quick Start

### Option 1: Open Directly in Browser (Simplest)
1. Navigate to your project folder
2. Double-click on `login.html`
3. Your default browser will open the login page
4. Use the credentials from `LOGIN_CREDENTIALS.md` to login

### Option 2: Using Live Server (Recommended for Development)

#### If you're using VS Code:
1. Install the "Live Server" extension by Ritwick Dey
2. Right-click on `login.html`
3. Select "Open with Live Server"
4. Your browser will open at `http://127.0.0.1:5500/login.html`

#### If you're using another editor:
1. Install a local web server (see options below)
2. Start the server in your project directory
3. Navigate to `http://localhost:PORT/login.html`

### Option 3: Using Python (If you have Python installed)

#### Python 3:
```bash
# Navigate to your project folder
cd "C:\Users\dawatalekhya\Desktop\Sales Analysis"

# Start a simple HTTP server
python -m http.server 8000

# Open your browser and go to:
# http://localhost:8000/login.html
```

#### Python 2:
```bash
python -m SimpleHTTPServer 8000
```

### Option 4: Using Node.js (If you have Node.js installed)

```bash
# Install http-server globally (one time only)
npm install -g http-server

# Navigate to your project folder
cd "C:\Users\dawatalekhya\Desktop\Sales Analysis"

# Start the server
http-server -p 8000

# Open your browser and go to:
# http://localhost:8000/login.html
```

## 📋 Login Credentials

After opening the login page, use these credentials:

| Role | Username | Password |
|------|----------|----------|
| **Admin** | `admin` | `admin123` |
| **Executive Viewer** | `viewer` | `viewer123` |
| **Sales Manager** | `manager` | `manager123` |
| **Sales Analyst** | `analyst` | `analyst123` |
| **Sales Executive** | `executive` | `sales123` |

## 🎯 What Each Role Can Access

### Admin
- Full admin dashboard with all analytics
- Visibility management (can control what other roles see)
- Product Analytics page
- All navigation links

### Executive Viewer
- Executive-level dashboard (executive-viewer.html)
- High-level metrics and KPIs
- Cards shared by admin

### Sales Manager
- Sales management dashboard (sales-manager.html)
- Team performance metrics
- Cards shared by admin

### Sales Analyst
- Analytics dashboard (sales-analyst.html)
- Detailed metrics and analysis
- Cards shared by admin

### Sales Executive
- Individual sales dashboard (customers.html)
- Personal performance metrics
- Cards shared by admin

## 🔧 Troubleshooting

### Issue: "Access Denied" when trying to access a page
**Solution:** Make sure you're logged in with the correct role. Only admins can access `products.html`.

### Issue: Charts or images not loading
**Solution:** 
- Make sure all image files (PNG files) are in the same directory as the HTML files
- Check that the file names match exactly (case-sensitive)

### Issue: Login not working
**Solution:**
- Clear your browser's sessionStorage (F12 → Application → Session Storage → Clear)
- Make sure you selected the correct role from the dropdown
- Check that username and password match exactly (case-sensitive)

### Issue: Logout button not appearing
**Solution:**
- Refresh the page (F5)
- Make sure you're logged in
- Check browser console for errors (F12)

### Issue: Cards not showing in role dashboards
**Solution:**
- Login as admin first
- Click "Manage" on cards you want to share
- Check the appropriate role checkboxes
- Click "Save Settings"
- Then login as that role to see the cards

## 📁 Project Structure

```
Sales Analysis/
├── login.html              # Login page (START HERE)
├── index.html              # Admin dashboard
├── executive-viewer.html   # Executive Viewer dashboard
├── sales-manager.html      # Sales Manager dashboard
├── sales-analyst.html      # Sales Analyst dashboard
├── customers.html          # Sales Executive dashboard
├── products.html           # Product Analytics (Admin only)
├── us_revenue_map.html     # Geographical revenue map
├── styles.css              # Main stylesheet
├── script.js               # Main JavaScript
├── auth-check.js           # Authentication script
├── add-visibility-controls.js  # Visibility management
├── products.js             # Product analytics script
├── *.png                   # Chart images
└── *.py                    # Python scripts for generating charts
```

## 🎨 Features

- ✅ Role-based authentication
- ✅ Session management
- ✅ Dynamic card visibility control
- ✅ Interactive dashboards
- ✅ Responsive design
- ✅ Account dropdown menu
- ✅ Logout functionality

## 💡 Tips

1. **Always start from login.html** - This is your entry point
2. **Use Chrome or Edge** - Best compatibility
3. **Clear cache** if you see old data (Ctrl + Shift + Delete)
4. **Use incognito mode** for testing different roles simultaneously
5. **Check browser console** (F12) if something doesn't work

## 🔒 Security Note

This is a demo/development setup with client-side authentication. For production:
- Implement server-side authentication
- Use HTTPS
- Hash passwords
- Add CSRF protection
- Implement proper session management
- Use JWT tokens

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console (F12) for errors
2. Verify all files are in the correct location
3. Make sure you're using a modern browser
4. Try clearing browser cache and sessionStorage

---

**Enjoy your Sales Analysis Dashboard! 📊**
>>>>>>> 3ab6b0b (Add project files)
