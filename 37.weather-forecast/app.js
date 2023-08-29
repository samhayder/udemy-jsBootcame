/* url = 'http://api.weatherstack.com' */
/* apiKey = "0dab851b0948bd7ba4be68bdec762438" */

/* DOM */
const form = document.querySelector("form");
const weatherContainer = document.querySelector(".weather_container");

const apiKey = "e95e23297152756d8c1b872c29672560";

// Form Event Listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = document.querySelector(".search").value;

  getWeather(location);
});

// Weather API Function
async function getWeather(location) {
  const response = await fetch(
    `http://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`
  );

  const responseDate = await response.json();

  displayWeather(responseDate);
}

// Displaying Weather Data function
function displayWeather(weather) {
  const current = weather.current;
  const location = weather.location;

  const weatherDetails = `
      <div class="weather_details">
         <div class="weather_title">
            <h2 class="weather_count">32<sup>&#8451</sup></h2>
            <h2 class="weather_info">Sunni</h2>
         </div>
         
         <div class="weather_status">
            <p>Temperature: <span><sup>&#8451</sup></span>  </p>
            <p>Feels Like: <span><sup>&#8451</sup></span> </p>
            <p>Local Time: <span></span> </p>
            <p>Precipitation: <span>mm</span> </p>
            <p>Humidity: <span>%</span> </p>
            <p>Pressure: <span>hPa</span> </p>
            <p>Cloud Cover: <span>%</span> </p>
            <p>Wind Direction: <span></span> </p>
            <p>Wind Degree: <span></span> </p>
            <p>Wind Speed: <span>km/hr</span> </p>
            <p>Latitude: <span></span> </p>
            <p>Longitude: <span></span> </p>
            <p>Region: <span></span> </p>
            <p>Visibility: <span>km</span> </p>
         </div>

      </div>

      <div class="place"><span>Place, Country</span></div>`;

  weatherContainer.innerHTML = weatherDetails;
}
