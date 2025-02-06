document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("themeToggle");
    
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});
