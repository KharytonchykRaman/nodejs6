const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const {task1} = require("./modules/task1");

const webApp = http.createServer((req,res) => {
    switch (req.url) {
        case "/":
            response.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
            task1(req,res);
            res.end();
            break;
    
        default:
            break;
    }
}).listen(PORT);