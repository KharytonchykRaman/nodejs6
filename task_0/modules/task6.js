function add(a, b) {
  return a + b;
}

function getAvg(arr) {
  return arr.reduce((sum, el) => sum + el, 0) / arr.length;
}

module.exports = {add,getAvg};