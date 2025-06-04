const display = document.getElementById("display");

// Добавление значения на дисплей
function appendValue(value) {
  display.value += value;
}

// Очистка дисплея
function clearDisplay() {
  display.value = "";
}

// Добавление операций
function operate(operator) {
  display.value += " " + operator + " ";
}

// Вычисление выражения
function calculate() {
  try {
    // Используем eval для выполнения математических операций
    display.value = eval(display.value.replace("x", "*"));
  } catch (e) {
    display.value = "Error";
  }
}
