

let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
let bars = document.querySelectorAll(".bar");

hamburger.addEventListener("click", () => {
  // Toggle the active class for the menu
  menu.classList.toggle("active");

  // Toggle the X icon on the hamburger bars
  bars.forEach((bar) => bar.classList.toggle("x"));
});
