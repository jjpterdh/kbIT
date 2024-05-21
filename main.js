document.addEventListener("DOMContentLoaded", () => {
   const inputField = document.getElementById("calculator-display");
   const buttons = document.querySelectorAll(".keypad button");

    buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.textContent;
      console.log(value)
      if (button.classList.contains("operator") || button.classList.contains("number") ) {
        if (value === "=") {
          try {
            console.log(eval(inputField.value));
            inputField.value = eval(inputField.value);
          } catch {
            inputField.value = "Error";
          }
        } else if (value === "clear") {
          inputField.value = "";
        } else {
          inputField.value += value;
        }
      } 
    });
  });
});