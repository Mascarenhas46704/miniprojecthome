document.addEventListener("scroll", () => {
    const parallax = document.querySelector('.parallax');
    const offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.5 + "px";
  });
  function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}