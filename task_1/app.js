const http = require("http");
const fs = require("fs");
const path = require("path");

const {getRndInt} = require("./utils/random");

const {PORT, year} = require("./data/globalData");

const {aboutTemplatePage,aboutPage,projectPage,skillsPage,
  studentsPage,studentsTemplatePage} = require('./data/pages');

const {cities, specializations, imgs, skills, fios, 
  groups, phones, StudentsNum} = require("./data/mockData");

const students = Array.from({ length: StudentsNum }, () => ({
  name: fios[getRndInt(0, fios.length - 1)],
  group: groups[getRndInt(0, groups.length - 1)],
  grade: getRndInt(20, 50) / 10,
  visit: getRndInt(10, 100),
  age: getRndInt(16, 25),
  phone: phones[getRndInt(0, phones.length - 1)],
  img: imgs[getRndInt(0, imgs.length - 1)],
}));

function renderTemplate(template, obj) {
  let result = template;
  for (const key in obj) {
    result = result.replaceAll(`{{${key}}}`, obj[key]);
  }
  return result;
}

const webApp = http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        fs.createReadStream(path.join(__dirname, "public", "html", "main.html")).pipe(res);
        break;

      case "/css/main.css":
        res.writeHead(200, { "Content-Type": "text/css; charset=utf-8" });
        fs.createReadStream(path.join(__dirname, "public", "css", "main.css")).pipe(res);
        break;

      case "/about":
        const developerInfo = {
          city: cities[getRndInt(0, cities.length - 1)],
          experience: getRndInt(0, 15),
          specialization: specializations[getRndInt(0, specializations.length - 1)],
          img: imgs[getRndInt(0, imgs.length - 1)],
        };

        const aboutContent = renderTemplate(aboutTemplatePage, developerInfo);
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(aboutPage.replace("{{content}}", aboutContent).replace("{{currentYear}}", year));
        break;

      case "/projects":
        const project = {
          projectName: "Tourism site",
          projectDescription: "Some description for this project bla-bla-bla",
          img: imgs[getRndInt(0, imgs.length - 1)],
          currentYear: year,
        };

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(renderTemplate(projectPage, project));
        break;

      case "/skills":
        const skillsHtml = skills.map((skill) => `<li>${skill}</li>`).join("");
        const skillsObj = {
          skillsList: skillsHtml,
          img: imgs[getRndInt(0, imgs.length - 1)],
          currentYear: year,
        };

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(renderTemplate(skillsPage, skillsObj));
        break;

      case "/students_list":
        const studentCardsHtml = students
          .map((st) => renderTemplate(studentsTemplatePage, st))
          .join("");

        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(studentsPage.replace("{{content}}", studentCardsHtml));
        break;

      case "/css/students.css":
        res.writeHead(200, { "Content-Type": "text/css" });
        fs.createReadStream(path.join(__dirname, "public", "css", "students.css")).pipe(res);
        break;

      case "/img/cat1.jpg":
        res.writeHead(200, { "Content-Type": "img/jpg" });
        fs.createReadStream(path.join(__dirname, "public", "img", "cat1.jpg")).pipe(res);
        break;

      case "/img/cat2.jpg":
        res.writeHead(200, { "Content-Type": "img/jpg" });
        fs.createReadStream(path.join(__dirname, "public", "img", "cat2.jpg")).pipe(res);
        break;

      case "/img/cat3.jpg":
        res.writeHead(200, { "Content-Type": "img/jpg" });
        fs.createReadStream(path.join(__dirname, "public", "img", "cat3.jpg")).pipe(res);
        break;

      case "/img/cat4.jpg":
        res.writeHead(200, { "Content-Type": "img/jpg" });
        fs.createReadStream(path.join(__dirname, "public", "img", "cat4.jpg")).pipe(res);
        break;

      default:
        const filePath = path.join(__dirname,"public",req.url);
        break;
    }
  })
  .listen(PORT);