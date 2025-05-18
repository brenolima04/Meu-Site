const menuOpener = document.querySelector(".menu-opener");
const menuNav = document.querySelector(".menu-nav");

menuOpener.addEventListener("click", function () {
  menuNav.classList.toggle("open");
});
