"use strict"

// menu_burgeris

let menuTrigger = document.getElementById("mobile-menu-trigger");
let mobileMenu = document.querySelector("header nav");

menuTrigger.addEventListener('click', function() {
  this.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// features section tab navigation


