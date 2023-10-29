const add = ((a, b) => a + b);
const subtract = ((a, b) => a - b);
const multiply = ((a, b) => a * b);
const divide = ((a, b ) => a / b);

let firstNumber;
let secondNumber;
let operator;

function operate(firstNumber, operator, secondNumber) {
    let answer;
    if (operator == '+') {
        answer = add(firstNumber, secondNumber);
    }
    else if (operator == '-') {
        answer = subtract(firstNumber, secondNumber);
    }
    else if (operator == '×') {
        answer = multiply(firstNumber, secondNumber);
    }
    else {
        if (secondNumber == 0) {
            answer = 'wdym';
        }
        else {
        answer = divide(firstNumber, secondNumber);
        }
    }
    return answer;
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

function manageAdditionalButtons() {
    clear.addEventListener('click', () => {
        output.textContent = '|';
    });
    
    /*fix this so cursor doesn't disappear*/
    del.addEventListener('click', () => {
        if (output.textContent != '|') {
        output.textContent = output.textContent.slice(0, output.textContent.length - 3);
        }
    });
}

manageAdditionalButtons();


function complexOperate() {
    const operators = document.querySelectorAll('.operation');
    for (let operator of operators) {

    }
}

function singleOperate() {
    equals.addEventListener('click', () => {
        let outputText = output.textContent
        for (let i = 0; i < outputText.length; i++) {
            if (outputText[i] == '×' ||
            outputText[i] == '÷' ||
            outputText[i] == '+' ||
            outputText[i] == '-') {
    
                let firstNumber = Number(outputText.slice(0, i));
                let secondNumber = Number(outputText.slice(i + 1, -1));
                console.log(firstNumber, outputText[i], secondNumber);
                let result = operate(firstNumber, outputText[i], secondNumber);
                console.log(result);
                output.textContent = result.toString();
            }
        }
    });
}

singleOperate();



