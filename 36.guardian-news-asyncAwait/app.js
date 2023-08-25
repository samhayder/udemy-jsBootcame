/* https://open-platform.theguardian.com/ */
/* API Key => 6683c2ae-7809-4c6a-ba8d-9bdce33a2cc6 */

/* DOM */
const formEl = document.querySelector("form");
const searchInput = document.querySelector(".search");
const newsItems = document.querySelector(".news_item_wrap");

// Event Listener Handling
formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  let search = searchInput.value;

  newsFetch(search);
});

// Fetching News of API
async function newsFetch(search) {
  const url = "https://content.guardianapis.com/search?";
  const apiKey = "6683c2ae-7809-4c6a-ba8d-9bdce33a2cc6";

  let response = await fetch(`${url}q=${search}&api-key=${apiKey}`);

  let responseData = await response.json();

  searchResult(responseData.response.results);
}

// Search  Result function
function searchResult(results) {
  let fetchData = "";

  results.forEach((result) => {
    let sectionName = result.sectionName;
    let date = result.webPublicationDate;
    let webUrl = result.webUrl;
    let webTitle = result.webTitle;

    fetchData += `
      <div class="news_item">
         <p class="news">${sectionName}</p>
         <p class="news">${date}</p>
         <a href="${webUrl}" class="news" target="_blank">${webTitle}</a>
      </div>`;

    newsItems.innerHTML = fetchData;
  });
}
