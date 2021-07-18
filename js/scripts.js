function toggleMenu() {
    document.getElementById("topNav").classList.toggle("open");
}
const btn = document.getElementById('hamburgerBtn');
btn.onclick = toggleMenu;