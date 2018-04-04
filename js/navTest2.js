'use strict';

var navToggle = document.querySelector("#nav-toggle");
var navItems = document.querySelector("#nav-items");
var navFirstItem = document.querySelector("#nav-items a");

function openNav() {
    navItems.style.height = "100%";
    navItems.classList.remove("hidden");
    navItems.setAttribute("aria-hidden", "false")
    navItems.setAttribute("aria-expanded", "true");
    navFirstItem.focus();
}

function closeNav() {
    navItems.style.height = "0%";
    navItems.classList.add("hidden");
    navItems.setAttribute("aria-hidden", "true");
    navItems.setAttribute("aria-expanded","false");
}
