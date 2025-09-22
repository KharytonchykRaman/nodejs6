const task1 = (req,res)=>{
    let a = randomNum(1, 100);
    let b = randomNum(1, 100);
    res.write(`${a}+${b}=${a + b}\n`);
}

module.exports = {task1};