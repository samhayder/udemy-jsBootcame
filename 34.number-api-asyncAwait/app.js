/* DOM */
const factPara = document.querySelector(".fact");
const factNumber = document.querySelector(".fact_number");
const factBtn = document.querySelector(".fact_btn");

// Fact Number Event Listener
factBtn.addEventListener("click", () => {
  const number = +factNumber.value;

  factFetch(number);
});

// Fetch Function
async function factFetch(number) {
  const factUrl = "http://numbersapi.com/";
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  const response = await fetch(`${proxyUrl}${factUrl}${number}`, {
    method: "GET",
    headers: {
      "x-requested-with": "text/plain",
    },
  });

  const responseData = await response.text();

  factPara.textContent = responseData;
}
