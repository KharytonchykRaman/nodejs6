const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const aboutTemplatePage = fs.readFileSync(
  path.join(__dirname, "public", "html", "aboutTemplate.html"),
  "utf-8"
);
const aboutPage = fs.readFileSync(path.join(__dirname, "public", "html", "about.html"), "utf-8");
const projectPage = fs.readFileSync(
  path.join(__dirname, "public", "html", "project.html"),
  "utf-8"
);
const skillsPage = fs.readFileSync(path.join(__dirname, "public", "html", "skills.html"), "utf-8");
const studentsPage = fs.readFileSync(
  path.join(__dirname, "public", "html", "students.html"),
  "utf-8"
);
const studentsTemplatePage = fs.readFileSync(
  path.join(__dirname, "public", "html", "studentsTemplate.html"),
  "utf-8"
);

const cities = ["Minsk", "Brest", "Grodno", "Vitebsk"];
const specializations = ["Frontend-разработка", "Backend-разработка", "FullStack-разработка"];
const imgs = ["cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg"];
const skills = ["HTML", "CSS", "JavaScript", "Node.js"];

const fios = [
  "Иванов Иван Иванович",
  "Петрова Мария Сергеевна",
  "Сидоров Алексей Дмитриевич",
  "Кузнецова Анна Владимировна",
  "Морозов Дмитрий Николаевич",
];
const groups = ["П13023", "П23023", "П99999", "П13131", "П22222"];
const phones = ["375291111111", "375292222222", "375293333333", "375291234567"];

const year = new Date().getFullYear();

const StudentsNum = getRndInt(3, 10);

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
        break;
    }
  })
  .listen(PORT);
