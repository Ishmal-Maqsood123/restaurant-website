// const menu = document.querySelector(".menu-toggle");
// const nav = document.querySelector("#navbar ul");

// menu.addEventListener("click", () => {
//     nav.classList.toggle("active");
// });
/* MOBILE NAVIGATION MENU*/
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#navbar ul");

menuToggle.addEventListener("click", () => {
navMenu.classList.toggle("active");
});

/*CLOSE MENU AFTER CLICKING LINK*/
const navLinks = document.querySelectorAll("#navbar ul li a");

navLinks.forEach((link) => {
link.addEventListener("click", () => {
navMenu.classList.remove("active");
});
});

/*ORDER NOW BUTTONS*/
const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach((button) => {
button.addEventListener("click", () => {
const itemName = button.getAttribute("data-item");
    alert(
        `Thank you for choosing Ishmal's Foods!\n\nYour ${itemName} order has been received.`
    );
});
});

/*HERO ORDER BUTTON */
const heroOrderButton = document.querySelector(".hero-btn");

heroOrderButton.addEventListener("click", () => {
document.querySelector("#menu").scrollIntoView({
behavior: "smooth"
});
});

/*CONTACT FORM*/
const contactForm = document.querySelector("#form form");

contactForm.addEventListener("submit", (event) => {
event.preventDefault();
const name = document.querySelector("#name").value.trim();
const email = document.querySelector("#email").value.trim();
const phone = document.querySelector("#phone").value.trim();
const message = document.querySelector("#message").value.trim();

if (name === "" || email === "" || phone === "" || message === "") {
    alert("Please fill in all the fields.");
    return;
}
alert(
    `Thank you, ${name}!\n\nYour message has been sent successfully.`
);
contactForm.reset();
});
