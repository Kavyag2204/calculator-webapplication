const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.dataset.value) display.value += btn.dataset.value;
  });
});

equal.addEventListener("click", () => {
  try {
    display.value = eval(display.value.replace('÷','/').replace('×','*')) || "";
  } catch {
    display.value = "Error";
  }
});

clear.addEventListener("click", () => display.value = "");

backspace.addEventListener("click", () => {
  display.value = display.value.slice(0, -1);
});

// Keyboard input support
document.addEventListener("keydown", (e) => {
  if ((e.key >= 0 && e.key <= 9) || "+-*/.%.".includes(e.key)) {
    display.value += e.key;
  } else if (e.key === "Enter") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key === "Escape") {
    display.value = "";
  }
});
