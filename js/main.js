const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".site-menu");
const closeButton = document.querySelector(".menu-close");
const backdrop = document.querySelector(".menu-backdrop");

function setMenu(open) {
  menu.classList.toggle("open", open);
  backdrop.classList.toggle("visible", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  menu.setAttribute("aria-hidden", String(!open));
}
toggle.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
closeButton.addEventListener("click", () => setMenu(false));
backdrop.addEventListener("click", () => setMenu(false));
menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") setMenu(false);
});
