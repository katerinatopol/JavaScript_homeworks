/* 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

let products = {
    'apple': 100,
    'orange': 150,
    'pear': 120,
    'cherry': 220
};

function countBasketPrice(arrBasket) {
    let sumBasket = 0;
    for (const value of arrBasket) {
        sumBasket += products[value['name']] * value['count'];
    }
    return sumBasket;
}


let userBasket = [
    { 'name': 'pear', 'count': 2 },
    { 'name': 'apple', 'count': 5 },
    { 'name': 'orange', 'count': 1 }
];

console.log(countBasketPrice(userBasket));
