const convertToCelsius = function(f) {
  let c = Math.round((f - 32) / 1.8 * 10) / 10;
  return c;
};

const convertToFahrenheit = function(c) {
  let f = Math.round((c * 1.8 + 32) * 10) / 10;
  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
