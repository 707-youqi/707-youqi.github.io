const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');
if (toggle && navigation) {
  const close = () => { toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open navigation'); navigation.classList.remove('is-open'); };
  toggle.addEventListener('click', () => { const expanded = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(expanded)); toggle.setAttribute('aria-label', expanded ? 'Close navigation' : 'Open navigation'); navigation.classList.toggle('is-open', expanded); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { close(); toggle.focus(); } });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  window.matchMedia('(min-width: 801px)').addEventListener('change', event => { if (event.matches) close(); });
}
