const menuToggle = document.getElementById("menu-toggle");
const sideMenu = document.getElementById("side-menu");
const content = document.querySelector(".content");

menuToggle.addEventListener("click", () => {
    sideMenu.style.width = sideMenu.style.width === "250px" ? "0" : "250px";
    content.style.marginLeft = content.style.marginLeft === "250px" ? "0" : "250px";
});
