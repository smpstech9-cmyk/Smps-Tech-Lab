// Admin Authentication
function checkAuth() {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn && window.location.pathname.includes('dashboard')) {
        window.location.href = 'index.html';
    }
}

function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple auth (in production, use proper authentication)
    if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('adminLoggedIn', 'true');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid credentials! Use: admin / admin123');
    }
}

function logout() {
    localStorage.removeItem('adminLoggedIn');
    window.location.href = 'index.html';
}

// Data Management
function getStoredData() {
    const stored = localStorage.getItem('websiteData');
    return stored ? JSON.parse(stored) : null;
}

function saveData(data) {
    localStorage.setItem('websiteData', JSON.stringify(data));
}

function initializeData() {
    if (!getStoredData()) {
        // Copy from parent data.js if available
        if (typeof websiteData !== 'undefined') {
            saveData(websiteData);
        }
    }
}

// IP Management
function loadIPs() {
    const data = getStoredData();
    const tbody = document.getElementById('ipTableBody');
    if (!data || !tbody) return;

    tbody.innerHTML = data.ips.map(ip => `
        <tr>
            <td>${ip.id}</td>
            <td>${ip.title}</td>
            <td>${ip.category}</td>
            <td>${ip.value}</td>
            <td>${ip.stage}</td>
            <td>
                <button onclick="editIP(${ip.id})" class="btn btn-sm btn-primary">Edit</button>
                <button onclick="deleteIP(${ip.id})" class="btn btn-sm btn-danger">Delete</button>
            </td>
        </tr>
    `).join('');
}

function showIPForm(ipId = null) {
    const modal = document.getElementById('ipModal');
    const form = document.getElementById('ipForm');
    const data = getStoredData();

    if (ipId) {
        const ip = data.ips.find(i => i.id === ipId);
        if (ip) {
            document.getElementById('ipId').value = ip.id;
            document.getElementById('ipTitle').value = ip.title;
            document.getElementById('ipCategory').value = ip.category;
            document.getElementById('ipDescription').value = ip.description;
            document.getElementById('ipValue').value = ip.value;
            document.getElementById('ipMarketSize').value = ip.marketSize;
            document.getElementById('ipRevenue').value = ip.revenue;
            document.getElementById('ipClients').value = ip.clients.join(', ');
            document.getElementById('ipCredibility').value = ip.credibility.join(', ');
            document.getElementById('ipStage').value = ip.stage;
        }
    } else {
        form.reset();
        document.getElementById('ipId').value = '';
    }

    modal.style.display = 'block';
}

function closeIPModal() {
    document.getElementById('ipModal').style.display = 'none';
}

function saveIP(event) {
    event.preventDefault();
    const data = getStoredData();
    const formData = new FormData(event.target);

    const ipData = {
        id: formData.get('ipId') ? parseInt(formData.get('ipId')) : data.ips.length + 1,
        title: formData.get('title'),
        category: formData.get('category'),
        description: formData.get('description'),
        value: formData.get('value'),
        marketSize: formData.get('marketSize'),
        revenue: formData.get('revenue'),
        clients: formData.get('clients').split(',').map(c => c.trim()),
        credibility: formData.get('credibility').split(',').map(c => c.trim()),
        stage: formData.get('stage')
    };

    const existingIndex = data.ips.findIndex(ip => ip.id === ipData.id);
    if (existingIndex >= 0) {
        data.ips[existingIndex] = ipData;
    } else {
        data.ips.push(ipData);
    }

    saveData(data);
    closeIPModal();
    loadIPs();
    alert('IP saved successfully!');
}

function editIP(id) {
    showIPForm(id);
}

function deleteIP(id) {
    if (confirm('Are you sure you want to delete this IP?')) {
        const data = getStoredData();
        data.ips = data.ips.filter(ip => ip.id !== id);
        saveData(data);
        loadIPs();
        alert('IP deleted successfully!');
    }
}

// Blog Management
function loadBlogs() {
    const data = getStoredData();
    const tbody = document.getElementById('blogTableBody');
    if (!data || !tbody) return;

    tbody.innerHTML = data.blogs.map(blog => `
        <tr>
            <td>${blog.id}</td>
            <td>${blog.title}</td>
            <td>${blog.category}</td>
            <td>${blog.author}</td>
            <td>${blog.date}</td>
            <td>
                <button onclick="editBlog(${blog.id})" class="btn btn-sm btn-primary">Edit</button>
                <button onclick="deleteBlog(${blog.id})" class="btn btn-sm btn-danger">Delete</button>
            </td>
        </tr>
    `).join('');
}

