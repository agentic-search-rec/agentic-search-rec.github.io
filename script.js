document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-nav');
const navLinks = [...navigation.querySelectorAll('a[href^="#"]')];

function closeMenu({ returnFocus = false } = {}) {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
  if (returnFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  if (isOpen) closeMenu();
  else {
    navigation.classList.add('is-open');
    menuButton.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  }
});

navLinks.forEach(link => link.addEventListener('click', () => {
  closeMenu();
  const target = document.querySelector(link.getAttribute('href'));
  if (target) {
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
  }
}));

document.querySelector('.brand').addEventListener('click', () => closeMenu());

document.addEventListener('keydown', event => {
  if (menuButton.getAttribute('aria-expanded') !== 'true') return;
  if (event.key === 'Escape') closeMenu({ returnFocus: true });
  if (event.key === 'Tab') {
    const lastLink = navLinks.at(-1);
    if (event.shiftKey && document.activeElement === menuButton) {
      event.preventDefault();
      lastLink.focus();
    } else if (!event.shiftKey && document.activeElement === lastLink) {
      event.preventDefault();
      menuButton.focus();
    }
  }
});

document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});

const desktopQuery = window.matchMedia('(min-width: 901px)');
desktopQuery.addEventListener('change', event => { if (event.matches) closeMenu(); });

// Update the current section without changing the URL or moving keyboard focus.
const sections = [...document.querySelectorAll('main > section[id]')];
let updatePending = false;
function updateCurrentSection() {
  const marker = document.querySelector('.site-header').offsetHeight + 130;
  let currentId = 'home';
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= marker) currentId = section.id;
  }
  for (const link of navLinks) {
    if (link.hash === `#${currentId}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  updatePending = false;
}
window.addEventListener('scroll', () => {
  if (!updatePending) {
    updatePending = true;
    window.requestAnimationFrame(updateCurrentSection);
  }
}, { passive: true });
window.addEventListener('resize', updateCurrentSection);
updateCurrentSection();
