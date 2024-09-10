// Scroll animation for smooth scrolling between sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission alert
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    alert('Thank you for reaching out! We will get back to you shortly.');
});
