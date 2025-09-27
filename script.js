// Countdown Timer
function updateCountdown() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const diff = tomorrow - now;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.querySelectorAll('.countdown-item .number').forEach((el, index) => {
        if (index === 0) el.textContent = hours.toString().padStart(2, '0');
        if (index === 1) el.textContent = minutes.toString().padStart(2, '0');
        if (index === 2) el.textContent = seconds.toString().padStart(2, '0');
    });
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Smooth scrolling for navigation links
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

// Header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(10, 10, 20, 0.98)';
    } else {
        header.style.background = 'rgba(10, 10, 20, 0.95)';
    }
});

// Add loading animation to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.model-card, .premium-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
});