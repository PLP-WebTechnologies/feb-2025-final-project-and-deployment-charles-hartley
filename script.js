// Mobile Menu Toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const mainMenu = document.getElementById('main-menu');

menuBtn.addEventListener('click', () => {
    mainMenu.classList.toggle('show');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !mainMenu.contains(e.target)) {
        mainMenu.classList.remove('show');
    }
});

// Newsletter Form Validation
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (validateEmail(email)) {
            // Here you would typically send this to a server
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Add current year to footer copyright
const yearSpan = document.querySelector('.footer-bottom p');
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.innerHTML = `&copy; ${currentYear} TechKE. All Rights Reserved.`;
}