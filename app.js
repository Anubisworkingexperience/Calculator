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

const output = document.querySelector('.output');

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
const dot = document.querySelector('.dot');

const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const multiplyButton = document.querySelector('.multiply');
const divideButton = document.querySelector('.divide');


for (button of buttons) {
    if (((button != equals) && (button != del) && (button != clear) &&
        (button != sign) && (button != percent) && (button != dot))) {
        outputWrite(button);
    }
}


function manageAdditionalButtons() {
    clear.addEventListener('click', () => {
        output.textContent = '|';
    });
    
    del.addEventListener('click', () => {
        if (output.textContent != '|') {
        output.textContent = output.textContent.slice(0, output.textContent.length - 2) + '|';
        }
    });
    dot.addEventListener('click', () => {
        if (output.textContent != '|') {
            output.textContent = output.textContent.slice(0, output.textContent.length - 1) + '.' + '|';
            }
    });
    //fix this 
    sign.addEventListener('click', () => {
        if (output.textContent != '|') {
            output.textContent = '-' + output.textContent;
        }
        signButtonClicked = true;
    });
    //---

    percent.addEventListener('click', () => {
        if (output.textContent != '|') {
            output.textContent = (Number(output.textContent.slice(0, output.textContent.length - 1)) / 100).toString() + '|';
        }
    });

}


manageAdditionalButtons();

const operators = document.querySelectorAll('.operation');


function complexOperate() {
    const digits = document.querySelectorAll('.digit');
    const operatorsWithEquals = document.querySelectorAll('.complexOperate');
    for (let operator of operators) {
        operator.addEventListener('click', () => {
            console.log(operator);
            let operatorArray = output.textContent.split('').filter((char) => 
            char == '×' || char == '+' || char == '-' || char == '÷')
            console.log(operatorArray);
            if (operatorArray.length == 2) {
                let firstOperator = operatorArray[0];
                let nextOperator = operatorArray[1];
                let first = Number(output.textContent.slice(0, output.textContent.indexOf(firstOperator)));
                let second = Number(output.textContent.slice(output.textContent.indexOf(firstOperator) + 1, output.textContent.lastIndexOf(nextOperator)));
                console.log(first, second, firstOperator, nextOperator);
                let result = operate(first, firstOperator, second);
                result = roundOutputNumbers(result);
                output.textContent = result.toString() + '|';
                console.log(nextOperator);
                console.log(result);
                let anotherNumber = '';
                let index = 0;
                for (let digit of digits) {
                    digit.addEventListener('click', () => {
                        index += 1;
                        anotherNumber += digit.textContent;
                        if (index == 1) {
                            output.textContent = digit.textContent + '|';
                        }
                        for (let operator of operatorsWithEquals) {
                            operator.addEventListener('click', () => {
                                console.log(anotherNumber);
                                let final = operate(Number(result), nextOperator, Number(anotherNumber));
                                console.log(final);
                                final = roundOutputNumbers(final);
                                console.log(final);
                                output.textContent = final + '|';
                            });
                        }

                    });
                }
                
            }
        });
    }
}

function roundOutputNumbers(number) {
    let strNum = number.toString();
    if (strNum.includes('.')) {
        strNum = parseFloat(strNum).toFixed(2);
    }
    return strNum;
}

complexOperate();

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
                result = roundOutputNumbers(result);
                output.textContent = result.toString() + '|';
            }
        }
    });
}

singleOperate();



/*TODO
0. Finish complex operate
1. 3 additional buttons
2. keyboard support
3. Remove opportunity to write operations to output while it's blank */
