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

const task7_1 = (req,res)=>{
    addDiscountProperty(products);

    products.map((pr) =>
      res.write(`На ${pr.name} скидка ${pr.discount}\n`)
    );
}

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

  function addFriend(user1, user2) {
    if (user1.friends.includes(user2)) {
      return;
    }  
    user1.friends.push(user2);
      user2.friends.push(user1);
  }

const task7_2 = (req,res)=>{
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
    
    res.write(
        `Пользователь с наибольшим числом друзей : ${
          getUserWithMostFriends([user1, user2, user3, user4]).name
        }\n`
      );
    
      addFriend(user1, user4);
      addFriend(user1, user3);
    
      res.write(
        `Пользователь с наибольшим числом друзей после addFriend(): ${
          getUserWithMostFriends([user1, user2, user3, user4]).name
        }\n`
      );
}

module.exports = {task7_1, task7_2};