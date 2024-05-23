
let screen = document.querySelector('#calcDisplay');
let displayExpression = '';
let expression = '';

function updateExpression() {
    screen.innerHTML = displayExpression || '0'
}

function addition() {
    expression += '+';
    displayExpression += '+';
    updateExpression()
}
function subtraction() {
    expression += '-';
    displayExpression += '-';
    updateExpression()
}
function multiplication() {
    expression += '*';
    displayExpression += '×';
    updateExpression()
}
function division() {
    expression += '/';
    displayExpression += `÷`;
    updateExpression()
}
function percentual() {
    expression += '/100';
    displayExpression += `%`;
    updateExpression()
}
function decimal() {
    expression += '.'
    displayExpression += '.';
    updateExpression()
}

function putParentheses() {
    let openParentheses = (expression.match(/\(/g) || []).length;
    let closeParentheses = (expression.match(/\)/g) || []).length;
    if (openParentheses > closeParentheses) {
        expression += ')';
        displayExpression += ')';
    } else {
        expression += '(';
        displayExpression += '(';
    }
    updateExpression()
}

function signs() {
    if (expression !== '') {
        let lastNumberMatch = expression.match(/(-?\d+\.?\d*)$/);
        if (lastNumberMatch) {
            let lastNumber = lastNumberMatch[0];
            let toggledNumber = lastNumber.startsWith('-') ? lastNumber.slice(1) : '-' + lastNumber;
            expression = expression.replace(/(-?\d+\.?\d*)$/, toggledNumber);
            displayExpression = displayExpression.replace(/(-?\d+\.?\d*)$/, toggledNumber);
            updateExpression()
        }
    }
}

function clickNumberButton(num) {
    expression += num;
    displayExpression += num;
    updateExpression();
}

function deleteCharacter() {
    expression = expression.slice(0, -1);
    displayExpression = displayExpression.slice(0, -1);
    updateExpression();
}

function cleanButtonClick() {
    screen.textContent = '0';
    displayExpression = '';
    expression = '';
}

function resultButton() {
    if (expression !== '') {
        try {
            let result = eval(expression.replace(/(\d+)%/g, ' $1/100 '));
            screen.textContent = result;
            expression = result.toString();
            displayExpression = expression;
        } catch (e) {
            screen.textContent = 'Error';
            expression = '';
            displayExpression = '';
        }
    }
}

function changeTheme() {
    const checkBox = document.getElementById('themeToggle');
    const body = document.querySelector('body');
    const tittleH1 = document.querySelector('.tittle h1');
    const calculator = document.getElementById('calculatorApp');
    const calculatorScreen = document.querySelector('.calcScreen');
    const calculatorDisplay = document.getElementById('calcDisplay');
    const calculatorBottomDisplay = document.querySelector('.bottomDisplay');

    if (checkBox.checked) {
        body.classList.add('dark-Mode');
        tittleH1.classList.add('dark-Mode');
        calculator.classList.add('dark-Mode');
        calculatorScreen.classList.add('dark-Mode');
        calculatorDisplay.classList.add('dark-Mode');
        calculatorBottomDisplay.classList.add('dark-Mode');

    } else {
        body.classList.remove('dark-Mode');
        tittleH1.classList.remove('dark-Mode');
        calculator.classList.remove('dark-Mode');
        calculatorScreen.classList.remove('dark-Mode');
        calculatorDisplay.classList.remove('dark-Mode');
        calculatorBottomDisplay.classList.remove('dark-Mode');
    }
}