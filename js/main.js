
//const numberToCalc = document.querySelector('span#calcDisplay');

let numberButton = document.querySelectorAll('.numberButton');
let screen = document.querySelector('#calcDisplay'); //Ok

//console.log(screen);

numberButton.forEach(button => {
    button.addEventListener('click', function() {
       let num = button.textContent;
       screen.innerHTML += num;
    })
})

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