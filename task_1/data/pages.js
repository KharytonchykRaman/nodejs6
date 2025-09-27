const fs = require("fs");
const path = require("path");

const aboutTemplatePage = () => {
  return fs.readFileSync(
    path.join(__dirname, "..", "public", "html", "aboutTemplate.html"),
    "utf-8"
  );
};

const aboutPage = () => {
  return fs.readFileSync(path.join(__dirname, "..", "public", "html", "about.html"), "utf-8");
};

const studentsTemplatePage = () => {
  return fs.readFileSync(
    path.join(__dirname, "..", "public", "html", "studentsTemplate.html"),
    "utf-8"
  );
};

const projectPage = () => {
  return fs.readFileSync(path.join(__dirname, "..", "public", "html", "project.html"), "utf-8");
};

const skillsPage = () => {
  return fs.readFileSync(path.join(__dirname, "..", "public", "html", "skills.html"), "utf-8");
};

const studentsPage = () => {
  return fs.readFileSync(path.join(__dirname, "..", "public", "html", "students.html"), "utf-8");
};

module.exports = {
  aboutTemplatePage,
  aboutPage,
  projectPage,
  skillsPage,
  studentsPage,
  studentsTemplatePage,
};
