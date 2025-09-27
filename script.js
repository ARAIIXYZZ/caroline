// Simple animations only
document.addEventListener('DOMContentLoaded', function() {
    // Simple hover effects
    const cards = document.querySelectorAll('.model-card, .access-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Click tracking
    document.querySelectorAll('a[href*="shorturl.at"]').forEach(link => {
        link.addEventListener('click', function() {
            console.log('Ad link clicked:', this.href);
        });
    });
    
    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.style.background = window.scrollY > 10 
            ? 'rgba(15, 23, 42, 0.98)' 
            : 'rgba(15, 23, 42, 0.95)';
    });
});
