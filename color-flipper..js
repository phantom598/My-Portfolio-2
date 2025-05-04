document.getElementById("color-btn").addEventListener("click", function () {
    const colors = ["#ff6347", "#4CAF50", "#00BFFF", "#FFD700", "#FF1493", "#8A2BE2"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    });
    