const add = ((a, b) => a + b);
const subtract = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const divide = ((a, b ) => a / b);

let firstNumber;
let secondNumber;
let operator;

function operate(firstNumber, operator, secondNumber) {
    if (operator == '+') {
        add(firstNumber, secondNumber);
    }
    else if (operator == '-') {
        subtract(firstNumber, secondNumber);
    }
    else if (operator == '*') {
        multiply(firstNumber, secondNumber);
    }
    else {
        divide(firstNumber, secondNumber);
    }
}

// flashing output cursor
const output = document.querySelector('.output');
// setInterval(function() {output.textContent = ''}, 500);
// setInterval(function() {output.textContent = '|'}, 1000);


const five = document.querySelector('.five');

function outputWrite(button) {
    button.addEventListener('click', () => {
        let cursor = '|';
        for (let i = 0; i < output.textContent.length; i++) {
              if (output.textContent[i] == cursor) {
                output.textContent = output.textContent.slice(0, i) + output.textContent.slice(i + 1);
              }   
        }
        output.textContent += button.textContent + cursor;
    });
};

const buttons = document.querySelectorAll('button');

const equals = document.querySelector('.equals');
const del = document.querySelector('.del');
const clear = document.querySelector('.clear');
const sign = document.querySelector('.sign');
const percent = document.querySelector('.percent');

for (button of buttons) {
    if ((button != equals) && (button != del) && (button != clear) &&
        (button != sign) && (button != percent)) {
    outputWrite(button);
    }
}




