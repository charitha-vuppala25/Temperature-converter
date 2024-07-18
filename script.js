const temperatureInput = document.getElementById('temperature-input');
const temperatureUnit = document.getElementById('temperature-unit');
const convertButton = document.getElementById('convert-button');
const convertedTemperature = document.getElementById('converted-temperature');

convertButton.addEventListener('click', () => {
  const temperature = parseFloat(temperatureInput.value);
  const unit = temperatureUnit.value;

  if (isNaN(temperature)) {
    convertedTemperature.textContent = 'Please enter a valid number.';
    return;
  }

  let convertedTemp;
  let convertedUnit;

  switch (unit) {
    case 'celsius':
      convertedTemp = (temperature * 9/5) + 32;
      convertedUnit = 'Fahrenheit';
      break;
    case 'fahrenheit':
      convertedTemp = (temperature - 32) * 5/9;
      convertedUnit = 'Celsius';
      break;
    case 'kelvin':
      convertedTemp = temperature + 273.15;
      convertedUnit = 'Kelvin';
      break;
    default:
      convertedTemp = 'Invalid unit.';
      convertedUnit = '';
  }

  convertedTemperature.textContent = `${convertedTemp.toFixed(2)} ${convertedUnit}`;
});