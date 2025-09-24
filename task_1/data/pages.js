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

  module.exports = {aboutTemplatePage,aboutPage,projectPage,
    skillsPage,studentsPage,studentsTemplatePage};