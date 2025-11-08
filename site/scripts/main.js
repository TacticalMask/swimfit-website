const navToggle = document.querySelector('.site-header__toggle');
const siteNav = document.querySelector('.site-nav');

navToggle?.addEventListener('click', () => {
  siteNav?.classList.toggle('is-active');
  navToggle.classList.toggle('is-active');
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-active');
    navToggle?.classList.remove('is-active');
  });
});

const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Duplicate ticker text to create a seamless loop for assistive tech if needed
const tickerInner = document.querySelector('.ticker__inner');
if (tickerInner) {
  tickerInner.innerHTML += tickerInner.innerHTML;
}
