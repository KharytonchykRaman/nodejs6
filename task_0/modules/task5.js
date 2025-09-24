const person = {
  name: "Vasya",
  age: "27",
  address: "NYC rndm street 99",
};

const task5_1 = (req,res)=>{
      for (let key in person) {
        res.write(`${key}: ${person[key]}\n`);
      }
}

const product = {
  name: "Banana",
  price: "1",
  amount: "1000",
};

const task5_2 = (req,res) =>{
      res.write(
        `one ${product.name} costs ${product.price}$ per kg (${product.amount} total)\n`
      );
}

module.exports = {task5_1,task5_2};