
let screen = document.querySelector('#calcDisplay'); //Ok
let deleteButton = document.querySelector('.deleteButton button');
let cleanButton = document.querySelector('.cleanButton');
let numberButton = document.querySelectorAll('.numberButton');

let selectedNumbers = '';
let num1 = '';
let num2 = '';
let operator = '';
let result = '';

const math = {
    addition: (num1, num2) => {
        operator = '+';
        return num1 + num2;
    },
    subtraction: (num1, num2) => {
        operator = '-';
        return num1 - num2;
    },
    multiplication: (num1, num2) => {
        operator = '&#215;';
        return num1 * num2;
    },
    division: (num1, num2) => {
        operator = '&#247;';
        let result = num1 / num2;
        return result.toFixed(2);
    },
    percentual: (num1, num2) => {
        operator = '%';
        let numbPer2 = num2 / 100;
        let result = num1 * numbPer2;
        return result.toFixed(2);
    }
}

const { addition, subtraction, multiplication, division, percentual } = math;

function resultButton() {
    switch (operator) {
        case '+':
            result = addition(Number(num1), Number(num2));
            break;
        case '-':
            result = subtraction(Number(num1), Number(num2));
            break;
        case '&#215;':
            result = multiplication(Number(num1), Number(num2));
            break;
        case '&#247;':
            result = division(Number(num1), Number(num2));
            break;
        case '%':
            result = percentual(Number(num1), Number(num2));
            break;
        default:
            result = '';
    }
    screen.textContent = result;
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
    if (num2 !== '') {
        num2 = num2.slice(0, -1);
    } else if (operator !== '') {
        operator = ''
    } else if (num1 !== '') {
        num1 = num1.slice(0, -1);
    }
    showNumbersInDisplay();
}

function cleanButtonClick() {
    screen.textContent = '0';
    num1 = '';
    num2 = '';
    operator = '';
}

function showNumbersInDisplay() {
    let displayText = '';

    if (num1 !== '' && operator !== '') {   // Verifica se num1 e operator estão definidos
        displayText += num1 + operator;
    } else {                                // Se não, apenas exibe num1
        displayText += num1;
    }

    if (num2 !== '') {                      // Verifica se num2 está definido
        displayText += num2;
    }
    screen.innerHTML = displayText;
}




/*

*/