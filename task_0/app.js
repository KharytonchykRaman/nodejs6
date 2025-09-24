const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const {task1_1,task1_2} = require("./modules/task1");
const {task2_1,task2_2} = require("./modules/task2");
const {task3_1,task3_2} = require("./modules/task3");
const {task4_1,task4_2} = require("./modules/task4");
const {task5_1,task5_2} = require("./modules/task5");
const {add,getAvg} = require("./modules/task6");
const {task7_1,task7_2} = require("./modules/task7");

const webApp = http.createServer((req,res) => {
    switch (req.url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });

            task1_1(req,res);
            task1_2(req,res);

            task2_1(req,res);
            task2_2(req,res);

            task3_1(req,res);
            task3_2(req,res);

            task4_1(req,res);
            task4_2(req,res);

            task5_1(req,res);
            task5_2(req,res);

            res.write(`5 + 5 = ${add(5,5)}\n`);
            res.write(`Среднее значение массива [1,2,3,4,5,6,7,8,9] = ${getAvg([1,2,3,4,5,6,7,8,9])}\n`)

            task7_1(req,res);
            task7_2(req,res);

            res.end();
            break;
    
        default:
            break;
    }
}).listen(PORT);