let factorialfunction = require("../factorial/index");
let ratiofunction = require("../ratio/index");

let ratioAndFactorial = (no1, no2, no3) => {
  const ratio = ratiofunction(no1, n02);
  const factorial = factorialfunction(no3);
  return { ratio, factorial };
};

module.exports = ratioAndFactorial;
