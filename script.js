// Mobile menu toggle
document.getElementById("menu-icon").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("show");
});

// Theme Toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
