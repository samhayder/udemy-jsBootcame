/*  */

/* DOM */
let duck = document.querySelector(".duck");
let fox = document.querySelector(".fox");
let dog = document.querySelector(".dog");

const btnDuck = document.querySelector(".btn_duck");
const btnFox = document.querySelector(".btn_fox");
const btnDog = document.querySelector(".btn_dog");

// Event Listener
btnDuck.addEventListener("click", getRandomDuck);
btnFox.addEventListener("click", getRandomFox);
btnDog.addEventListener("click", getRandomDog);

// Get Random Duck Image function
function getRandomDuck() {
  fetch("https://random-d.uk/api")
    .then((response) => {
      const message = `Error: ${response.status}`;
      if (!response.ok) {
        throw new Error(message);
      }
      return response.json();
    })
    .then((responseData) => {
      duck.innerHTML = `<img src="${responseData.url}"/>`;
    })
    .catch((error) => console.log(error));
}

// Get Random Fox Image function
function getRandomFox() {
  fetch("https://randomfox.ca/floof/")
    .then((response) => {
      const message = `Error: ${response.status}`;
      if (!response.ok) {
        throw new Error(message);
      }
      return response.json();
    })
    .then((responseData) => {
      fox.innerHTML = `<img src="${responseData.image}"/>`;
    })
    .catch((error) => console.log(error));
}

// Get Random Dog Image Function
function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((response) => response.json())
    .then((responseData) => {
      dog.innerHTML = `<img src="${responseData.url}"/>`;
    })
    .catch((error) => console.log(error));
}
