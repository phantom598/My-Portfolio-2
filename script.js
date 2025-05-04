// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    }
    });
    });
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        document.getElementById("current-time").textContent = `${hours}:${minutes}:${seconds}`;
        }
        
        setInterval(updateTime, 1000);
        updateTime(); // run once on load
    
    // Optional: Scroll to top button (if you want to add it later)
    // const scrollTopBtn = document.getElementById("scrollTopBtn");
    // window.addEventListener("scroll", () => {
    // scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    // });
    // scrollTopBtn.addEventListener("click", () => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
    // });
    