const button = document.querySelector("button");
const body = document.querySelector("body");
button.addEventListener("click", () => {
  alert("Yay, I love puppies");
  body.style.backgroundColor = "red";
});
