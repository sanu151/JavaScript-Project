(function () {
  let screen = document.querySelector("#display");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equals = document.querySelector(".btn-equal");
  let del = document.querySelector(".btn-del");
  let plusMinus = document.querySelector(".btn-plus-minus");
  let persentage = document.querySelector(".btn-persentage");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });

  equals.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  clear.addEventListener("click", function (e) {
    screen.value = "";
  });

  persentage.addEventListener("click", function (e) {
    let answer = eval(screen.value);
    let currentVal = parseFloat(answer);

    // Ensure a valid number exists before applying percentage
    if (!isNaN(currentVal)) {
      screen.value = currentVal / 100;
    } else {
      // Handle potential errors (optional):
      // - Display an error message on the screen
      // - Play an audio cue
      console.error("Invalid number for percentage calculation.");
    }
  });

  plusMinus.addEventListener("click", function (e) {
    let currentVal = parseFloat(screen.value);

    // Ensure a valid number exists before applying negative sign
    if (!isNaN(currentVal)) {
      screen.value = currentVal * -1;
    } else {
      // Handle potential errors (optional)
    }
  });

  del.addEventListener("click", function (e) {
    let currentVal = screen.value;
    screen.value = currentVal.slice(0, -1); // Remove the last character
  });

  function handleKeyPress(event) {
    const key = event.key;

    // Check for allowed keys (numbers, operators, decimal, etc.)
    if (/[0-9.+\-*/]/.test(key)) {
      screen.value += key;
    } else if (key === "Enter") {
      // Handle equals button functionality on Enter key press
      equals.click();
    } else if (key === "Backspace") {
      // Handle delete button functionality on Backspace key press
      del.click();
    }
  }
  document.addEventListener("keypress", handleKeyPress);
})();
