let img = document.querySelector(".web3 img");
let menu = document.querySelector("#menu");
let colse = document.querySelector("#colse");
let menuDiv = document.querySelector("#menuDiv");

menu.addEventListener("click", () => {
  openMenu();
  menuDiv.style.width = "70vw";
});
colse.addEventListener("click", () => {
  closeMenu();
});
window.addEventListener(
  "resize",
  (e) => {
    console.log(window.outerWidth);
    if (window.outerWidth < 576) {
      img.setAttribute("src", "assets/images/image-web-3-mobile.jpg");
      closeMenu();
    } else {
      openMenu();
      menuDiv.style.width = "fit-content";

      img.setAttribute("src", "assets/images/image-web-3-desktop.jpg");
    }
  },
  true
);

function openMenu() {
  menuDiv.style.display = "block";
}
function closeMenu() {
  menuDiv.style.width = "0vw";

  menuDiv.style.display = "none";
}
