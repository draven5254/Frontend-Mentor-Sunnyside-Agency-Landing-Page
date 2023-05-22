"use strict";

// navbar variable

const nav = document.querySelector(".navbar-nav");
const navtoggleBtn = document.querySelector(".nav-toggle-btn");
const navLinks = document.querySelectorAll(".nav-links");

// NAVBAR TOGGLE FUNCTION

const navbarToggleFunc = () => {
  nav.classList.toggle("active");
  navtoggleBtn.classList.toggle("active");
};

navtoggleBtn.addEventListener("click", navbarToggleFunc);

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", navbarToggleFunc);
}
