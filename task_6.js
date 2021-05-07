/* 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
В зависимости от переданного значения операции выполнить одну из арифметических операций 
(использовать функции из пункта 5) и вернуть полученное значение (использовать switch). */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return arg1 + arg2;
        case '-':
            return arg1 - arg2;
        case '*':
            return arg1 * arg2;
        case '/':
            return parseInt(arg1 / arg2);
        default:
            return 'Вы указали что-то не то';
    }
}


let userPrompt = prompt('Напишите выражение, которое нужно посчитать (пример: 4 + 2): ').split(' ');
alert(mathOperation(+userPrompt[0], +userPrompt[2], userPrompt[1]));
