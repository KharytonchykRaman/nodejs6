const fs = require("fs");
const path = require("path");
const { contentTypes } = require("../data/globalData");

const defaultController = (req, res) => {
  const filePath = path.join(__dirname, "..", "public", req.url);
  fs.access(filePath, fs.constants.R_OK, (err) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end();
    } else {
      const extname = path.extname(filePath);
      const contentType = contentTypes[extname] || "application/octet-stream";

      res.writeHead(200, {
        "Content-Type": contentType,
      });
      fs.createReadStream(filePath).pipe(res);
    }
  });
};

module.exports = { defaultController };
