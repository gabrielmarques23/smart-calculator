
let screen = document.querySelector('#calcDisplay'); //Ok
let deleteButton = document.querySelector('.deleteButton button');
let cleanButton = document.querySelector('.cleanButton');
let numberButton = document.querySelectorAll('.numberButton');

let selectedNumbers = '';
let num1 = '';
let num2 = '';
let operator = '';

function addition() {
    operator = '+';
}
function subtraction() {
    operator = '-';
}
function multiplication() {
    operator = '*';
}
function division() {
    operator = '/';
}
function percentual() {
    operator = '%';
}

function clickOperatorButton(oper) {
    operator = oper;
    showNumbersInDisplay();
}

function clickNumberButton(num) {
    if (operator === '') {
        num1 += num;
    } else {
        num2 += num;
    }
    showNumbersInDisplay();
}

function deleteCharacter() {
    num1 = num1.slice(0, -1);
    num2 = num2.slice(0, -1);
    screen.textContent = num1, num2;
}

function cleanButtonClick() {
    screen.textContent = '0';
    num1 = '';
    num2 = '';
    operator = '';
}

function showNumbersInDisplay() {
    let displayText = '';
    // Verifica se num1 e operator estão definidos
    if (num1 !== '' && operator !== '') {
        displayText += num1 + operator;
    } else {
        displayText += num1; // Se não, apenas exibe num1
    }
    // Verifica se num2 está definido
    if (num2 !== '') {
        displayText += num2;
    }
    screen.innerHTML = displayText;
}


/*

*/