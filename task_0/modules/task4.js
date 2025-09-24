const task4_1 = (req,res)=>{
    let arr = [1, 2, 3, 4, 5];
    res.write(
      `Сумма элементов массива [1, 2, 3, 4, 5] = ${arr.reduce((sum, el) => sum + el, 0)}\n`
    );
}

const task4_2 = (req,res) =>{
    arr = ["яблоко", "банан", "груша", "апельсин"];
    arr.map((el) => res.write(`Длина слова ${el} = ${el.length}\n`));
}

module.exports = {task4_1,task4_2};