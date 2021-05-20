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


function Product(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
}

const pear = new Product('pear', 80, 1);
const apple = new Product('apple', 100, 2);
const orange = new Product('orange', 120, 3);


basket.addProduct(pear);
basket.addProduct(apple);
basket.addProduct(orange);


console.log(basket.countBasketPrice());
