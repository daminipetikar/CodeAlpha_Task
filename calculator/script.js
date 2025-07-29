// SmartCalc Script (Final)
const display = document.getElementById("calc-display");
let angleMode = "deg";
let userExpression = "";
let evalExpression = "";

function append(value) {
  userExpression += value;
  evalExpression += value;
  updateDisplay();
}

function appendFunc(func) {
  userExpression += `${func}(`;
  if (["sin", "cos", "tan"].includes(func)) {
    if (angleMode === "deg") {
      evalExpression += `Math.${func}((Math.PI/180)*`;
    } else {
      evalExpression += `Math.${func}(`;
    }
  } else if (func === "log") {
    evalExpression += `Math.log10(`;
  } else if (func === "ln") {
    evalExpression += `Math.log(`;
  } else if (func === "sqrt") {
    evalExpression += `Math.sqrt(`;
  }
  updateDisplay();
}

function clearDisplay() {
  userExpression = "";
  evalExpression = "";
  updateDisplay();
}

function toggleSign() {
  if (userExpression) {
    userExpression = "-(" + userExpression + ")";
    evalExpression = "-(" + evalExpression + ")";
    updateDisplay();
  }
}

function calculate() {
  try {
    let open = (evalExpression.match(/\(/g) || []).length;
    let close = (evalExpression.match(/\)/g) || []).length;
    let safeExpr = evalExpression + ")".repeat(open - close);

    let result = eval(safeExpr);
    if (typeof result === 'number') {
      result = Math.round(result * 1e6) / 1e6;
    }

    userExpression = result.toString();
    evalExpression = result.toString();
    updateDisplay();
  } catch {
    userExpression = "Error";
    evalExpression = "";
    updateDisplay();
  }
}

function toggleTheme() {
  document.body.classList.toggle("light-theme");
}

function toggleAngleMode() {
  angleMode = angleMode === "deg" ? "rad" : "deg";
  document.getElementById("angleToggle").innerText = angleMode === "deg" ? "Deg" : "Rad";
}

function toggleSciPanel() {
  document.getElementById("sciPanel").classList.toggle("hidden");
}

function updateDisplay() {
  display.value = userExpression;
}
