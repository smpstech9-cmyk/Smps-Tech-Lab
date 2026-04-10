# Admin Panel - SMPS Tech Lab

Complete admin panel for managing website content built with vanilla HTML, CSS, and JavaScript.

## Features

✅ **User Authentication** - Simple login system (demo: admin/admin123)
✅ **Dashboard** - Overview of all content with statistics
✅ **Manage IPs** - Add, edit, delete intellectual properties
✅ **Manage Blogs** - Add, edit, delete blog posts
✅ **Manage Careers** - Add, edit, delete job listings
✅ **Data Export** - Export updated data.js file
✅ **LocalStorage** - All changes saved in browser

## Pages

1. **index.html** - Login page
2. **dashboard.html** - Main dashboard with stats
3. **manage-ip.html** - IP management with CRUD operations
4. **manage-blogs.html** - Blog management with CRUD operations
5. **manage-careers.html** - Career management with CRUD operations

## How to Use

### 1. Login
- Open `admin/index.html` in your browser
- Use credentials: **admin** / **admin123**

### 2. Manage Content
- Navigate through the sidebar menu
- Click "+ Add New" to create content
- Click "Edit" to modify existing content
- Click "Delete" to remove content

### 3. Export Data
- Click "Export Data" button on dashboard
- Download the generated `data.js` file
- Replace `/website/data.js` with the new file
- Refresh your main website to see changes

## Data Storage

- All changes are stored in **browser localStorage**
- Data persists across sessions
- Export to save permanently

## Default Credentials

- **Username**: admin
- **Password**: admin123

⚠️ **Note**: In production, implement proper authentication with backend

## File Structure

```
admin/
├── index.html           # Login page
├── dashboard.html       # Dashboard
├── manage-ip.html       # IP management
├── manage-blogs.html    # Blog management
├── manage-careers.html  # Career management
├── admin.css           # All admin styles
├── admin.js            # All admin functionality
└── README.md           # This file
```

## Customization

- Modify `admin.css` to change admin panel styling
- Update login credentials in `admin.js` (login function)
- Extend `admin.js` to add more features

---

© 2025 SMPS Tech Lab. All rights reserved.
