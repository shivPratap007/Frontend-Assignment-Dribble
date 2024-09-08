// const hamburger = document.querySelector(".hamburger");
// const menu = document.querySelector(".menu");

// hamburger.addEventListener("click", () => {
//   if (menu.style.display === "none" || menu.style.display === "") {
//     menu.style.display = "block"; // Show the menu
//   } else {
//     menu.style.display = "none"; // Hide the menu
//   }
// });

// let navToggle = document.querySelector(".hamburger");
// let bars = document.querySelectorAll(".bar");

// function toggleHamburger(e) {
//   bars.forEach((bar) => bar.classList.toggle("x"));
// }

// navToggle.addEventListener("click", toggleHamburger);

let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menu");
let bars = document.querySelectorAll(".bar");

hamburger.addEventListener("click", () => {
  // Toggle the active class for the menu
  menu.classList.toggle("active");

  // Toggle the X icon on the hamburger bars
  bars.forEach((bar) => bar.classList.toggle("x"));
});
