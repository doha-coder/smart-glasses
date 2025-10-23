// Theme toggle - FIXED VERSION
const toggleBtn = document.querySelector('.switch');
toggleBtn.addEventListener('change', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', newTheme);
  
  // Optional: Save theme preference to localStorage
  localStorage.setItem('theme', newTheme);
});

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.setAttribute('data-theme', savedTheme);
  
  // Set switch position based on saved theme
  if (savedTheme === 'dark') {
    toggleBtn.checked = true;
  }
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
      
      // Close mobile menu after clicking link
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    }
  });
});

// Enhanced Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navOverlay = document.querySelector('.nav-overlay');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
        navOverlay.classList.toggle('active');
    });

    // Close menu when clicking overlay
    navOverlay.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
        navOverlay.classList.remove('active');
    });

    // Close menu when clicking links
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            navOverlay.classList.remove('active');
        });
    });
}
// Throttle scroll events for better performance
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

window.addEventListener('scroll', throttle(() => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, 100));
// Add to JavaScript
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
// Interaction مع الـ Model
document.addEventListener('DOMContentLoaded', () => {
  const modelViewer = document.querySelector('model-viewer');
  
  if (modelViewer) {
    // Auto-rotate smoothly
    modelViewer.addEventListener('load', () => {
      modelViewer.autoRotate = true;
      modelViewer.autoRotateDelay = 0;
    });
    
    // Interaction على أجزاء معينة
    modelViewer.addEventListener('click', (event) => {
      // هنا حنضيف الكود اللي يحدد إيه الجزء اللي اتداس عليه
      console.log('Model clicked at:', event.detail.position);
    });
  }
});
