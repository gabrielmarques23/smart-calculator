
//const numberToCalc = document.querySelector('span#calcDisplay');

let screen = document.querySelector('#calcDisplay'); //Ok
let deleteButton = document.querySelector('.deleteButton button');
let cleanButton = document.querySelector('.cleanButton');
let numberButton = document.querySelectorAll('.numberButton');
let selectedNumbers = '';

//Click in the number buttons

function clickNumberButton(num) {
    num.textContent;
    selectedNumbers += num;
    screen.innerHTML = selectedNumbers;
}

function deleteCharacter() {
    selectedNumbers = selectedNumbers.slice(0, -1);
    screen.textContent = selectedNumbers;
}

function cleanButtonClick() {
    screen.textContent = '0';
    selectedNumbers = '';
}




/*

let num1;
let num2;

let calc = {
    add: (num1, num2) => {
        return num1 + num2;
    },
    sub: (num1, num2) => {
        return num1 - num2;
    },
    div: (num1, num2) => {
        return num1 / num2;
    },
    multi: (num1, num2) => {
        return num1 * num2;
    },
}



console.log(calc.multi(15, 5))

*/