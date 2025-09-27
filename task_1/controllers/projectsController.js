const { project } = require("../utils/random");
const { renderTemplate } = require("../utils/render");
const { projectPage } = require("../data/pages");

const projects = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(renderTemplate(projectPage(), project()));
};

module.exports = { projects };