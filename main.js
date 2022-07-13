const img = document.querySelector("#hero-img");
const hamburger = document.querySelector("#hamburg");
const menu_close = document.querySelector("#menu-close-btn");
const overlay = document.querySelector("#overlay");
const learmore = document.querySelector("#learn-more-btn");

const menu_items = document.querySelectorAll(".menu-items > li");

menu_items.forEach((item) => {
  item.addEventListener("click", () => update_menu_items(item));
});

function update_menu_items(item_clicked) {
  console.log(item_clicked);
}
// hamburg.addEventListener("click", () => {
// overlay.style.transform = "translate3d(0vw,0,0)";
// overlay.style.maxHeight = "100%";
// });

// learmore.addEventListener("click", () => {
//   alert("Learn More");
// });

// menu_close.addEventListener("click", () => {
//   overlay.style.transform = "translate3d(-100vw,0,0)";
// });

// img.addEventListener("click", () => {
//   alert(screen.width + " x " + screen.height);
// });
