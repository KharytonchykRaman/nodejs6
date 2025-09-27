const http = require("http");
const { PORT } = require("./data/globalData");

const mainController = require("./controllers/mainController");
const aboutController = require("./controllers/aboutController");
const projectsController = require("./controllers/projectsController");
const skillsController = require("./controllers/skillsController");
const students_listController = require("./controllers/students_listController");
const defaultController = require("./controllers/defaultController");

const webApp = http
  .createServer((req, res) => {
    switch (req.url) {
      case "/":
        mainController.start(req, res);
        break;

      case "/about":
        aboutController.about(req, res);
        break;

      case "/projects":
        projectsController.projects(req, res);
        break;

      case "/skills":
        skillsController.skills(req, res);
        break;

      case "/students_list":
        students_listController.students_list(req, res);
        break;

      default:
        defaultController.defaultController(req, res);
        break;
    }
  })
  .listen(PORT);