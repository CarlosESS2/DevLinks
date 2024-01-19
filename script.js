const html = document.documentElement;
const img = document.querySelector("#profile img");

function modeSwitch() {
  html.classList.toggle("light");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "Mayk Brito usando óculos escuros.");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute("alt", "Mayk Brito usando óculos.");
  }
}
