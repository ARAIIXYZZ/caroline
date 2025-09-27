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
    targetTime.setHours(now.getHours() + 2, 37, 15, 0); // Set to 2 hours 37 minutes 15 seconds from now
    
    const diff = targetTime - now;
    
    if (diff <= 0) {
        // Reset timer when it reaches zero
        targetTime.setDate(targetTime.getDate() + 1);
    }
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.model-card, .access-card, .stat-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Load More functionality
function initLoadMore() {
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Simulate loading more content
            this.textContent = 'Loading...';
            this.disabled = true;
            
            setTimeout(() => {
                // In a real scenario, you would load more content here
                alert('More models loaded! In a real implementation, this would load additional content.');
                this.textContent = 'LOAD MORE MODELS';
                this.disabled = false;
            }, 1000);
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start counter animation
    animateCounter();
    
    // Start countdown timer
    setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize load more functionality
    initLoadMore();
    
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
        if (window.scrollY > 100) {
            header.style.background = 'rgba(15, 23, 42, 0.98)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
        }
    });
    
    // Add click tracking for analytics
    const adLinks = document.querySelectorAll('a[href*="shorturl.at"]');
    adLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // You can add analytics tracking here
            console.log('Ad link clicked:', this.href);
            
            // Optional: Add a small delay before redirect to allow tracking
            setTimeout(() => {
                window.location.href = this.href;
            }, 100);
        });
    });
});

// Add interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.model-card, .access-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add pulse animation to CTA buttons
    const ctaButtons = document.querySelectorAll('.main-cta-btn, .final-cta-btn');
    ctaButtons.forEach(btn => {
        setInterval(() => {
            btn.style.boxShadow = '0 0 20px rgba(0, 198, 171, 0.5)';
            setTimeout(() => {
                btn.style.boxShadow = 'none';
            }, 500);
        }, 3000);
    });
});
