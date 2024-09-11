// Scroll-based animation for all sections
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".grid-section");

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function addPopupAnimation() {
        sections.forEach(section => {
            if (isInViewport(section)) {
                section.style.opacity = "1";
                section.style.transform = "scale(1)";
            }
        });
    }

    window.addEventListener('scroll', addPopupAnimation);
    addPopupAnimation(); // Trigger on load as well
});

// Form submission alert
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    alert('Thank you for reaching out! We will get back to you shortly.');
});
