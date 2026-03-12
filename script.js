// Change navbar background on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('#navbar');
    if (window.scrollY > 50) {
        nav.style.padding = "0.5rem 5%";
        nav.style.backgroundColor = "rgba(18, 18, 18, 0.95)";
    } else {
        nav.style.padding = "1rem 5%";
        nav.style.backgroundColor = "var(--dark-bg)";
    }
});

// Basic Form validation for the Contact Section
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for registering your interest with IDR!');
});