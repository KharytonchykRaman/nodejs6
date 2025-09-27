const { cities, specializations, imgs, skills, fios, groups, phones } = require("../data/mockData");
const { year } = require("../data/globalData");

function getRndInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const developerInfo = () => {
  return {
    city: cities[getRndInt(0, cities.length - 1)],
    experience: getRndInt(0, 15),
    specialization: specializations[getRndInt(0, specializations.length - 1)],
    img: imgs[getRndInt(0, imgs.length - 1)],
  };
};

const project = () => {
  return {
    projectName: "Tourism site",
    projectDescription: "Some description for this project bla-bla-bla",
    img: imgs[getRndInt(0, imgs.length - 1)],
    currentYear: year,
  };
};

const skillsObj = () => {
  const skillsHtml = skills.map((skill) => `<li>${skill}</li>`).join("");
  return {
    skillsList: skillsHtml,
    img: imgs[getRndInt(0, imgs.length - 1)],
    currentYear: year,
  };
};

const students = () => {
  const StudentsNum = getRndInt(3, 10);
  return Array.from({ length: StudentsNum }, () => ({
    name: fios[getRndInt(0, fios.length - 1)],
    group: groups[getRndInt(0, groups.length - 1)],
    grade: getRndInt(20, 50) / 10,
    visit: getRndInt(10, 100),
    age: getRndInt(16, 25),
    phone: phones[getRndInt(0, phones.length - 1)],
    img: imgs[getRndInt(0, imgs.length - 1)],
  }));
};

module.exports = { developerInfo, project, skillsObj, students };