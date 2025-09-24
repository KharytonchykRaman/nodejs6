const task3_1 = (req,res)=>{
    for (let i = 1; i < 11; i++) {
        res.write(`${i} `);
      }
}

const task3_2 = (req,res) =>{
    let sum = 0;
    for (let i = 1; i < 101; i++) {
      sum += i;
    }
    res.write(`\nСумма чисел от 1 до 100 = ${sum}\n`);
}

module.exports = {task3_1,task3_2};