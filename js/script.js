var myNav = document.getElementById("navbar");

window.onscroll = function () {
  "use strict";
  if (
    document.body.scrollTop >= 70 ||
    document.documentElement.scrollTop >= 70
  ) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};

AOS.init();
