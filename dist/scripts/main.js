import { loadPage } from "../modules/load-page.js";

const sidebar = document.querySelector("#nav");
const main = document.querySelector("main");
const openNav = document.querySelector("#open-nav");

const sidebarLinkElements = sidebar.querySelectorAll("a");
const sidebarLinkTargets = Array.from(sidebarLinkElements, (element) => {
  const pathPieces = new URL(element.href).pathname.split("/");
  return pathPieces[pathPieces.length - 1].split(".")[0];
});

openNav.addEventListener("click", () => {
  sidebar.hidden = sidebar.hidden ? false : true;
});

main.addEventListener("click", (event) => {
  sidebar.hidden = true;
  console.log(event.target);
  console.log(event.target.tagName);

  let link = null;
  link =
    event.target.tagName === "A" ? event.target : event.target.closest("a");
  if (link) {
    const pathPieces = new URL(link.href).pathname.split("/");
    const pageName = pathPieces[pathPieces.length - 1];
    console.log(pageName);
    if (sidebarLinkTargets.includes(pageName)) {
      event.preventDefault();
      loadPage(pageName);
    }
  }
});

sidebar.addEventListener("click", async (event) => {
  let link = null;
  link =
    event.target.tagName === "A" ? event.target : event.target.closest("a");
  if (link) {
    const pathPieces = new URL(link.href).pathname.split("/");
    const pageName = pathPieces[pathPieces.length - 1].split(".")[0];
    event.preventDefault();
    loadPage(pageName);
    sidebar.hidden = true;
  }
});

function setCurrentSidebarItem() {
  const sidebarItems = sidebar.querySelectorAll("a");
  for (const sidebarItem of sidebarItems) {
    if (sidebarItem.textContent === document.title) {
      sidebarItem.classList.add("current-item");
      return sidebarItem;
    }
  }
}

const currentSidebarItem = setCurrentSidebarItem(sidebar);

if (currentSidebarItem) {
  sidebar.scrollTo({
    top: currentSidebarItem.offsetTop - window.innerHeight / 3,
  });
}
