const themeButton = document.querySelector<HTMLButtonElement>('.theme-toggle');

themeButton?.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
});

const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const primaryNavigation = document.querySelector<HTMLElement>('#primary-navigation');

const setMenuOpen = (isOpen: boolean) => {
  menuButton?.setAttribute('aria-expanded', String(isOpen));
  primaryNavigation?.classList.toggle('is-open', isOpen);
};

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  setMenuOpen(!isOpen);
});

primaryNavigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
});
