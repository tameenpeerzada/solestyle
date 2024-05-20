newFunction();
function newFunction() {
  document.addEventListener('DOMContentLoaded', function () {
    const learnMoreBtn = document.getElementById('learn-more-btn');
    learnMoreBtn.addEventListener('click', function () {
      alert('More information coming soon!');
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      alert(`Thank you, ${name}. We will contact you at ${email}.`);
    });
  });
}

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('header .navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
const menuToggle = document.getElementById('toggler');
const navbar = document.querySelector('header .navbar');

menuToggle.addEventListener('change', function() {
    if (this.checked) {
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('show');
    }
});

const contactForm = document.querySelector('.contact form');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');

    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        return;
    }

    if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value.trim())) {
        alert('Please enter a valid email address.');
        return;
    }

    if (messageInput.value.trim() === '') {
        alert('Please enter your message.');
        return;
    }

    // Form is valid, submit it
    this.submit();
});

function isValidEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
