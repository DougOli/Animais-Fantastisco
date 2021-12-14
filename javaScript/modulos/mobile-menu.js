import outsideClick from "./outside-click.js";

export default function initMobileMenu() {
  const menuButton = document.querySelector('[data-menu="burger"');
  const menuList = document.querySelector('[data-menu="list"');
  const eventos = ["click", "touchstart"];

  function openMenu() {
    menuList.classList.add("active");
    menuButton.classList.add("active");

    outsideClick(menuList, eventos, () => {
      menuButton.classList.remove("active");
      menuList.classList.remove("active");
    });
  }
  if (menuButton) {
    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }
}
