const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "c") {
      display.value = "";  // Clear display
    } else if (value === "=") {
      try {
        display.value = eval(display.value); // Evaluate expression
      } catch {
        display.value = "Error"; // If invalid input
      }
    } else {
      display.value += value; // Add clicked value
    }
  });
});
