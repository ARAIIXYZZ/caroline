// Simple hover effects and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to model cards
    const modelCards = document.querySelectorAll('.model-card');
    modelCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click tracking (optional)
    const links = document.querySelectorAll('a[href*="shorturl.at"]');
    links.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Clicked:', this.href);
            // You can add analytics tracking here
        });
    });

    // Auto-redirect after 30 seconds (optional)
    setTimeout(() => {
        // Uncomment the line below if you want auto-redirect
        // window.location.href = 'https://shorturl.at/gQhzM';
    }, 30000);
});
