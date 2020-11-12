const mobileMenuHide = () => {
  const windowWidth = document.documentElement.clientWidth;
  const menu = document.querySelector(".menu-toggle");
  const header = document.getElementById("header");

  if (windowWidth < 1025) {
    header.classList.add("mobile-menu-hide");
    menu.classList.remove("menu-toggle--opened");
  }
};

const toggleMenu = () => {
  const header = document.getElementById("header");
  const menu = document.querySelector(".header__menu");
  const mobileMenu = document.querySelector(".menu-toggle");

  mobileMenu.addEventListener("click", () => {
    header.classList.toggle("mobile-menu-hide");
    mobileMenu.classList.toggle("menu-toggle--opened");
  });

  menu.addEventListener("click", () => {
    mobileMenuHide();
  });
};

export default () => {
  document.addEventListener(`DOMContentLoaded`, () => {
    toggleMenu();
  });
  document.addEventListener(`resize`, () => {
    mobileMenuHide();
  });
};
