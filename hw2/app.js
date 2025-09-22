function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const http = require("http");

//a) Напишите код, который сложит два числа (например, 5 и 7) и выведет результат на консоль.

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

    let a = randomNum(1, 100);
    let b = randomNum(1, 100);
    response.write(`${a}+${b}=${a + b}\n`);

    //b) Напишите код, который умножит два числа (например, 3 и 4) и выведет результат на консоль.

    a = randomNum(1, 100);
    b = randomNum(1, 100);
    response.write(`${a}*${b}=${a * b}\n`);

    //a) Напишите код, который проверит, является ли число четным. Если число четное, выведите на консоль сообщение "Число четное", иначе выведите "Число нечетное".

    a = randomNum(1, 100);
    if (a % 2 === 1) {
      response.write(`${a} - Число нечетное\n`);
    } else response.write(`${a} - Число четное\n`);

    //b) Напишите код, который проверит, является ли год високосным. Если год високосный, выведите на консоль сообщение "Год високосный", иначе выведите "Год не високосный".

    a = randomNum(1, 100);
    if (a % 4 === 0) {
      response.write(`${a} - Год високосный\n`);
    } else response.write(`${a} - Год не високосный\n`);

    //a) Напишите код, который выведет на консоль числа от 1 до 10.

    for (let i = 1; i < 11; i++) {
      response.write(`${i} `);
    }

    //b) Напишите код, который выведет на консоль сумму всех чисел от 1 до 100.

    let sum = 0;
    for (let i = 1; i < 101; i++) {
      sum += i;
    }
    response.write(`\nСумма чисел от 1 до 100 = ${sum}\n`);

    //a) Создайте массив чисел [1, 2, 3, 4, 5]. Напишите код, который выведет на консоль сумму всех элементов массива.

    let arr = [1, 2, 3, 4, 5];
    response.write(
      `Сумма элементов массива = ${arr.reduce((sum, el) => sum + el, 0)}\n`
    );

    //b) Создайте массив строк ["яблоко", "банан", "груша", "апельсин"].
    // Напишите код, который выведет на консоль длину каждой строки в массиве.

    arr = ["яблоко", "банан", "груша", "апельсин"];
    arr.map((el) => response.write(`Длина слова ${el} = ${el.length}\n`));

    //a) Создайте объект с информацией о человеке: имя, возраст, место жительства.
    // Напишите код, который выведет на консоль всю информацию о человеке.

    const person = {
      name: "Vasya",
      age: "27",
      address: "NYC rndm street 99",
    };

    for (let key in person) {
      response.write(`${key}: ${person[key]}\n`);
    }

    //b) Создайте объект с информацией о продукте: название, цена, количество.
    // Напишите код, который выведет на консоль название продукта и его стоимость.

    const product = {
      name: "Banana",
      price: "1",
      amount: "1000",
    };

    response.write(
      `one ${product.name} costs ${product.price}$ per kg (${product.amount} total)\n`
    );

    //a) Напишите функцию, которая принимает два числа в качестве аргументов и возвращает их сумму.

    function add(a, b) {
      return a + b;
    }

    //b) Напишите функцию, которая принимает массив чисел в качестве аргумента
    // и возвращает среднее значение всех элементов массива.

    function getAvg(arr) {
      return arr.reduce((sum, el) => sum + el, 0) / arr.length;
    }

    /*a. Создание каталога товаров:
      · Создайте массив объектов, где каждый объект представляет товар (название, цена, количество на складе).
      · Напишите функцию, которая принимает этот массив и возвращает новый массив, 
      содержащий только товары, которых на складе меньше 5.
      · Добавьте в каждый объект товара свойство discount, 
      которое будет рассчитываться в зависимости от цены (например, скидка 10% для товаров дороже 1000 рублей).*/

    const products = [
      { name: "Ноутбук", price: 50000, amount: 3 },
      { name: "Мышь", price: 800, amount: 12 },
      { name: "Клавиатура", price: 1200, amount: 4 },
      { name: "Монитор", price: 15000, amount: 7 },
      { name: "Флешка 32GB", price: 600, amount: 2 },
      { name: "Наушники", price: 1100, amount: 6 },
      { name: "Хаб USB", price: 950, amount: 8 },
    ];

    function getLowPriceProducts(products) {
      return products.filter((pr) => pr.amount < 5);
    }

    function addDiscountProperty(products) {
      products.forEach((pr) => {
        if (pr.price > 1000) {
          pr.discount = "10%";
        } else {
          pr.discount = "0%";
        }
      });
    }

    addDiscountProperty(products);

    products.map((pr) =>
      response.write(`На ${pr.name} скидка ${pr.discount}\n`)
    );

    /*b. Создание социальной сети (упрощенная версия):
      · Создайте объект User с полями name, age, friends (массив объектов других пользователей).
      · Напишите функцию, которая принимает массив пользователей и возвращает пользователя с наибольшим количеством друзей.
      · Реализуйте функцию, которая добавляет нового друга пользователю.*/

    const user1 = {
      name: "Vasya",
      age: "27",
      friends: [],
    };

    const user2 = {
      name: "Petya",
      age: "17",
      friends: [],
    };

    const user3 = {
      name: "Egor",
      age: "33",
      friends: [],
    };

    const user4 = {
      name: "Alex",
      age: "45",
      friends: [],
    };

    user1.friends.push(user2);
    user2.friends.push(user1);
    user2.friends.push(user3);
    user3.friends.push(user2);

    function getUserWithMostFriends(users) {
      let max = -1;
      let user;
      for (let i = 0; i < users.length; i++) {
        if (users[i].friends.length > max) {
          max = users[i].friends.length;
          user = users[i];
        }
      }
      return user;
    }

    response.write(
      `Пользователь с наибольшим числом друзей : ${
        getUserWithMostFriends([user1, user2, user3, user4]).name
      }\n`
    );

    function addFriend(user1, user2) {
      if (user1.friends.includes(user2)) {
        return;
      }
      user1.friends.push(user2);
      user2.friends.push(user1);
    }

    addFriend(user1, user4);
    addFriend(user1, user3);

    response.write(
      `Пользователь с наибольшим числом друзей : ${
        getUserWithMostFriends([user1, user2, user3, user4]).name
      }\n`
    );

    response.end();
  })
  .listen(3000);