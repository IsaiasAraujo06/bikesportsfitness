document.addEventListener("DOMContentLoaded", function() {
    const btnMenu = document.querySelector(".menu");
    const menu = document.querySelector(".menu-list");
    
    btnMenu.addEventListener("click", function() {
        menu.classList.toggle("show");
    });
});
