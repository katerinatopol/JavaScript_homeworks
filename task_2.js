/* 
2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. 
Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

const basket = {
    content: [],

    addProduct(product) {
        this.content.push(product);
    },

    countBasketPrice() {
       return this.content.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.count, 0);
    }
}

const pear = {
    name: 'pear',
    price: 100,
    count: 2
}

const apple = {
    name: 'apple',
    price: 80,
    count: 1
}

const orange = {
    name: 'orange',
    price: 120,
    count: 3
}

basket.addProduct(pear);
basket.addProduct(apple);
basket.addProduct(orange);

console.log(basket.countBasketPrice());
