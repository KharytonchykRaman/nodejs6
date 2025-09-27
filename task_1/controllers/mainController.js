const fs = require("fs");
const path = require("path");

const start = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  fs.createReadStream(path.join(__dirname, "..", "public", "html", "main.html")).pipe(res);
};

module.exports = { start };