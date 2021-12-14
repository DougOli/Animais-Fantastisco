export default function activateMenu() {
  const internalLink = document.querySelectorAll(
    '[data-tab="menu"] a[href^="#"]',
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  internalLink.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}