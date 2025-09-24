const {randomNum} = require("./utils");

const task1_1 = (req,res)=>{
    const a = randomNum(1, 100);
    const b = randomNum(1, 100);
    res.write(`${a}+${b}=${a + b}\n`);
}

const task1_2 = (req,res) =>{
    const a = randomNum(1, 100);
    const b = randomNum(1, 100);
    res.write(`${a}*${b}=${a * b}\n`);
}

module.exports = {task1_1,task1_2};