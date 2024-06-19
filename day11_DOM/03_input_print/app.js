const userInput = document.querySelector(".user-input");
const result = document.querySelector(".result");

console.dir(userInput);
console.dir(result);

userInput.addEventListener("input", (event) => {
  console.log(event.target.value);
  result.textContent = event.target.value;
});
