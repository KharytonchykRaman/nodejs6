const {getRndInt} = require("../utils/random");

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

const StudentsNum = getRndInt(3, 10);

module.exports = {cities, specializations, imgs, skills,
    fios, groups, phones, StudentsNum};