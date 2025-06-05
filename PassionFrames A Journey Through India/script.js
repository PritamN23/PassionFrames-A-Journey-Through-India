document.querySelectorAll(".card img").forEach((img) => {
img.addEventListener("mouseenter", function () {
    const colorThief = new ColorThief();
    // Make sure the image is loaded
    if (img.complete) {
    const color = colorThief.getColor(img);
    document.body.style.background = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    }
});
img.addEventListener("mouseleave", function () {
    // Reset to original background
    document.body.style.background =
    "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)";
});
});
