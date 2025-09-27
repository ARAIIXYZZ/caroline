// Animated Counter
function animateCounter() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current).toLocaleString();
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target.toLocaleString();
            }
        };
        
        // Start animation when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Countdown Timer
function updateCountdown() {
    const now = new Date();
    const targetTime = new Date(now);
    targetTime.setHours(now.getHours() + 2, 18, 52, 0);
    
    const diff = targetTime - now;
    
    if (diff <= 0) {
        targetTime.setDate(targetTime.getDate() + 1);
    }
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Mobile menu functionality
function initMobileMenu() {
    const menuBtn = document.createElement('button');
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.style.display = 'none';
    
    document.querySelector('.nav-container').appendChild(menuBtn);
    
    // Mobile menu styles
    const style = document.createElement('style');
    style.textContent = `
        .mobile-menu-btn {
            background: var(--primary);
            border: none;
            color: white;
            padding: 8px 12px;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }
        
        @media (max-width: 480px) {
            .mobile-menu-btn {
                display: block !important;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start counter animation
    animateCounter();
    
    // Start countdown timer
    setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(15, 23, 42, 0.98)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
        }
    });
    
    // Add click tracking for analytics
    const adLinks = document.querySelectorAll('a[href*="shorturl.at"]');
    adLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Ad link clicked:', this.href);
        });
    });
    
    // Load more functionality
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            this.textContent = 'Loading More Models...';
            this.disabled = true;
            
            setTimeout(() => {
                // Simulate loading
                const newModels = 10;
                alert(`Loaded ${newModels} more models!`);
                this.textContent = 'LOAD MORE MODELS';
                this.disabled = false;
            }, 1500);
        });
    }
});

// Add interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Pulse animation for CTA buttons
    const ctaButtons = document.querySelectorAll('.main-cta-btn, .final-cta-btn');
    ctaButtons.forEach(btn => {
        setInterval(() => {
            btn.style.transform = 'scale(1.02)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 600);
        }, 3000);
    });
});
