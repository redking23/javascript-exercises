const convertToCelsius = function(Fahrenheit) {

  let toCelcius = 0;
  toCelcius = ((Fahrenheit -32 ) * 5)  / 9;
  let roundedString = toCelcius.toFixed(1);
  let roundedCelcius = parseFloat(roundedString);
  return roundedCelcius;

};

const convertToFahrenheit = function(celcius) {
  let toFahrenheit = 0;
  let roundedFahrenheit;
  let roundedStringF;
  toFahrenheit = ((celcius * 9) / 5) + 32 ;
  roundedStringF = toFahrenheit.toFixed(1);
  roundedFahrenheit = parseFloat(roundedStringF);
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
