const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const ctaLinks = document.querySelectorAll('.cta-link');
ctaLinks.forEach((link) => {
  link.addEventListener('mouseenter', () => {
    link.classList.add('pulse');
  });

  link.addEventListener('animationend', () => {
    link.classList.remove('pulse');
  });
});
