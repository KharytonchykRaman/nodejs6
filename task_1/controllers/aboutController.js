const { year } = require("../data/globalData");
const { renderTemplate } = require("../utils/render");
const { aboutTemplatePage, aboutPage } = require("../data/pages");
const { developerInfo } = require("../utils/random");

const about = (req, res) => {
  const aboutContent = renderTemplate(aboutTemplatePage(), developerInfo());
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(aboutPage().replace("{{content}}", aboutContent).replace("{{currentYear}}", year));
};

module.exports = { about };