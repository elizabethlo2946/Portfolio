// following same structure as 339 Lecture 7
"use strict";
console.log("START UP: JavaScript running");

var width = window.innerWidth;
console.log("START UP: Current window width: "+width+"px");

var navToggle = document.querySelector("#nav-toggle");
var navItems = document.querySelector("#nav-items");
var navFirstItem = document.querySelector("#nav-items a");

window.onresize = resetNavBarMobile;
window.onload = resetNavBarMobile;

navToggle.addEventListener("click",
   function() {
      // console.log("menu button clicked");

      if(navItems.classList.contains("hidden")) {
         console.log("showing #nav-items");
         // remove css hidden attribute on these items
         navItems.classList.remove("hidden");
         navItems.setAttribute("aria-hidden", "false");

         // navToggle is visible
         navToggle.setAttribute("aria-expanded", "true");

         navFirstItem.focus();
      } else {
         console.log("hiding nav items");
         // bring back css hidden attribute on these navItems
         navItems.classList.add("hidden");
         navItems.setAttribute("aria-hidden", "true");

         // navToggle is not visible
         navToggle.setAttribute("aria-expanded", "false");
      }
   }
);

function resetNavBarMobile() {
   if (width < 675) {
      console.log("START UP: Collapsing Menu @ breakpoint");

      // make the menu button visible
      navToggle.classList.remove("hidden");
      navToggle.setAttribute("aria-hidden", "false");

      // hide the nav nav
      navItems.classList.add("hidden");
      navItems.setAttribute("aria-hidden", "true");
      // make navItems controlled by the button
      navItems.setAttribute("aria-labelledby", "nav-toggle");
   } else {
      // keep the menu button hidden
      navToggle.classList.add("hidden");
      navToggle.setAttribute("aria-hidden", "true");

      // show the nav items
      navItems.classList.remove("hidden");
      navItems.setAttribute("aria-hidden", "false");
   }
}
