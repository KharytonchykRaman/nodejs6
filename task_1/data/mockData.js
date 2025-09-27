const fs = require("fs");
const path = require("path");

const cities = ["Minsk", "Brest", "Grodno", "Vitebsk"];
const specializations = ["Frontend-разработка", "Backend-разработка", "FullStack-разработка"];
const imgs = fs.readdirSync(path.join(__dirname, "../public/img"));
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

module.exports = {
  cities,
  specializations,
  imgs,
  skills,
  fios,
  groups,
  phones,
};