const { students } = require("../utils/random");
const { studentsPage, studentsTemplatePage } = require("../data/pages");
const { renderTemplate } = require("../utils/render");

const students_list = (req, res) => {
  const studentCardsHtml = students()
    .map((st) => renderTemplate(studentsTemplatePage(), st))
    .join("");

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(studentsPage().replace("{{content}}", studentCardsHtml));
};

module.exports = { students_list };