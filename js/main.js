
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