function showBlogForm(blogId = null) {
    const modal = document.getElementById('blogModal');
    const form = document.getElementById('blogForm');
    const data = getStoredData();

    if (blogId) {
        const blog = data.blogs.find(b => b.id === blogId);
        if (blog) {
            document.getElementById('blogId').value = blog.id;
            document.getElementById('blogTitle').value = blog.title;
            document.getElementById('blogExcerpt').value = blog.excerpt;
            document.getElementById('blogCategory').value = blog.category;
            document.getElementById('blogAuthor').value = blog.author;
            document.getElementById('blogDate').value = blog.date;
            document.getElementById('blogReadTime').value = blog.readTime;
        }
    } else {
        form.reset();
        document.getElementById('blogId').value = '';
    }

    modal.style.display = 'block';
}

function closeBlogModal() {
    document.getElementById('blogModal').style.display = 'none';
}

function saveBlog(event) {
    event.preventDefault();
    const data = getStoredData();
    const formData = new FormData(event.target);

    const blogData = {
        id: formData.get('blogId') ? parseInt(formData.get('blogId')) : data.blogs.length + 1,
        title: formData.get('title'),
        excerpt: formData.get('excerpt'),
        category: formData.get('category'),
        author: formData.get('author'),
        date: formData.get('date'),
        readTime: formData.get('readTime')
    };

    const existingIndex = data.blogs.findIndex(b => b.id === blogData.id);
    if (existingIndex >= 0) {
        data.blogs[existingIndex] = blogData;
    } else {
        data.blogs.push(blogData);
    }

    saveData(data);
    closeBlogModal();
    loadBlogs();
    alert('Blog saved successfully!');
}

function editBlog(id) {
    showBlogForm(id);
}

function deleteBlog(id) {
    if (confirm('Are you sure you want to delete this blog?')) {
        const data = getStoredData();
        data.blogs = data.blogs.filter(b => b.id !== id);
        saveData(data);
        loadBlogs();
        alert('Blog deleted successfully!');
    }
}

// Career Management
function loadCareers() {
    const data = getStoredData();
    const tbody = document.getElementById('careerTableBody');
    if (!data || !tbody) return;

    tbody.innerHTML = data.careers.map(career => `
        <tr>
            <td>${career.id}</td>
            <td>${career.title}</td>
            <td>${career.type}</td>
            <td>${career.department}</td>
            <td>${career.location}</td>
            <td>
                <button onclick="editCareer(${career.id})" class="btn btn-sm btn-primary">Edit</button>
                <button onclick="deleteCareer(${career.id})" class="btn btn-sm btn-danger">Delete</button>
            </td>
        </tr>
    `).join('');
}

function showCareerForm(careerId = null) {
    const modal = document.getElementById('careerModal');
    const form = document.getElementById('careerForm');
    const data = getStoredData();

    if (careerId) {
        const career = data.careers.find(c => c.id === careerId);
        if (career) {
            document.getElementById('careerId').value = career.id;
            document.getElementById('careerTitle').value = career.title;
            document.getElementById('careerType').value = career.type;
            document.getElementById('careerDepartment').value = career.department;
            document.getElementById('careerLocation').value = career.location;
            document.getElementById('careerExperience').value = career.experience;
            document.getElementById('careerDescription').value = career.description;
            document.getElementById('careerSkills').value = career.skills.join(', ');
        }
    } else {
        form.reset();
        document.getElementById('careerId').value = '';
    }

    modal.style.display = 'block';
}

function closeCareerModal() {
    document.getElementById('careerModal').style.display = 'none';
}

function saveCareer(event) {
    event.preventDefault();
    const data = getStoredData();
    const formData = new FormData(event.target);

    const careerData = {
        id: formData.get('careerId') ? parseInt(formData.get('careerId')) : data.careers.length + 1,
        title: formData.get('title'),
        type: formData.get('type'),
        department: formData.get('department'),
        location: formData.get('location'),
        experience: formData.get('experience'),
        description: formData.get('description'),
        skills: formData.get('skills').split(',').map(s => s.trim())
    };

    const existingIndex = data.careers.findIndex(c => c.id === careerData.id);
    if (existingIndex >= 0) {
        data.careers[existingIndex] = careerData;
    } else {
        data.careers.push(careerData);
    }

    saveData(data);
    closeCareerModal();
    loadCareers();
    alert('Career saved successfully!');
}

function editCareer(id) {
    showCareerForm(id);
}

function deleteCareer(id) {
    if (confirm('Are you sure you want to delete this career?')) {
        const data = getStoredData();
        data.careers = data.careers.filter(c => c.id !== id);
        saveData(data);
        loadCareers();
        alert('Career deleted successfully!');
    }
}

// Dashboard Stats
function loadDashboardStats() {
    const data = getStoredData();
    if (!data) return;

    document.getElementById('totalIPs').textContent = data.ips.length;
    document.getElementById('totalBlogs').textContent = data.blogs.length;
    document.getElementById('totalCareers').textContent = data.careers.length;
    document.getElementById('totalPartners').textContent = data.partners.length;
}

// Export Data
function exportData() {
    const data = getStoredData();
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([`const websiteData = ${dataStr};`], { type: 'text/javascript' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.js';
    link.click();
    alert('Data exported! Replace the data.js file in your website folder with this file.');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    initializeData();
});
