let displayValue = '0';
let operator = '';
let firstOperand = '';
let waitingForSecondOperand = false;

const display = document.getElementById('display');

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = '';
    waitingForSecondOperand = false;
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0' || waitingForSecondOperand) {
        displayValue = number;
        waitingForSecondOperand = false;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operator !== '') {
        calculate();
    }
    operator = op;
    firstOperand = displayValue;
    waitingForSecondOperand = true;
}

function calculate() {
    let result;
    const secondOperand = displayValue;

    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        default:
            return;
    }

    displayValue = result.toString();
    operator = '';
    waitingForSecondOperand = false;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = displayValue;
}
