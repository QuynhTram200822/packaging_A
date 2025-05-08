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