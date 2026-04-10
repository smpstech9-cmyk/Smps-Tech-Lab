// Global state and utilities
let currentFilter = 'All';
let searchQuery = '';

// Animated counter
function animateCounter(element, target) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }
  }, 30);
}

// Intersection Observer for animations
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const isOpen = menu.style.display === 'block';
  menu.style.display = isOpen ? 'none' : 'block';
}

// Sticky navbar
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Render IP cards
function renderIPCards(filter = 'All', search = '') {
  const container = document.getElementById('ipCardsContainer');
  if (!container) return;

  let filtered = websiteData.ips;
  
  if (filter !== 'All') {
    filtered = filtered.filter(ip => ip.category === filter);
  }
  
  if (search) {
    filtered = filtered.filter(ip => 
      ip.title.toLowerCase().includes(search.toLowerCase()) ||
      ip.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = '<div class="no-results"><p>No intellectual properties found matching your criteria.</p></div>';
    return;
  }

  container.innerHTML = filtered.map(ip => `
    <div class="ip-card fade-in">
      <div class="ip-card-header">
        <div class="ip-icon">${ip.category.charAt(0)}</div>
        <span class="ip-stage">${ip.stage}</span>
      </div>
      <h3>${ip.title}</h3>
      <p class="ip-category">${ip.category}</p>
      <p class="ip-description">${ip.description}</p>
      <div class="ip-details">
        <div class="ip-detail-row">
          <span>IP Value:</span>
          <strong>${ip.value}</strong>
        </div>
        <div class="ip-detail-row">
          <span>Market Size:</span>
          <strong>${ip.marketSize}</strong>
        </div>
        <div class="ip-detail-row">
          <span>Revenue Potential:</span>
          <strong class="highlight">${ip.revenue}</strong>
        </div>
      </div>
      <div class="ip-tags">
        <p class="tag-label">Key Clients</p>
        <div class="tags">
          ${ip.clients.map(client => `<span class="tag">${client}</span>`).join('')}
        </div>
      </div>
      <div class="ip-tags">
        <p class="tag-label">Credibility</p>
        <div class="tags">
          ${ip.credibility.map(cred => `<span class="tag success">${cred}</span>`).join('')}
        </div>
      </div>
      <button class="btn btn-primary">View Details</button>
    </div>
  `).join('');
  
  setupScrollAnimations();
}

// Render blog cards
function renderBlogCards(filter = 'All', search = '') {
  const container = document.getElementById('blogCardsContainer');
  if (!container) return;

  let filtered = websiteData.blogs;
  
  if (filter !== 'All') {
    filtered = filtered.filter(blog => blog.category === filter);
  }
  
  if (search) {
    filtered = filtered.filter(blog => 
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = '<div class="no-results"><p>No articles found matching your criteria.</p></div>';
    return;
  }

  container.innerHTML = filtered.map(blog => `
    <div class="blog-card fade-in">
      <div class="blog-image">
        <span class="blog-category-badge">${blog.category}</span>
      </div>
      <div class="blog-content">
        <h3>${blog.title}</h3>
        <p>${blog.excerpt}</p>
        <div class="blog-meta">
          <span>👤 ${blog.author}</span>
          <span>📅 ${new Date(blog.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
          <span>⏱ ${blog.readTime}</span>
        </div>
        <a href="#" class="read-more">Read More →</a>
      </div>
    </div>
  `).join('');
  
  setupScrollAnimations();
}

// Render career cards
function renderCareerCards(filter = 'All', search = '') {
  const container = document.getElementById('careerCardsContainer');
  if (!container) return;

  let filtered = websiteData.careers;
  
  if (filter !== 'All') {
    filtered = filtered.filter(career => career.type === filter);
  }
  
  if (search) {
    filtered = filtered.filter(career => 
      career.title.toLowerCase().includes(search.toLowerCase()) ||
      career.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = '<div class="no-results"><p>No positions found matching your criteria.</p></div>';
    return;
  }

  container.innerHTML = filtered.map(career => `
    <div class="career-card fade-in">
      <div class="career-header">
        <div>
          <h3>${career.title}</h3>
          <p class="career-department">${career.department}</p>
        </div>
        <span class="career-type ${career.type === 'Full-time' ? 'full-time' : 'internship'}">${career.type}</span>
      </div>
      <p class="career-description">${career.description}</p>
      <div class="career-meta">
        <span>📍 ${career.location}</span>
        <span>💼 ${career.experience}</span>
      </div>
      <div class="career-skills">
        <p class="tag-label">Required Skills</p>
        <div class="tags">
          ${career.skills.map(skill => `<span class="tag">${skill}</span>`).join('')}
        </div>
      </div>
      <button class="btn btn-primary">Apply Now</button>
    </div>
  `).join('');
  
  setupScrollAnimations();
}

// Handle contact form submission
function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  setTimeout(() => {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
    
    const successMsg = document.getElementById('successMessage');
    successMsg.style.display = 'block';
    form.reset();
    
    setTimeout(() => {
      successMsg.style.display = 'none';
    }, 5000);
  }, 1500);
}

// Tab switching for collaborate page
function switchTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
  document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
  document.getElementById(`${tabName}-content`).classList.add('active');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  setupScrollAnimations();
  
  // Initialize page-specific content
  const page = document.body.getAttribute('data-page');
  
  if (page === 'investor') {
    renderIPCards();
  } else if (page === 'insights') {
    renderBlogCards();
  } else if (page === 'careers') {
    renderCareerCards();
  }
  
  // Animate counters on home page
  if (page === 'home') {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          const value = parseInt(entry.target.dataset.value);
          animateCounter(entry.target, value);
          entry.target.dataset.animated = 'true';
        }
      });
    });
    
    document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
  }
});