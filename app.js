const menu_logo = document.querySelector("#menu-logo-image");
const downArrow = document.querySelector("#next-btn");

menu_logo.addEventListener("click", function () {
  alert(screen.width + " " + screen.height);
});

downArrow.addEventListener("click", function () {
  window.scrollBy({ top: 300, left: 0, behavior: "smooth" });
});

const toggleHamburger = () => {};
