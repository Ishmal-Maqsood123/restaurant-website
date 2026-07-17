const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#navbar ul");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});