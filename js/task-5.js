function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonChange = document.querySelector(".change-color");
const color = document.querySelector(".color");

buttonChange.addEventListener("click", function () {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  color.textContent = color;  
});


