/* DOM */
const jokeBtn = document.querySelector(".btn_joke");
const jokePara = document.querySelector('.joke');

jokeBtn.addEventListener("click", getJoke);

// Get Joke Function
async function getJoke() {
  const jokeUrl = "https://icanhazdadjoke.com/";
  const response = await fetch(jokeUrl, {
    headers: {
      accept: "application/json",
    },
  });
  const responseData = await response.json();

  jokePara.textContent = responseData.joke;
}
