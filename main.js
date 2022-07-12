const img = document.querySelector("#hero-img");
const hamburger = document.querySelector("#hamburg");
const menu_close = document.querySelector("#menu-close-btn");
const overlay = document.querySelector("#overlay");
const learmore = document.querySelector("#learn-more-btn");

hamburg.addEventListener("click", () => {
  overlay.style.display = "flex";

  overlay.style.transform = "translate3d(0vw,0,0)";
  // overlay.style.maxHeight = "100%";
});

learmore.addEventListener("click", () => {
  alert("Learn More");
});

menu_close.addEventListener("click", () => {
  overlay.style.display = "none";
  overlay.style.transform = "translate3d(-100vw,0,0)";
});

img.addEventListener("click", () => {
  alert(screen.width + " x " + screen.height);
});
