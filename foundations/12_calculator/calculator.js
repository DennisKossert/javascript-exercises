const add = function(a, b) {
  return Number(a)+Number(b);
};

const subtract = function(a, b) {
	return Number(a)-Number(b);
};

const sum = function(arr) {
	return arr.reduce((total, item) => total + item, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, item) => total * item, 1)
};

const power = function(a, b) {
  let c = a;
	for (let i = 0; i < b-1; i++) {
    c *= a;
  }
  return c;
};

const factorial = function(n) {
  if (n == 0) { return 1; };
	
  let total = 1;
  for (let i = 1; i != n+1; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
