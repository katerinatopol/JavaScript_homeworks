/*
1. Создать функцию, генерирующую шахматную доску. При этом можно использовать 
любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, 
т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, 
столбцы – латинскими буквами A, B, C, D, E, F, G, H.
*/
"use strict";

function chessBoard() {
    let table = document.createElement("table");
    const literal = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    for (let i = 0; i <= 8; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j <= 8; j++) {
            let td = document.createElement('td');
            if (j == 0) {
                td.style.border = 0;
                if (i != 0)
                    td.innerText = i;
                    td.className = "white";
            }
            else if (i == 0 && j != 0) {
                td.innerText = literal[j - 1];
                td.className = "white";
                td.style.border = 0;
            }
            else if (i % 2 == j % 2) {
                td.className = "white";
            }
            else {
                td.className = "black";
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}


document.body.appendChild(chessBoard());


/*
2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
2.1. Пустая корзина должна выводить строку «Корзина пуста»;
2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

function Product(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;

    this.addInBasket = function (basket) {
        basket.contentBasket.push(this)
    };
}


let basket = {
    contentBasket: [],

    countBasketPrice() {
        return this.contentBasket.reduce((totalPrice, cartItem) =>
            totalPrice + cartItem.price * cartItem.count, 0);
    }

};

const pear = new Product('pear', 80, 1);
const apple = new Product('apple', 100, 2);
const orange = new Product('orange', 120, 3);


pear.addInBasket(basket);
apple.addInBasket(basket);
orange.addInBasket(basket);


function render(basketUser) {
    let div = document.querySelector('#cart');
    let resCount = 0;

    let allPrice = basketUser.countBasketPrice();
    basketUser.contentBasket.forEach(el => {
        resCount += el.count;
    });
    //console.log(resCount);
    //console.log(basketUser.countBasketPrice());

    if (resCount === 0) {
        div.insertAdjacentText('afterbegin', 'Корзина пуста');
    }
    else {
        div.insertAdjacentText('afterbegin', `В корзине: ${resCount}
        товаров на сумму ${allPrice} рублей`);
    }
    
};
    

render(basket);
