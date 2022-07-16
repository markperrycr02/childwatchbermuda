const logo = document.querySelector(".logo");
const hamburger = document.querySelector("#hamburg");
const menu_close = document.querySelector("#menu-close-btn");
const overlay = document.querySelector("#overlay");
let active_item = document.querySelector("li.active");

const menu_items = document.querySelectorAll(".menu-items > li");

menu_items.forEach((item) => {
  item.addEventListener("click", () => update_menu_items(item));
});

function update_menu_items(item_clicked) {
  active_item.classList.remove("active");
  item_clicked.classList.add("active");
  active_item = item_clicked;
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

logo.addEventListener("click", () => {
  alert(screen.width + " x " + screen.height);
});
