
let screen = document.querySelector('#calcDisplay');
let expression = '';

/*
Montar uma lógica para cada um dos operadores que irão fazer o calculo.
Para cada operador fazer uma função.
Tentar colocar o código de cada operador, retornando a expressão correta.
*/

function resultButton() {
    if (expression !== '') {
        let result = eval(expression);
        screen.textContent = result;
        expression = result.toString();
    }
}

function clickOperatorButton(oper) {
    if (expression !== '') {
        if (!expression.match(/[+\-*/]$/)) {
            expression += oper;
            showExpression();
        }
    }
}

function clickNumberButton(num) {
    expression += num;
    showExpression();
}

function deleteCharacter() {
    expression = expression.slice(0, -1);
    showExpression();
}

function cleanButtonClick() {
    screen.textContent = '0';
    expression = '';
}

function showExpression() {
    let expressionWithSpaces = expression.replace(/([+\-*/])/g, ' $1 ')
    screen.textContent = expressionWithSpaces.trim() || '0';
}




/*

*/