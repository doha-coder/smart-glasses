
// Theme toggle
const toggleBtn = document.querySelector('.theme-toggle');
toggleBtn.addEventListener('click', () => {
  const theme = document.body.getAttribute('data-theme');
  document.body.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark');
  
  // Update button text
  const themeText = toggleBtn.querySelector('span');
  themeText.textContent = theme === 'dark' ? 'Light' : 'Dark';
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Particle generation
const particlesContainer = document.querySelector('.particles');
for(let i = 0; i < 80; i++) {
  const p = document.createElement('div');
  p.classList.add('particle');
  p.style.top = Math.random() * 100 + '%';
  p.style.left = Math.random() * 100 + '%';
  p.style.width = p.style.height = Math.random() * 6 + 4 + 'px';
  p.style.animationDuration = (Math.random() * 15 + 10) + 's';
  p.style.animationDelay = Math.random() * 5 + 's';
  particlesContainer.appendChild(p);
}

// Scroll-triggered animations
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(element => {
  observer.observe(element);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});
// Mobile menu toggle (add to your existing JS)
function initMobileMenu() {
  // Create mobile menu button
  const nav = document.querySelector('.navbar .container');
  const navLinks = document.querySelector('.nav-links');
  
  // Only add mobile menu if screen is small
  if (window.innerWidth <= 768) {
    // Check if menu button already exists
    if (!document.querySelector('.menu-toggle')) {
      const menuToggle = document.createElement('button');
      menuToggle.className = 'menu-toggle';
      menuToggle.innerHTML = '☰';
      menuToggle.style.background = 'transparent';
      menuToggle.style.border = 'none';
      menuToggle.style.color = 'var(--text)';
      menuToggle.style.fontSize = '1.5rem';
      menuToggle.style.cursor = 'pointer';
      menuToggle.style.padding = '5px';
      
      // Insert before nav links
      nav.insertBefore(menuToggle, navLinks);
      
      // Toggle menu on click
      menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      });
      
      // Initially hide menu on mobile
      navLinks.style.display = 'none';
    }
  } else {
    // Remove mobile menu button and show links on larger screens
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
      menuToggle.remove();
    }
    if (navLinks) {
      navLinks.style.display = 'flex';
    }
  }
}

// Initialize on load and resize
window.addEventListener('load', initMobileMenu);
window.addEventListener('resize', initMobileMenu);
// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});
