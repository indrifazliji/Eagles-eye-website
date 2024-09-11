// Scroll-based animation for About Us section
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        const aboutSection = document.getElementById('about');
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            aboutSection.style.opacity = 1;
            aboutSection.style.animation = 'fadeInUp 1.5s forwards';
        }
    });
});


// Form submission alert
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    alert('Thank you for reaching out! We will get back to you shortly.');
});
