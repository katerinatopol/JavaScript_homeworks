/*5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
Обязательно использовать оператор return.*/

function addition(arg1, arg2) {
    return arg1 + arg2;
}

function subtraction(arg1, arg2) {
    return arg1 - arg2;
}

function multiplication(arg1, arg2) {
    return arg1 * arg2;
}

function division(arg1, arg2) {
    return parseInt(arg1 / arg2);
}

let x = 10, y = -3;
console.log(`Результат сложения чисел ${x} и ${y}: ${addition(x, y)}`);
console.log(`Результат вычитания чисел ${x} и ${y}: ${subtraction(x, y)}`);
console.log(`Результат умножения чисел ${x} и ${y}: ${multiplication(x, y)}`);
console.log(`Результат деления чисел ${x} и ${y}: ${division(x, y)}`);
