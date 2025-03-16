const copyHexCode = document.querySelector(".hexCode");
const changeBtn = document.querySelector("button");
const wrapper = document.querySelector(".wrapper");

// Write a function to change the BG color
changeBtn.addEventListener("click", () => {
  let color = randomColor();
  wrapper.style.backgroundColor = color;
  copyHexCode.textContent = color;
});

// write a function to copy hex code
copyHexCode.addEventListener("click", () => {
  let text = copyHexCode.textContent;
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch((err) => {
        console.log("Failed to copy", err);
      });
  }
});

// write a function to generate random number between 0 to 255
let randomColor = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  //convert RGB decimal value to Hexadecimal
  let hexColor = `#${red.toString(16).padStart(2, "0")}${green
    .toString(16)
    .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
  return hexColor;
};

// write a function for show custom alert
function showAlert() {
  let alertBox = document.querySelector(".custom-alert");
  alertBox.classList.add("show");

  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 2000);
}

copyHexCode.addEventListener("click", () => {
  if (copyHexCode.textContent === copyHexCode.textContent) {
    showAlert();
  }
});
