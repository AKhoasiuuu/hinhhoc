const display = document.getElementById('display');
let resetDisplay = false; 

function clearDisplay() {
  display.value = '';
  resetDisplay = false;
}

function appendNumber(num) {
  if (resetDisplay || display.value === 'Lỗi biểu thức' || display.value === 'Lỗi chia cho 0') {
    display.value = '';
    resetDisplay = false;
  }
  display.value += num;
}

function appendOperator(op) {
  const lastChar = display.value.slice(-1);
  if (resetDisplay) resetDisplay = false; 
  if ('+-*/%'.includes(lastChar)) {
    display.value = display.value.slice(0, -1) + op;
  } else if (display.value.length > 0) {
    display.value += op;
  }
}

function appendDecimal() {
  if (resetDisplay) {
    display.value = '';
    resetDisplay = false;
  }
  const parts = display.value.split(/[\+\-\*\/\%]/);
  const lastPart = parts[parts.length - 1];
  if (!lastPart.includes('.')) {
    display.value += '.';
  }
}

function changeSign() {
  if (display.value === '') return;
  try {
    let val = eval(display.value);
    val = -val;
    display.value = val.toString();
  } catch {
  }
}

function calculate() {
  try {
    const expression = display.value.replace(/%/g, '/100');
    let result = eval(expression);
    if (result === Infinity || result === -Infinity) {
      display.value = 'Lỗi chia cho 0';
    } else {
      display.value = result;
      resetDisplay = true; 
    }
  } catch {
    display.value = 'Lỗi biểu thức';
  }
}

function scrollToCaret() {
  setTimeout(() => {
    display.scrollLeft = display.scrollWidth;
  }, 0);
}

function appendNumber(num) {
  if (resetDisplay) {
    display.value = '';
    resetDisplay = false;
  }
  display.value += num;
  scrollToCaret();
}

function appendOperator(op) {
  const lastChar = display.value.slice(-1);
  if (resetDisplay) resetDisplay = false;
  if ('+-*/%'.includes(lastChar)) {
    display.value = display.value.slice(0, -1) + op;
  } else if (display.value.length > 0) {
    display.value += op;
  }
  scrollToCaret();
}

function appendDecimal() {
  if (resetDisplay) {
    display.value = '';
    resetDisplay = false;
  }
  const parts = display.value.split(/[\+\-\*\/\%]/);
  const lastPart = parts[parts.length - 1];
  if (!lastPart.includes('.')) {
    display.value += '.';
  }
  scrollToCaret();
}

function backspace() {
    if (resetDisplay) {
      display.value = '';
      resetDisplay = false;
      return;
    }
    display.value = display.value.slice(0, -1);
  }