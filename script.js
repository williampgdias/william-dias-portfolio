// SMOOTH SCROLL LINK
const initSmoothScroll = () => {
  const internalLinks = document.querySelectorAll('.menu-nav a[href^="#"]');

  const scrollToSection = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  internalLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
};
initSmoothScroll();
