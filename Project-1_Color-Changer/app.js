const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
      console.log(e);
    }
  });
});