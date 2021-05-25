/*
2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
2.1. Пустая корзина должна выводить строку «Корзина пуста»;
2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

3*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
3.1. Создать массив товаров (сущность Product);
3.2. При загрузке страницы на базе данного массива генерировать вывод из него. 
HTML-код должен содержать только div id=”catalog” без вложенного кода. 
Весь вид каталога генерируется JS.
*/

const cartProduct = {
    render(product) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${product.name}</div>
                    <div><b>Цена за шт.</b>: ${product.price}</div>
                    <div><b>Количество</b>: ${product.count}</div>
                    <div><b>Стоимость</b>: ${product.count * product.price}</div>
                </div>`;
    }
}
function Product(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;

    this.addInBasket = function (basket) {
        basket.contentBasket.push(this)
    };
}

const cart = {
    cartListBlock: null,
    cartButton: null,
    cartProduct,
    contentBasket: [],

    countBasketPrice() {
        return this.contentBasket.reduce((totalPrice, cartItem) =>
            totalPrice + cartItem.price * cartItem.count, 0);
    },
    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearCart.bind(this));

        this.render();
    },
    render() {
        if (this.contentBasket.length) {
            this.contentBasket.forEach(good => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.cartProduct.render(good));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend',
                `В корзине ${this.contentBasket.length} позиций стоимостью ${this.countBasketPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    },

    clearCart() {
        this.contentBasket = [];
        this.render();
    },
};


const pear = new Product('pear', 80, 1);
const apple = new Product('apple', 100, 2);
const orange = new Product('orange', 120, 3);


pear.addInBasket(cart);
apple.addInBasket(cart);
orange.addInBasket(cart);

cart.init();
