const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const backTop = document.querySelector(".back-top");

menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 600);
});

backTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
