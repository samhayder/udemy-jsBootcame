/* DOM */
const celciusInput = document.querySelector("#celcius");
const fahrenheitInput = document.querySelector("#fahrenheit");
const kelvinInput = document.querySelector("#kelvin");
const inputs = document.querySelectorAll(".converter_wrapper input");

/* set input event listener */
inputs.forEach((input) => {
  input.addEventListener("input", (evt) => {
    let tempValue = parseInt(evt.target.value);
    let inputName = evt.target.name;

    /* Converter Temperature Value */
    let celciusToFahrenheit = tempValue * 1.8 + 32; // (1°C × 9/5) + 32 = 33.8°F
    let celciusToKelvin = tempValue + 273.15; // 1°C + 273.15 = 274.15K
    let fahrenheitToCelcius = (tempValue - 32) / 1.8; // (1°F − 32) × 5/9 = -17.22°C
    let fahrenheitToKelvin = (tempValue - 32) / 1.8 + 273.15; // (1°F − 32) × 5/9 + 273.15 = 255.928K
    let kelvinToCelcius = tempValue - 273.15; // 1K − 273.15 = -272.1°C
    let kelvinToFahrenheit = (tempValue - 273.15) * 1.8 + 32; // (1K − 273.15) × 9/5 + 32 = -457.9°F

    if (evt.target.value == "") {
      celciusInput.value = null;
      fahrenheitInput.value = null;
      kelvinInput.value = null;

      return;
    }

    if (inputName === "celcius") {
      fahrenheitInput.value = celciusToFahrenheit.toFixed(2);
      kelvinInput.value = celciusToKelvin.toFixed(2);
    } else if (inputName === "fahrenheit") {
      celciusInput.value = fahrenheitToCelcius.toFixed(2);
      kelvinInput.value = fahrenheitToKelvin.toFixed(2);
    } else if (inputName === "kelvin") {
      celciusInput.value = kelvinToCelcius.toFixed(2);
      fahrenheitInput.value = kelvinToFahrenheit.toFixed(2);
    }
  });
});
