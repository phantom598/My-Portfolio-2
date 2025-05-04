// ======= Navigation Menu Toggle =======
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle && navLinks) {
menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('active');
});
}

// ======= Footer Year and Time =======
function updateTime() {
const now = new Date();
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');

const timeElement = document.getElementById("current-time");
if (timeElement) {
timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}
}

// Update current year in footer
const yearElement = document.getElementById("current-year");
if (yearElement) {
yearElement.textContent = new Date().getFullYear();


}

setInterval(updateTime, 1000);
updateTime(); // run once on load