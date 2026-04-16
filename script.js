const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.onclick = () => {
  menu.style.display =
    menu.style.display === "flex" ? "none" : "flex";
};

document.getElementById("join-btn").onclick = () => {
  alert("Welcome to Furukawa Fitness!");
};
