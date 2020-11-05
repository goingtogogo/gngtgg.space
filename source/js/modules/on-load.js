const PageTransitions = require("../animating");
const PerfectScrollbar = require("perfect-scrollbar");

// Hide Mobile menu
const mobileMenuHide = () => {
  const windowWidth = document.documentElement.clientWidth;
  const menu = document.querySelector(".menu-toggle");
  const header = document.getElementById("header");

  if (windowWidth < 1025) {
    header.classList.add("mobile-menu-hide");
    menu.classList.remove("open");

    setTimeout(function () {
      header.classList.add("animate");
    }, 500);
  } else {
    header.classList.remove("animate");
  }
};
// /Hide Mobile menu

// Custom scroll
function customScroll() {
  const windowWidth = document.documentElement.clientWidth;
  const pages = document.querySelectorAll(".animated-section");

  if (windowWidth > 1024) {
    pages.forEach((page) => {
      const ps = new PerfectScrollbar(page);
    });
  } else {
    pages.forEach((page) => {
      const ps = new PerfectScrollbar(page);
    });
    ps.destroy();
  }
}
// /Custom scroll

const fadeOut = (el) => {
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= 0.1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

const animatePageLoading = () => {
  const preloader = document.querySelector(".preloader");

  fadeOut(preloader);
};

const initPageTransitions = () => {
  const pages = document.querySelectorAll(".animated-sections");

  if (pages[0]) {
    PageTransitions.init({
      menu: "header__menu",
    });
  }
};

const handleMouseMove = () => {
  const STRENGTH = 23;
  const windowHeight = document.documentElement.clientHeight;
  const windowWidth = document.documentElement.clientWidth;

  const height = STRENGTH / windowHeight;
  const width = STRENGTH / windowWidth;
  const pageX = e.pageX - windowWidth.width() / 2;
  const pageY = e.pageY - windowHeight / 2;
  const newvalueX = width * pageX * -1;
  const newvalueY = height * pageY * -1;

  const background = document.querySelector(".lm-animated-bg");

  background.classList.add("transition");
  background.style.backgroundPosition =
    "calc( 50% + " + newvalueX + "px ) calc( 50% + " + newvalueY + "px )";

  setTimeout(function () {
    background.classList.remove("transition");
  }, 300);
};

const toggleMenu = () => {
  const header = document.getElementById("header");
  const blogSidebar = document.getElementById("blog-sidebar");
  const menu = document.querySelector(".header__menu");
  const sidebar = document.querySelector(".sidebar-toggle");
  const mobileMenu = document.querySelector(".menu-toggle");

  mobileMenu.addEventListener("click", () => {
    header.classList.add("animate");
    header.classList.toggle("mobile-menu-hide");
    mobileMenu.classList.toggle("open");
  });

  menu.addEventListener("click", () => {
    mobileMenuHide();
  });

  sidebar.addEventListener("click", () => {
    blogSidebar.classList.toggle("open");
  });
};

const onLoad = () => {
  document.body.addEventListener("mousemove", (e) => {
    handleMouseMove();
  });

  toggleMenu();

  customScroll();
};

//On Window load & Resize
export default () => {
  document.addEventListener(`DOMContentLoaded`, () => {
    animatePageLoading();
    initPageTransitions();
  });

  document.addEventListener(`resize`, () => {
    mobileMenuHide();

    const pages = document.querySelectorAll(".animated-section");

    pages.forEach((page) => {
      const ps = new PerfectScrollbar(page);
      ps.update();
    });

    customScroll();
  });

  document.addEventListener(`load`, () => {
    onLoad();
  });
};
