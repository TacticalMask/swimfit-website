const nav = document.querySelector('[data-nav]');
const toggle = document.querySelector('[data-toggle]');
const year = document.querySelector('[data-year]');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!isOpen));
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 901) {
        nav.setAttribute('data-open', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}
