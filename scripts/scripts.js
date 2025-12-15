const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

function toggleMenu() {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
}

function closeMenu() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
}