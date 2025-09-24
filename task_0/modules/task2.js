const {randomNum} = require("./utils");

const task2_1 = (req,res)=>{
    a = randomNum(1, 100);
    if (a % 2 === 1) {
      res.write(`${a} - Число нечетное\n`);
    } else res.write(`${a} - Число четное\n`);
}

const task2_2 = (req,res) =>{
    a = randomNum(1, 100);
    if (a % 4 === 0) {
      res.write(`${a} - Год високосный\n`);
    } else res.write(`${a} - Год не високосный\n`);
}

module.exports = {task2_1,task2_2};