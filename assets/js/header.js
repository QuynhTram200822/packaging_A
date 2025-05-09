document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".header-menu i");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenu.style.display = "none";

  menuIcon.addEventListener("click", function () {
    if (mobileMenu.style.display === "none" || mobileMenu.style.display === "") {
      mobileMenu.style.display = "block";
    } else {
      mobileMenu.style.display = "none";
    }
  });
});

window.addEventListener('scroll', function () {
  const body = document.body;
  const scrollThreshold = 3;

  if (!body.classList.contains('page-home')) {
    if (window.scrollY > scrollThreshold) {
      body.classList.add('scrolled');
    } else {
      body.classList.remove('scrolled');
    }
  }
});

