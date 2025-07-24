/* =============================================================
   ToothPlanet – JavaScript
   ------------------------------------------------------------- */

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Back to top smooth scroll (for the footer button)
const backToTop = document.querySelector('.back-to-top');
backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Testimonial slider
const slider = document.getElementById('testimonialSlider');
const testimonials = slider.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.testimonial__controls .prev');
const nextBtn = document.querySelector('.testimonial__controls .next');
let currentSlide = 0;

function showSlide(index) {
  testimonials.forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
  showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % testimonials.length;
  showSlide(currentSlide);
});

// Auto-slide every 6 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % testimonials.length;
  showSlide(currentSlide);
}, 6000);

// Simple appointment form handler (front-end only)
const appointmentForm = document.getElementById('appointmentForm');
const formStatus = document.getElementById('formStatus');

appointmentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(appointmentForm);

  // Basic validation example
  if (!formData.get('name') || !formData.get('email') || !formData.get('phone')) {
    formStatus.textContent = 'Please fill in all required fields.';
    return;
  }

  // Simulate successful submission
  formStatus.textContent = 'Thank you! Your request has been received. We will contact you soon.';
  appointmentForm.reset();

  // Clear status message after 6 seconds
  setTimeout(() => {
    formStatus.textContent = '';
  }, 6000);
});
