const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const countdownEl = document.getElementById('countdown');
let secondsLeft = 15 * 60 - 1;

const updateCountdown = () => {
  if (!countdownEl) return;
  const min = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const sec = String(secondsLeft % 60).padStart(2, '0');
  countdownEl.textContent = `${min}:${sec}`;
  if (secondsLeft > 0) secondsLeft -= 1;
};

updateCountdown();
setInterval(updateCountdown, 1000);

const ctaLinks = document.querySelectorAll('.cta-link');
ctaLinks.forEach((cta) => {
  cta.addEventListener('mouseenter', () => cta.classList.add('pulse'));
  cta.addEventListener('animationend', () => cta.classList.remove('pulse'));
});
