const { skillsObj } = require("../utils/random");
const { skillsPage } = require("../data/pages");
const { renderTemplate } = require("../utils/render");

const skills = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(renderTemplate(skillsPage(), skillsObj()));
};

module.exports = { skills };