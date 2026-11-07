
// Select HTML elements
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

// Mobile navigation
menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.setAttribute("aria-expanded", isOpen);

    menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.setAttribute("aria-expanded", "false");

        menuBtn.textContent = "☰";
    });

});

// Automatic copyright year
document.getElementById("year").textContent =
    new Date().getFullYear();
