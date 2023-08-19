/* DOM */
const searchInput = document.querySelector(".search");
const suggestionContainer = document.querySelector(".suggestion");

/* Event Listener */
searchInput.addEventListener("change", displayMatch);
searchInput.addEventListener("keyup", displayMatch);

const cityStates = [];

// Fetch Api
fetch(
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
)
  .then((response) => {
    const message = `Error: ${response.status}`;
    if (!response.ok) {
      throw new Error(message);
    }
    return response.json();
  })
  .then((responseData) => {
    cityStates.push(...responseData);
  })
  .catch((error) => console.log(error));

// Find Matches function
function findMatches(wordToMatch, cityStates) {
  return cityStates.filter((cityState) => {
    let regX = new RegExp(wordToMatch, "ig");
    return cityState.city.match(regX) || cityState.state.match(regX);
  });
}

// Display Matches function
function displayMatch() {
  let findArray = findMatches(this.value, cityStates);

  let matchEl = findArray.map((place) => {
    let regX = new RegExp(this.value, "ig");

    let cityName = place.city.replace(
      regX,
      `<span class="highlight">${this.value}</span>`
    );

    let stateName = place.state.replace(
      regX,
      `<span class="highlight">${this.value}</span>`
    );

    return `<li>${cityName}, ${stateName}</li>`;
  }).join("");

  suggestionContainer.innerHTML = matchEl;
}
